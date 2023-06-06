import React from 'react';
import styles from './Milky.module.scss';

interface IMilkyProps {
  text: string;
}

// see: https://codepen.io/juanbrujo/pen/ZEzKRx
function Milky(props: IMilkyProps) {
  return (
    <div className={styles.root}>
      <h1>Milky</h1>
    </div>
  );
}

export default Milky;
