import { css } from 'styled-components';
import { color, commons, zIndex } from '../Variables';

const { zindexModal } = zIndex,
  { white, gray400 } = color,
  { borderRadius, borderWidth, overlayBaseColor } = commons;

const ModalStyled = css`
  .ReactModalPortal {
    position: relative;
    z-index: ${zindexModal};
    .default-modal {
      position: relative;
      max-width: 750px;
      max-height: 100%;
      margin: 0 auto;
      border: ${borderWidth} solid ${gray400};
      background: ${white};
      overflow: auto;
      border-radius: ${borderRadius};
      outline: none;
      padding: 20px;
      &.full-modal {
        max-width: 100%;
        max-height: 100%;
        height: 100%;
        border-radius: 0;
      }
      .header-modal {
        position: relative;
        .title-modal {
        }
        .close-modal {
          position: absolute;
          background: transparent;
          top: 0;
          right: 0;
          &:hover {
            text-decoration: none;
          }
        }
      }
      .contents-modal {
        margin-top: 20px;
      }
    }
    .default-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 15px;
      background-color: ${overlayBaseColor};
      &.full-modal {
        padding: 0;
      }
    }
  }
`;

export { ModalStyled };
