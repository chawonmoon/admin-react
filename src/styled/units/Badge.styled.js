import { css } from 'styled-components';
import { color, commons, fonts, themeColor } from '../Variables';
import { colors } from '../function';

const { fontSizeBase, fontWeightBold, lineHeightBase } = fonts,
  { borderRadius } = commons,
  { white, black } = color;

const regex = /[^0-9]/g,
  defaultFontSize = parseInt(String(fontSizeBase).replace(regex, '')) - 3,
  defaultLineHeight = parseInt(String(lineHeightBase).replace(regex, '')) - 0.5,
  defaultBorderRadiusFill =
    parseInt(String(borderRadius).replace(regex, '')) * 2;

const BadgeStyled = css`
  .badge {
    display: inline-block;
    padding: 3px 6px;
    margin-right: 5px;
    font-size: ${defaultFontSize}px;
    font-weight: ${fontWeightBold};
    line-height: ${defaultLineHeight}px;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: ${borderRadius};
    &.fill {
      border-radius: ${defaultBorderRadiusFill}px;
    }
    &.big {
      font-size: ${`${defaultFontSize}` + 2}px;
      line-height: ${`${defaultLineHeight}` + 0.7}px;
    }
    &:last-child {
      margin-right: 0;
    }
    & > .badge {
      vertical-align: baseline;
    }

    ${() => {
      let styled = '';
      for (let key in themeColor) {
        styled +=
          '&.' +
          key +
          '{color:' +
          (key === 'warning' || key === 'light' ? black : white) +
          '; background-color:' +
          themeColor[key] +
          '; border-color:' +
          themeColor[key] +
          '; &[href]:hover,&button:hover { &:not(:disabled) { background-color: ' +
          colors.darken(themeColor[key], 20) +
          '; border-color: ' +
          colors.darken(themeColor[key], 20) +
          ';}}}\n';
      }
      return css`
        ${styled}
      `;
    }}
  }
`;

export { BadgeStyled };
