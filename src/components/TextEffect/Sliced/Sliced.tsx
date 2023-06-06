import React from 'react';
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
      <span style={textSize}>{message}</span>
    </div>
  );
}

export default Sliced;
