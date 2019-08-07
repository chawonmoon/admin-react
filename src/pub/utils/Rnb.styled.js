import styled from 'styled-components';
import { fonts, layouts, commons, themeColor } from '../../styled/Variables';
import { colors } from '../../styled/function';

const { basic } = themeColor,
  { fontSizeBase } = fonts,
  { sidebarDefaultWidth, sidebarIconDefaultHeight } = layouts,
  {
    boxShadow,
    transitionBase,
    transitionCollapse,
    menuButtonDefaultColor,
    borderRadius
  } = commons;

const RnbStyled = styled.aside`
  position: fixed;
  top: 0;
  left: 100%;
  height: 100%;
  width: ${sidebarDefaultWidth};
  min-height: 100%;
  background: ${basic};
  transition: ${transitionBase};
  z-index: 99999;
  box-shadow: ${boxShadow};
  > ul {
    height: 100%;
    overflow-y: auto;
  }
  &:hover {
    left: calc(100% - 235px);
  }
  .handle {
    position: absolute;
    top: 100px;
    right: 100%;
    display: block;
    padding: 5px;
    color: #fff;
    border-radius: 5px 0 0 5px;
    background: ${basic};
    box-shadow: ${boxShadow};
  }
  li {
    background: transparent;
    border-bottom: 1px solid ${colors.lighten(`${basic}`, 15)};
    a {
      display: block;
      padding: 15px 10px 15px 15px;
      color: ${menuButtonDefaultColor};
      transition: ${transitionBase};
      i {
        display: inline-block;
        height: ${sidebarIconDefaultHeight};
        line-height: ${sidebarIconDefaultHeight};
        margin-right: 10px;
        font-size: ${fontSizeBase};
        vertical-align: top;
        &.downbullet {
          float: right;
          font-size: ${fontSizeBase} !important;
          margin-right: 0;
          transition: ${transitionBase};
        }
      }
      span {
        display: inline-block;
        max-width: calc(100% - 50px);
        font-size: ${fontSizeBase};
        word-break: break-all;
      }
      &:hover {
        background: ${colors.darken(`${basic}`, 12)};
      }
    }
    &.active {
      & > a {
        background: ${colors.darken(`${basic}`, 15)};
        & > i.downbullet {
          transform: rotate(90deg);
        }
      }
    }
    &:hover > ul.sub {
        max-height: 1920px;
      }
    }

    ul.sub {
      padding: 0 6px;
      max-height: 0; 
      overflow: hidden;
      background: ${colors.lighten(`${basic}`, 15)};
      transition: ${transitionCollapse};
      li {
        background: ${colors.darken(`${basic}`, 3)};
        &:first-child {
          border-radius: ${borderRadius} ${borderRadius} 0 0;
          overflow: hidden;
          margin-top: 4px;
        }
        &:last-child {
          border-radius: 0 0 ${borderRadius} ${borderRadius};
          border-bottom: 0;
          margin-bottom: 4px;
        } 
      }
      ul.sub {
        background: ${colors.lighten(`${basic}`, 30)};
      }
    }
  }
`;

export default RnbStyled;
