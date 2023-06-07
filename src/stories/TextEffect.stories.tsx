import type { Meta, StoryObj } from '@storybook/react';
import TextEffect from '../components/TextEffect';

const meta: Meta<typeof TextEffect> = {
  title: 'Example/TextEffect',
  // @ts-ignore
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
    // shadow: true,
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
  decorators: [
    (Story: any) => (
      <div style={{ padding: '3rem 2rem 1rem', background: 'linear-gradient(to bottom, #ece4d9 0%, #e9dfd1 100%)' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};

export const Squiggly = {
  args: {
    type: 'squiggly',
    text: '오늘도 떡볶이',
  },
  decorators: [
    (Story: any) => (
      <div style={{ padding: '2rem', background: '#000', color: '#fff' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};

export const SecondShadow = {
  args: {
    type: 'second-shadow',
    text: '지금 시작',
    shadow: true,
  },
  decorators: [
    (Story: any) => (
      <div style={{ padding: '2rem' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
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
