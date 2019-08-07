import { css } from 'styled-components';
import { color, commons, fonts } from '../Variables';
import { mediaQuery, colors, mixin } from '../function';
import { Bot, User } from '../../resources/images';

const { fontSizeBase } = fonts,
  { borderRadius, borderWidth } = commons,
  { white, gray400, cyan } = color;

const ChatbotStyled = css`
  .chatbot {
    dt {
      padding: 10px 5px 10px 16px;
      border-top: 5px solid ${gray400};
      border-bottom: ${borderWidth} solid ${gray400};
      border-left: ${borderWidth} solid ${gray400};
      border-right: ${borderWidth} solid ${gray400};
      border-top-right-radius: ${borderRadius};
      border-top-left-radius: ${borderRadius};
      font-size: ${fontSizeBase};
      ${mixin.clear()}
      > strong {
        font-size: ${fontSizeBase};
        float: left;
      }
      .noti {
        float: right;
        .btn {
          padding: 0 0 0 6px;
          margin-left: 0;
          color: ${colors.darken(`${gray400}`, 10)};
          &:hover {
            color: ${colors.darken(`${gray400}`, 40)};
          }
        }
      }
    }
    dd {
      padding: 10px 16px;
      border: ${borderWidth} solid ${gray400};
      border-bottom-right-radius: ${borderRadius};
      border-bottom-left-radius: ${borderRadius};
      .bot,
      .user {
        position: relative;
        padding: 10px 45px 5px;
        min-height: 40px;
        background: url(${Bot}) no-repeat left top;
        p {
          display: inline-block;
          padding: 5px 10px;
          margin: 0 0 0 10px;
          border-radius: ${borderRadius};
          background: ${gray400};
        }
        &:after {
          content: '◀';
          position: absolute;
          left: 46px;
          top: 13px;
          color: ${gray400};
        }
        &.result {
          p {
            background: ${cyan};
            color: ${white};
          }
          &:after {
            color: ${cyan};
          }
        }
      }
      .user {
        text-align: right;
        background: url(${User}) no-repeat right top;
        &:after {
          content: '▶';
          position: absolute;
          left: auto;
          right: 46px;
          top: 13px;
          color: ${gray400};
        }
        p {
          margin-left: auto;
          margin-right: 10px;
        }
      }
    }
  }

  ${mediaQuery.tabletS(css`
    .chatbot dd .bot {
      padding-right: 0;
    }
    .chatbot dd .user {
      padding-left: 0;
    }
  `)}
`;

export { ChatbotStyled };
