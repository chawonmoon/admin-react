import { css } from 'styled-components';
import { color, commons } from '../Variables';

const {
    borderRadius,
    borderWidth,
    componentMarginTop,
    componentMarginBottom
  } = commons,
  { gray400 } = color;

const BoxStyled = css`
  .box {
    &-component {
      margin-top: ${componentMarginTop};
      margin-bottom: ${componentMarginBottom};
    }

    &-form {
      margin-bottom: ${componentMarginBottom};
    }

    &-border {
      border: ${borderWidth} solid ${gray400};
      border-radius: ${borderRadius};
      padding: 15px 15px 0 15px;
      h2 {
        margin-bottom: 15px;
        padding-bottom: 5px;
        border-bottom: ${borderWidth} solid ${gray400};
      }
    }
  }
`;

export { BoxStyled };
