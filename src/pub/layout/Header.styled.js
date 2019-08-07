import styled, { css } from 'styled-components';
import {
  themeColor,
  fonts,
  layouts,
  zIndex,
  commons
} from '../../styled/Variables';
import { colors, mediaQuery, mixin } from '../../styled/function';

const { basic } = themeColor,
  { fontSizeBase } = fonts,
  { zindexHeader } = zIndex,
  { headerDefaultHeight } = layouts,
  { transitionBase, menuButtonDefaultColor } = commons;

const HeaderStyled = styled.header`
  background: ${basic};
  position: relative;
  height: ${headerDefaultHeight};
  z-index: ${zindexHeader};
  ${mixin.clear()}

  h1 {
    float: left;
  }

  .btn_snb {
    color: ${menuButtonDefaultColor};
    float: left;
    padding: 0 20px;
    margin-left: 10px;
    font-size: calc(${fontSizeBase} + 6px);
    line-height: ${headerDefaultHeight};
    height: ${headerDefaultHeight};
    background: ${basic};

    &:hover {
      background: ${colors.darken(`${basic}`, 20)};
    }
  }

  .btn_admin_wrap {
    position: relative;
    float: right;
    padding: 0 5px;
    margin: 18px 10px auto auto;
    button {
      span {
        margin-left: 5px;
        font-weight: bold;
      }
    }
    .btn_admin_popup {
      position: absolute;
      right: 0;
      overflow: hidden;
      top: 50%;
      width: 250px;
      padding: 5px 10px;
      visibility: hidden;
      opacity: 0;
      background: ${basic};
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
      transition: ${transitionBase};
      .btn_profile {
        float: left;
      }
      .btn_logout {
        float: right;
      }
    }
    &.active {
      .btn_admin_popup {
        visibility: visible;
        top: 100%;
        opacity: 1;
      }
    }
  }

  // 모바일 해상도 대응 768 이하
  ${mediaQuery.tabletS(css`
    h1 {
      float: none;
      text-align: center;
      a {
        display: inline-block;
        overflow: hidden;
        width: 50px;
        vertical-align: top;
      }
    }
    .btn_snb {
      position: absolute;
      margin-left: 0;
      top: 0;
      float: none;
    }
    .btn_admin_wrap {
      position: absolute;
      margin: 0;
      padding: 0;
      border: 0;
      right: 0;
      top: 0;
      float: none;
      button {
        padding: 15px 19px;
        &.btn_admin {
          color: ${menuButtonDefaultColor};
          background: ${basic};
          font-size: calc(${fontSizeBase} + 7.5px);
          &:hover {
            background: ${colors.darken(`${basic}`, 20)};
          }
        }
        span {
          display: none;
        }
      }
      .btn_admin_popup {
        top: 85%;
        right: 0;
        width: 215px;
        button {
          padding: 4px 8px;
          span {
            display: inline-block;
          }
        }
      }
    }
  `)}
`;

export default HeaderStyled;
