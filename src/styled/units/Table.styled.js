import { css } from 'styled-components';
import { color, commons, fonts } from '../Variables';

const { fontSizeBase } = fonts,
  { componentMarginBottom, borderWidth } = commons,
  { gray100, gray200, gray300 } = color;

const TableStyled = css`
  .table {
    position: relative;
    margin-bottom: ${componentMarginBottom};

    table {
      width: 100%;
      font-size: ${fontSizeBase};

      caption {
        width: 0;
        height: 0;
        margin: 0;
        padding: 0;
        font-size: 0;
        line-height: 0;
        overflow: hidden;
      }

      thead,
      tbody {
        border-right: ${borderWidth} solid ${gray300};
        border-top: ${borderWidth} solid ${gray300};
      }

      thead {
        th {
          vertical-align: bottom;
          border-bottom: 2px solid ${gray300};
        }
      }

      th,
      td {
        position: relative;
        padding: 10px;
        border-left: ${borderWidth} solid ${gray300};
        border-bottom: ${borderWidth} solid ${gray300};
        span {
          word-break: keep-all;
        }
        &.table-ellipsis {
          &:after {
            content: '';
            display: inline-block;
          }
          > span {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            position: absolute;
            left: 0;
            right: 0;
            padding-left: 10px;
            padding-right: 10px;
          }
        }
      }
      .tableimg {
        img {
          max-width: 100%;
        }
      }
    }

    &.vertical {
      overflow-x: auto;
      table {
        min-width: 740px;
        tbody {
          tr {
            &:nth-of-type(odd) {
              background: ${gray100};
            }
            &:hover {
              background-color: ${gray200};
            }
          }
        }
      }
    }
  }
`;

export { TableStyled };
