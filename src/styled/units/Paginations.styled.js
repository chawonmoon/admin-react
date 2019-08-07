import { css } from 'styled-components';
import { color, commons, fonts } from '../Variables';
import { colors, mediaQuery } from '../function';

const { borderRadius } = commons,
  { lineHeightBase } = fonts,
  { white, blue, gray200, gray300, gray600 } = color;

const PaginationsStyled = css`
  .pagination-wrap {
    .pagination {
      overflow: hidden;
      padding-left: 0;
      border-radius: ${borderRadius};
      .page-item {
        float: left;
        .page-link {
          position: relative;
          display: block;
          padding: 8px 12px;
          margin-left: -1px;
          line-height: ${lineHeightBase};
          color: ${blue};
          background-color: ${white};
          border: 1px solid ${gray300};
          &:hover {
            z-index: 2;
            color: ${colors.darken(`${blue}`, 15)};
            text-decoration: none;
            background-color: ${gray200};
            border-color: ${gray300};
          }
        }

        &:first-child .page-link {
          margin-left: 0;
          border-top-left-radius: ${borderRadius};
          border-bottom-left-radius: ${borderRadius};
        }

        &.disabled .page-link {
          color: ${gray600};
          pointer-events: none;
          cursor: auto;
          background-color: ${white};
          border-color: ${gray300};
        }

        &.active .page-link {
          z-index: 1;
          color: ${white};
          background-color: ${blue};
          border-color: ${blue};
        }
      }
    }
  }

  ${mediaQuery.tabletS(css`
    .pagination-wrap {
      text-align: center;
      .pagination {
        display: inline-block;
        .page-item {
          .page-link {
            padding: 4px 10px;
          }
        }
      }
    }
  `)}
`;

export { PaginationsStyled };
