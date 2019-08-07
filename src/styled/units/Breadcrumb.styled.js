import { css } from 'styled-components';
import { color, commons } from '../Variables';

const { gray300, gray600 } = color,
  { borderRadius } = commons;

const BreadcrumbStyled = css`
  .breadcrumbs-wrap {
    padding: 12px 16px;
    margin-bottom: 16px;
    background-color: ${gray300};
    border-radius: ${borderRadius};
    overflow: hidden;
    .breadcrumbs {
      float: right;
      overflow: hidden;
      .breadcrumb-item {
        float: left;
        padding-left: 7px;
        & + .breadcrumb-item::before {
          content: '〉';
          display: inline-block;
          padding-right: 7px;
        }
        &.active {
          color: ${gray600};
        }
      }
    }
  }
`;

export { BreadcrumbStyled };
