import cx from 'classnames';
import React, { useRef } from 'react';
import useTextStyle from '../../hooks/useTextStyle';
import styles from './Milky.module.scss';

interface IMilkyProps {
  text: string;
}

// see: https://codepen.io/juanbrujo/pen/ZEzKRx
function Milky({ text }: IMilkyProps) {
  const ref = useRef(null);
  const textSize = useTextStyle<HTMLDivElement>(ref, text ?? '');

  return (
    <div ref={ref} className={styles.container}>
      <span className={cx(styles.milky)} style={textSize}>
        {text}
      </span>
    </div>
  );
}

export default Milky;
