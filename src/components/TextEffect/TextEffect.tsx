import React from 'react';
import Milky from '../Milky';
import Stroke from '../Stroke';
import styles from './TextEffect.module.scss';

// https://freefrontend.com/css-text-effects/

type ITextEffectProps = TextEffectPropsType<'stroke', typeof Stroke> | TextEffectPropsType<'milky', typeof Milky>;

function TextEffect({ text = '', ...props }: ITextEffectProps) {
  if (props.type === 'stroke') {
    const { type, ...rest } = props;
    return <Stroke text={text} {...rest} />;
  } else if (props.type === 'milky') {
    const { type, ...rest } = props;
    return <Milky text={text} {...rest} />;
  }
  return null;
}

export default TextEffect;

type TextEffectPropsType<K extends string, T extends (...args: any) => any> = Omit<Parameters<T>[0], 'text'> & {
  type: K;
  text?: string;
};
