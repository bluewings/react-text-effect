import React from 'react';
import styles from './Squiggly.module.scss';

interface ISquigglyProps {
  text: string;
}

// see: https://codepen.io/lbebber/pen/KwGEQv/
function Squiggly(props: ISquigglyProps) {
  return (
    <div className={styles.root}>
      <h1>Squiggly</h1>
    </div>
  );
}

export default Squiggly;
