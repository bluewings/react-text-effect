import React from 'react';
import Sliced from './Sliced';
import styles from './TextEffect.module.scss';

// https://freefrontend.com/css-text-effects/

interface ITextEffectProps {
  message?: string;
}

function TextEffect({ message }: ITextEffectProps) {
  return (
    <div className={styles.root}>
      <Sliced message={message} />
    </div>
  );
}

export default TextEffect;
