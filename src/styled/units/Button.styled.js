import { css } from 'styled-components';
import { color, commons, fonts, themeColor } from '../Variables';
import { colors } from '../function';

const { fontSizeBase, lineHeightBase } = fonts,
  { borderRadius, borderWidth } = commons,
  { white, black } = color;

const ButtonStyled = css`
  .btn {
    display: inline-block;
    color: ${white};
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: ${borderWidth} solid transparent;
    padding: 6px 12px;
    margin-right: 5px;
    font-size: ${fontSizeBase};
    line-height: ${lineHeightBase};
    border-radius: ${borderRadius};
    transition: all 0.15s ease-in-out;
    > i {
      font-size: ${parseInt(fontSizeBase.replace(/[^0-9]/g, '') - 2)}px;
      margin-right: 5px;
    }
    &.sm {
      padding: 3px 6px;
      font-size: ${parseInt(fontSizeBase.replace(/[^0-9]/g, '') / 1.2)}px;
      > i {
        font-size: ${parseInt(fontSizeBase.replace(/[^0-9]/g, '') - 2) / 1.6}px;
      }
    }
    &.full {
      width: 100%;
    }
    &:last-child {
      margin-right: 0;
    }

    ${() => {
      let styled = '';
      for (let key in themeColor) {
        styled +=
          '&-' +
          key +
          '{color:' +
          (key === 'warning' ? black : white) +
          '; background-color:' +
          themeColor[key] +
          '; border-color:' +
          themeColor[key] +
          '; &:hover { ' +
          '&:not(:disabled) { ' +
          'background-color: ' +
          colors.darken(themeColor[key], 20) +
          '; border-color: ' +
          colors.darken(themeColor[key], 20) +
          ';}' +
          '}' +
          '}\n';
      }
      return css`
        ${styled}
      `;
    }}
  }
`;

export { ButtonStyled };
