import { css } from 'styled-components';
import { color, commons, themeColor } from '../Variables';
import { mediaQuery, mixin } from '../function';

const { gray300 } = color,
  { basic } = themeColor,
  { borderRadius, componentMarginBottom } = commons;

const Grouping = css`
  .btn-group {
    text-align: center;
    margin-bottom: 15px;
    padding: 14px;
    background: ${gray300};
    border-radius: ${borderRadius};
    &::after {
      content: '';
      display: block;
      clear: both;
    }
    & > :nth-child(1) {
      float: left;
    }
    & > :nth-child(2) {
      float: right;
    }
    & > .pagination-wrap + .btn {
      padding: 8px 12px;
    }
    &.modal {
      background: transparent;
      padding-bottom: 0;
      padding-right: 0;
      margin-bottom: 0;
      & > :nth-child(1) {
        float: right;
      }
    }

    ${mediaQuery.tabletS(css`
      .pagination-wrap {
        width: 100%;
      }
    `)}
  }

  .board-group {
    margin-bottom: ${componentMarginBottom};
    ${mixin.clear()}
    .select {
      display: inline-block;
      width: 150px;
    }
    .numbering {
      float: left;
      min-width: 150px;
      .selectboxsMulti-wrap {
        .selectbox {
          > div:first-child > div:first-child {
            flex-basis: auto;
          }
        }
      }
    }
    .searching {
      float: right;
      .searchbox {
        display: inline-block;
        vertical-align: top;
        width: 290px;
        margin-left: 5px;
        .form-input[type='search'] {
          display: inline-block;
          width: calc(100% - 44px);
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        .btn {
          background: ${basic};
          vertical-align: top;
          padding: 7px 9px 8px 15px;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
    }

    ${mediaQuery.tabletL(css`
      & .select {
        width: 100%;
        min-width: 100%;
        margin-bottom: 5px;
      }
      .searching {
        width: 100%;
        margin-bottom: 5px;
        .searchbox {
          width: 100%;
          margin-left: 0;
        }
      }
    `)}
  }
`;

export { Grouping };
