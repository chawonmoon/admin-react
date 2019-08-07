import { css } from 'styled-components';
import { commons } from '../Variables';

const { borderRadius } = commons;

const ColorpickerStyled = css`
  .color-picker {
    position: relative;
    display: flex;
    justify-content: flex-start;
    .color-swatch {
      padding: 2px;
      background: #fff;
      border: 1px solid #ccc;
      border-top-left-radius: ${borderRadius};
      border-bottom-left-radius: ${borderRadius};
      border-right: 0;
      display: inline-block;
      cursor: pointer;
      > div {
        width: 28px;
        height: 27px;
        border-radius: ${borderRadius};
      }
      + input {
        &[type='text'] {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
        &[readonly] {
          width: 100%;
          max-width: 150px;
          background: #fff;
          text-indent: 5px;
          border: 1px solid #ccc;
        }
      }
    }
    .color-popover {
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 2;
      .color-cover {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
    }
  }
`;

export { ColorpickerStyled };
