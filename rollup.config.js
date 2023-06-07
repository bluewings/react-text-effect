import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

const pkg = require('./package.json');

const external = Object.keys(pkg?.dependencies || {});

const rollupConfig = {
  input: './src/module.ts',
  external,
  plugins: [typescript(), postcss(), commonjs(), nodeResolve()],
};

const cjs = {
  ...rollupConfig,
  output: {
    file: pkg.main,
    format: 'cjs',
    sourcemap: true,
  },
};

const esm = {
  ...rollupConfig,
  output: {
    file: pkg.module,
    format: 'esm',
    sourcemap: true,
  },
};

module.exports = [cjs, esm];
