import { css, cx } from '@emotion/css';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'antd';
import { ReactElement, useMemo, useState } from 'react';
import Stroke from '../components/Stroke';
import styles from './Stroke.stories.module.scss';

const fonts = [
  { name: '가나초콜릿체', fontFamily: 'ghanachoco' },
  { name: '김정철명조', fontFamily: 'KimjungchulMyungjo-Bold' },
  { name: '넥슨 배찌체', fontFamily: 'Bazzi' },
  { name: '더잠실체', fontFamily: 'TheJamsil5Bold' },
  { name: '독립기념관체', fontFamily: 'Independence_hall' },
  { name: '땅스부대찌개', fontFamily: 'TTTtangsbudaejjigaeB' },
  { name: '마포애민', fontFamily: 'MapoAgape' },
  { name: '밀양영남루체', fontFamily: 'MYYeongnamnu' },
  { name: '빙그레 싸만코체', fontFamily: 'BinggraeSamanco-Bold' },
  { name: '수성혜정체', fontFamily: 'SuseongHyejeong' },
  { name: '여기어때 잘난체', fontFamily: 'yg-jalnan' },
  { name: '영양군 음식디미방체', fontFamily: 'dimibang_new' },
  { name: '완도희망체', fontFamily: 'WandohopeR' },
  { name: '정선아리랑혼체', fontFamily: 'JSArirangHON-Regular' },
  { name: '카페24 단정해', fontFamily: 'Cafe24Danjunghae' },
  { name: '카페24 당당해', fontFamily: 'Cafe24Dangdanghae' },
  { name: '카페24 써라운드', fontFamily: 'Cafe24Ssurround' },
  { name: '카페24 아네모네', fontFamily: 'Cafe24Ohsquare' },
  { name: '카페24 클래식타입', fontFamily: 'Cafe24ClassicType-Regular' },
  { name: '쿠키런', fontFamily: 'CookieRun-Regular' },
  { name: 'Gmarket Sans', fontFamily: 'GmarketSansMedium' },
  { name: 'KCC무럭무럭체', fontFamily: 'KCCMurukmuruk' },
];

const fontFamilies = (Story: React.FC) => {
  const [font, setFont] = useState(fonts[0]);

  const className = useMemo(
    () => css`
      font-family: ${font.fontFamily};
    `,
    [font.fontFamily],
  );
  return (
    <div className={cx(styles.root, className)}>
      <div className={styles.control}>
        {fonts.map((e, i) => (
          <Button
            size="large"
            type={font === e ? 'primary' : 'default'}
            onClick={() => setFont(e)}
            style={{ fontFamily: e.fontFamily, verticalAlign: 'bottom', margin: '0 0.5rem 0.5rem 0' }}
          >
            {e.name}
          </Button>
        ))}
      </div>
      <Story key={font.name} />
    </div>
  );
};

const meta: Meta<typeof Stroke> = {
  title: 'Example/Stroke',
  component: Stroke,
  decorators: [fontFamilies],
  args: {
    text: '보글보글 부대찌개',
  },
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    shadow: true,
  },
};

export const MaxFontSize = {
  args: {
    shadow: true,
    maxFontSize: 100,
  },
};

export const ShadowColor = {
  args: {
    shadow: true,
    shadowColor: 'blue',
  },
};

export const FillColor = {
  args: {
    shadow: true,
    fillColor: '#fff',
  },
};
