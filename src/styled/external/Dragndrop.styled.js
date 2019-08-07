import { css } from 'styled-components';
import { commons } from '../Variables';
import { mediaQuery, mixin } from '../function';

const { borderRadius } = commons;

const DragndropStyled = css`
  .drag-lists {
    background: #e9ecef;
    border-radius: ${borderRadius};
    padding: 4px;
    .drag-items {
      border: 1px solid #ccc;
      border-radius: ${borderRadius};
      background: #fff;
      user-select: none;
      padding: 16px;
      ${mixin.clear()}
      p {
        float: left;
        max-width: calc(100% - 125px);
        margin-bottom: 0;
        .title {
          display: inline-block;
          font-size: 16px;
          font-style: normal;
          max-width: calc(100% - 35px);
        }
        .badges {
          display: inline-block;
          margin-left: 30px;
        }
        i {
          display: inline-block;
          padding: 5px;
          margin-right: 10px;
          background: #e9ecef;
          border: 1px solid #ccc;
          font-size: 12px;
          vertical-align: top;
          &:hover {
            background: #ccc;
            cursor: s-resize;
          }
        }
      }
      .box-inline {
        float: right;
      }
      &.dragging {
        cursor: grabbing;
      }
    }
  }

  ${mediaQuery.tabletS(css`
    .drag-lists {
      .drag-items {
        p {
          float: none;
          max-width: 100%;
          .badges {
            display: block;
          }
        }
        .box-inline {
          float: none;
          margin-top: 10px;
          text-align: right;
        }
      }
    }
  `)}
`;

export { DragndropStyled };
