import type { Meta, StoryObj } from '@storybook/react';
import TextEffect from '../components/TextEffect';

const meta: Meta<typeof TextEffect> = {
  title: 'Example/TextEffect',
  component: TextEffect,
  tags: ['autodocs'],
  argTypes: {
    // type: {
    //   type: 'string',
    //   con
    // },
    // text: {
    //   type: 'string',
    //   // control: 'color',
    // },
    // type: { type: 'string', description: '`string`' },
    // error: { type: 'boolean', description: '`boolean`' },
    // backgroundColor: {
    //   control: 'color',
    // },
    // children: ,
    // children: <>button</>,
  },
  args: {
    type: 'stroke',
    text: '부대찌개',
    shadow: true,
    // children: 'BUTTON',
  },
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    text: '부대찌개',
    shadow: false,
  },
};

export const Shadow = {
  args: {
    text: '부대찌개',
    shadow: true,
  },
};

export const Milky = {
  args: {
    type: 'milky',
    text: '아침엔 우유 한잔',
    shadow: true,
  },
};

// export const Secondary = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
