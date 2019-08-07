import { css } from 'styled-components';
import { breakPoints } from '../Variables';
import { Brightness } from './color';
import { Unit } from './unit';

// 미디어쿼리
// ex) ${mediaQuery.desktopL(css`width: 768px; ...`)}
const mediaQuery = Object.keys(breakPoints).reduce((acc, label) => {
  acc[label] = args => css`
    @media screen and (${
      label.indexOf('pc') === 0 ? `min-width` : `max-width`
    }: ${breakPoints[label]}px) {
      ${args};
    }
  `;
  return acc;
}, {});

// 색상조절
const colors = {
  lighten: (color, amt) => {
    let value = Math.abs(parseInt(amt));
    return Brightness.lightenDarkenColor(color, value);
  },
  darken: (color, amt) => {
    let value = Math.abs(parseInt(amt)) * -1;
    return Brightness.lightenDarkenColor(color, value);
  }
};

// 단위
const unit = {
  rem: size => {
    return Unit.rem(size);
  }
};

// 기본 mixin
const mixin = {
  // float 해제
  clear: () => css`
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  `
};
export { mediaQuery, colors, unit, mixin };
