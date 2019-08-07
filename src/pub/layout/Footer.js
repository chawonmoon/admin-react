import React, { Component } from 'react';
import FooterStyled from './Footer.styled';

class Footer extends Component {
  render() {
    return (
      <FooterStyled>
        <div className="copyright">
          <strong>
            Copyright © 2019&nbsp;
            <a href="https://chawonmoon.github.io/">chawonmoon.github.io</a>
            .&nbsp;
          </strong>
          <span>All rights reserved.</span>
        </div>
        <div className="version">
          <b>Version</b> 1.0.0
        </div>
      </FooterStyled>
    );
  }
}

export default Footer;
