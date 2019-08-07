import styled from 'styled-components';
import {
  fonts,
  layouts,
  themeColor,
  zIndex,
  commons
} from '../../styled/Variables';
import { colors } from '../../styled/function';

const { fontSizeBase } = fonts,
  { sidebarDefaultWidth, sidebarIconDefaultHeight } = layouts,
  { basic } = themeColor,
  { zindexSidebar } = zIndex,
  {
    transitionBase,
    transitionCollapse,
    menuButtonDefaultColor,
    borderRadius
  } = commons;

const SidebarStyled = styled.aside`
  position: absolute;
  left: -${sidebarDefaultWidth};
  width: ${sidebarDefaultWidth};
  min-height: 100%;
  background: ${basic};
  z-index: ${zindexSidebar};
  transition: ${transitionBase};
  ul {
    overflow: hidden;
    transition: ${transitionCollapse};
    max-height: 100%;
    li {
      background: ${basic};
      border-bottom: 1px solid ${colors.lighten(`${basic}`, 15)};
      transition: ${transitionBase};
      a {
        display: block;
        padding: 15px 10px 15px 15px;
        color: ${menuButtonDefaultColor};
        transition: inherit;
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
      }
      &.active {
        & > a {
          background: ${colors.darken(`${basic}`, 15)};
          & > i.downbullet {
            transform: rotate(90deg);
          }
        }
      }
      &:hover {
        background: ${colors.darken(`${basic}`, 15)};
      }
    }
    &.sub {
      padding: 0 6px;
      background: ${colors.lighten(`${basic}`, 20)};
      li {
        &:first-child {
          margin-top: 4px;
          border-radius: ${borderRadius} ${borderRadius} 0 0;
          overflow: hidden;
        }
        &:last-child {
          margin-bottom: 4px;
          border-radius: 0 0 ${borderRadius} ${borderRadius};
          border-bottom: 0;
        }
      }
      ul.sub {
        background: ${colors.lighten(`${basic}`, 30)};
      }
    }
  }
`;

export default SidebarStyled;
