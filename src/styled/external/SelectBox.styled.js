import { css } from 'styled-components';
import { color, commons } from '../Variables';
import { mediaQuery } from '../function';

const { borderRadius } = commons,
  { gray400 } = color;

const SelectBoxStyled = css`
  .selectbox-wrap,
  .selectboxMulti-wrap {
    .selectbox {
      > div {
        border-radius: ${borderRadius};
      }
      > span + div {
        border-color: ${gray400};
        box-shadow: 0 0 2px 1px rgba(77, 144, 254, 0.9);
      }
      div[class$='-multiValue'] {
        > div {
          text-overflow: clip;
          white-space: normal;
        }
      }
    }
  }

  .selectboxMulti-wrap {
    min-width: 220px;
    .badge {
      margin-left: 5px;
    }
  }

  ${mediaQuery.tabletS(css`
    .selectboxMulti-wrap {
      min-width: 100%;
    }
  `)}
`;

export { SelectBoxStyled };
