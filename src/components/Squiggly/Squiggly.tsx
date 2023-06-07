import React from 'react';
import styles from './Squiggly.module.scss';

interface ISquigglyProps {
  text: string;
}

// see: https://codepen.io/lbebber/pen/KwGEQv/
function Squiggly({ text }: ISquigglyProps) {
  return (
    <div className={styles.root}>
      <div className={styles.test}>
        {text}
        {/* <p class="small">– with – <p/>
  SVG Filters 
  <p class="small">(you can even edit this text)</p>
  <p class="smaller">(only tested on Chrome so far)</p> */}
      </div>

      <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="squiggly-0">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0" />
            <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
          </filter>
          <filter id="squiggly-1">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          </filter>

          <filter id="squiggly-2">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          </filter>
          <filter id="squiggly-3">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          </filter>

          <filter id="squiggly-4">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Squiggly;
