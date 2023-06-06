import cx from 'classnames';
import React, { useRef } from 'react';
import useTextStyle from '../../hooks/useTextStyle';
import styles from './Stroke.module.scss';

interface IStrokeProps {
  text: string;
  shadow?: boolean;
}

function Stroke({ text, shadow }: IStrokeProps) {
  const ref = useRef(null);
  const textSize = useTextStyle<HTMLDivElement>(ref, text ?? '');

  return (
    <div ref={ref} className={styles.container}>
      <span className={cx(styles.stroke, shadow && styles.shadow)} style={textSize}>
        {text}
      </span>
    </div>
  );
}

export default Stroke;
