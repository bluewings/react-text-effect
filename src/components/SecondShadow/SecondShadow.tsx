import React from 'react';
import styles from './SecondShadow.module.scss';

interface ISecondShadowProps {
  text: string;
}

// see: https://codepen.io/team/codeschool/pen/BKrRwg/
function SecondShadow(props: ISecondShadowProps) {
  return (
    <div className={styles.root}>
      <h1>SecondShadow</h1>
    </div>
  );
}

export default SecondShadow;
