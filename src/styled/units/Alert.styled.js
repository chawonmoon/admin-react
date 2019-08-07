import { css } from 'styled-components';
import { color, commons, themeColor } from '../Variables';
import { colors } from '../function';

const { borderRadius, borderWidth } = commons,
  { gray200 } = color;

const AlertStyled = css`
  .alert {
    position: relative;
    padding: 12px 20px;
    margin: 8px 0;
    border: ${borderWidth} solid transparent;
    border-radius: ${borderRadius};

    ${() => {
      let styled = '';
      for (let key in themeColor) {
        styled +=
          '&.' +
          key +
          '{color:' +
          (key === 'dark' ? gray200 : colors.darken(themeColor[key], 40)) +
          '; background-color:' +
          colors.lighten(themeColor[key], 40) +
          '; border-color:' +
          colors.lighten(themeColor[key], 10) +
          ';}\n';
      }
      return css`
        ${styled}
      `;
    }}
  }
`;
export { AlertStyled };
