import styled from 'styled-components';
import { zIndex, layouts, commons } from '../../styled/Variables';

const { zindexContents, zindexContentswrap } = zIndex,
  { transitionBase } = commons,
  { globalDefaultHeight, sidebarDefaultWidth } = layouts;

const LayoutStyled = styled.div`
  position: relative;
  min-height: ${globalDefaultHeight};
  overflow-x: hidden;
  overflow-y: auto;
  z-index: ${zindexContentswrap};

  div.contents {
    padding: 15px;
    z-index: ${zindexContents};
    transition: ${transitionBase};
  }
  &.active {
    aside.sidebar {
      left: 0;
    }
    > div.contents {
      margin-left: ${sidebarDefaultWidth};
    }
  }
`;

export default LayoutStyled;
