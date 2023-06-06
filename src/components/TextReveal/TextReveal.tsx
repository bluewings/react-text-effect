import React from 'react';
import styles from './TextReveal.module.scss';

interface ITextRevealProps {
  text: string;
}

// see: https://codepen.io/sedlukha/pen/eRoYMZ
function TextReveal(props: ITextRevealProps) {
  return (
    <div className={styles.root}>
      <h1>TextReveal</h1>
    </div>
  );
}

export default TextReveal;
