import React from 'react';
import Stroke from '../Stroke';
import styles from './TextEffect.module.scss';

// https://freefrontend.com/css-text-effects/

interface ITextEffectProps {
  text?: string;
}

function TextEffect({ text = '', ...rest }: ITextEffectProps) {
  return (
    <div className={styles.root}>
      <Stroke text={text} {...rest} />
    </div>
  );
}

export default TextEffect;
