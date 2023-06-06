import React from 'react';
import styles from './GooeyBackground.module.scss';

interface IGooeyBackgroundProps {
  text: string;
}

// see: https://codepen.io/ines/pen/NXbmRO
function GooeyBackground(props: IGooeyBackgroundProps) {
  return (
    <div className={styles.root}>
      <h1>GooeyBackground</h1>
    </div>
  );
}

export default GooeyBackground;
