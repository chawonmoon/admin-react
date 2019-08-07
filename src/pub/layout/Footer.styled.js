import styled, { css } from 'styled-components';
import { layouts, zIndex } from '../../styled/Variables';
import { mediaQuery, unit } from '../../styled/function';

const { footerDefaultHeight } = layouts,
  { zindexFooter } = zIndex;

const FooterStyled = styled.footer`
  height: ${footerDefaultHeight};
  padding: 15px 15px 0;
  overflow: hidden;
  border-top: 1px solid lightgray;
  z-index: ${zindexFooter};
  div.copyright {
    float: left;
  }
  div.version {
    float: right;
  }

  ${mediaQuery.tabletS(css`
    height: ${footerDefaultHeight};
    padding: 10px 10px 0;
    font-size: ${unit.rem('12px')};
    div.copyright {
      strong {
        display: block;
      }
    }
  `)}
`;

export default FooterStyled;
