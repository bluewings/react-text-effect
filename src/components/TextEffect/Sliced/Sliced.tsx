import cx from 'classnames';
import React, { useRef } from 'react';
import useTextStyle from '../../../hooks/useTextStyle';
import styles from './Sliced.module.scss';

interface ISlicedProps {
  message?: string;
  fontSize?: string | number;
}

function Sliced({ message }: ISlicedProps) {
  const ref = useRef(null);
  const textSize = useTextStyle<HTMLDivElement>(ref, message ?? '');

  return (
    <div ref={ref} className={styles.container}>
      <span className={cx(styles.stroke, styles.shadow)} style={textSize}>
        {message}
      </span>
    </div>
  );
}

export default Sliced;
