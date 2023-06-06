import React from 'react';
import styles from './TextEffect.module.scss';

interface ITextEffectProps {
  /**
   * Prop Description
   */
  message?: string;
}

/**
 * Component Description
 */
function TextEffect(props: ITextEffectProps) {
  return (
    <div className={styles.root}>
      <h1>TextEffect</h1>
    </div>
  );
}

export default TextEffect;
