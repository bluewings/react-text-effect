import { css, cx } from '@emotion/css';
// import cx from 'classnames';
import React, { useMemo, useRef } from 'react';
import useTextStyle from '../../hooks/useTextStyle';
import styles from './Stroke.module.scss';

interface IStrokeProps {
  text: string;
  maxFontSize?: number;
  shadow?: boolean;
  shadowColor?: string;
  fillColor?: string;
}

// console.log(css);

const DEFAULT_SHADOW_COLOR = '#5fc6fa';

// see: https://codepen.io/markmead/pen/YjQKeZ
function Stroke({ text, maxFontSize, shadow, fillColor, shadowColor = DEFAULT_SHADOW_COLOR }: IStrokeProps) {
  const ref = useRef(null);
  const textSize = useTextStyle<HTMLDivElement>(ref, text ?? '', { maxFontSize });

  // const {fontSuze}

  const { fontSize } = textSize;

  const a = useMemo(() => {
    const shadowOffset = fontSize / 30;
    const strokeWidth = fontSize / 90;

    // @include stroke-width(2px);

    return css`
      .${styles.shadow} {
        text-shadow: ${shadowOffset}px ${shadowOffset}px ${shadowColor};
      }
      .${styles.stroke} {
        -webkit-text-stroke-width: ${strokeWidth}px;
        -moz-text-stroke-width: ${strokeWidth}px;
      }
      ${fillColor
        ? `.${styles.stroke} {
          color: ${fillColor}
      }`
        : ''}
    `;
  }, [fontSize, fillColor, shadowColor]);

  return (
    <div ref={ref} className={cx(styles.container, a)}>
      <span className={cx(styles.stroke, shadow && styles.shadow)} style={textSize}>
        {text}
      </span>
    </div>
  );
}

export default Stroke;
