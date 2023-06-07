import { RefObject, useLayoutEffect, useMemo, useState } from 'react';

const MIN_FONT_SIZE = 16;
const MAX_FONT_SIZE = 16 * 15;

function useTextStyle<T extends HTMLElement>(ref: RefObject<T>, text: string) {
  const [containerWidth, setWidth] = useState(0);

  const observer = useMemo(
    () =>
      new (window as any).ResizeObserver((entries: any) => {
        if (entries[0]) {
          setWidth(entries[0].contentRect.width);
        }
      }),
    [],
  );

  useLayoutEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [ref.current]);

  const [style, setStyle] = useState({ fontSize: 0, width: 0, height: 0 });

  useLayoutEffect(() => {
    if (ref.current && containerWidth > 0) {
      const container = ref.current;
      const inspector = document.createElement('div');
      inspector.style.position = 'fixed';
      inspector.style.pointerEvents = 'none';
      inspector.style.opacity = '0';
      inspector.innerText = text;
      container.appendChild(inspector);
      document.fonts.ready.then(() => {
        let fontSize = MAX_FONT_SIZE;
        while (MIN_FONT_SIZE < fontSize) {
          inspector.style.fontSize = `${~~fontSize}px`;
          const rect = inspector.getBoundingClientRect();
          if (rect.width <= containerWidth) {
            break;
          }
          fontSize = fontSize * 0.9;
        }
        const { width, height } = inspector.getBoundingClientRect();
        setStyle({ fontSize: parseInt(window.getComputedStyle(inspector).fontSize), width, height });
        container.removeChild(inspector);
      });
    }
  }, [ref, text, containerWidth]);

  return style;
}

export default useTextStyle;
