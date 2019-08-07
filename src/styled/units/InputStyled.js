import { css } from 'styled-components';
import { color, commons, fonts, themeColor } from '../Variables';

const { gray400, gray700, white } = color,
  { danger } = themeColor,
  { borderRadius, borderWidth, transitionBase } = commons,
  { fontSizeBase, lineHeightBase } = fonts;

const defaultPaddingVer = 7.5,
  defaultPaddingHor = 10,
  defaultHeight =
    defaultPaddingVer * 2 +
    parseInt(String(borderWidth).replace(/[^0-9]/g, '')) * 2 +
    parseInt(String(lineHeightBase).replace(/[^0-9]/g, '')) +
    6;

const InputStyled = css`
  .form-input {
    display: block;
    width: 100%;
    height: ${defaultHeight}px;
    padding: ${defaultPaddingVer}px ${defaultPaddingHor}px;
    color: ${gray700};
    background-color: ${white};
    background-clip: padding-box;
    border: ${borderWidth} solid ${gray400};
    border-radius: ${borderRadius};
    transition: ${transitionBase};
  }

  .form-Feedback {
    display: none;
    position: relative;
    width: 100%;
    margin: 4px 0;
    padding-left: 5px;
    font-size: ${parseInt(fontSizeBase.replace(/[^0-9]/g, '')) - 4}px;
    color: ${danger};
    & > i {
      margin-right: 5px;
    }
  }
`;
export { InputStyled };
