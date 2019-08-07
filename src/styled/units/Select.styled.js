import { css } from 'styled-components';
import { color, commons } from '../Variables';

const { borderRadius, borderWidth } = commons,
  { white, gray400 } = color;

const SelectStyled = css`
  .select {
    position: relative;
    vertical-align: top;
    select {
      position: relative;
      appearance: none;
      width: 100%;
      box-sizing: border-box;
      border: ${borderWidth} solid ${gray400};
      border-radius: ${borderRadius};
      border-color: ${gray400};
      background: transparent;
      padding: 7px 40px 8px 10px;
      z-index: 2;

      &::-ms-expand {
        display: none;
      }
      &:focus + .bullet svg {
        opacity: 1;
      }
    }

    .bullet {
      display: block;
      position: absolute;
      top: 1px;
      right: 1px;
      width: 32px;
      height: calc(
        100% - ${parseInt(borderWidth.replace(/[^0-9]/g, '') * 2)}px
      );
      padding: 5px 0 0 2px;
      margin-right: 2px;
      background: ${white};
      z-index: 1;
      svg {
        opacity: 0.25;
      }
      &:before {
        content: '';
        display: block;
        width: 1px;
        height: 20px;
        position: absolute;
        top: 8px;
        left: -7px;
        border-left: ${borderWidth} solid ${gray400};
      }
    }

    &.inline {
      display: inline-block;
      width: 130px;
      margin-right: 10px;
    }
  }
`;
export { SelectStyled };
