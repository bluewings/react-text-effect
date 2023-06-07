import React from 'react';
import Milky from '../Milky';
import SecondShadow from '../SecondShadow';
import Squiggly from '../Squiggly';
import Stroke from '../Stroke';
import styles from './TextEffect.module.scss';

// https://freefrontend.com/css-text-effects/

type ITextEffectProps =
  | TextEffectPropsType<'milky', typeof Milky>
  | TextEffectPropsType<'second-shadow', typeof SecondShadow>
  | TextEffectPropsType<'squiggly', typeof Squiggly>
  | TextEffectPropsType<'stroke', typeof Stroke>;

function TextEffect({ text = '', ...props }: ITextEffectProps) {
  const texts = text
    .split('\n')
    .map((e) => e.trim())
    .filter(Boolean);

  return texts.length > 0
    ? texts.map((text, i) => {
        return <TextEffectInner key={i} text={text} {...props} />;
      })
    : null;
}

function TextEffectInner({ text = '', ...props }: ITextEffectProps) {
  if (props.type === 'stroke') {
    const { type, ...rest } = props;
    return <Stroke text={text} {...rest} />;
  } else if (props.type === 'milky') {
    const { type, ...rest } = props;
    return <Milky text={text} {...rest} />;
  } else if (props.type === 'second-shadow') {
    const { type, ...rest } = props;
    return <SecondShadow text={text} {...rest} />;
  } else if (props.type === 'squiggly') {
    const { type, ...rest } = props;
    return <Squiggly text={text} {...rest} />;
  }
  return null;
}

export default TextEffect;

type TextEffectPropsType<K extends string, T extends (...args: any) => any> = Omit<Parameters<T>[0], 'text'> & {
  type: K;
  text?: string;
};
