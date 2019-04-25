import React, { Component, Fragment } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="copyright">
          <strong>
            Copyright © 2019&nbsp;
            <a href="http://www.seoulgas.co.kr">Seoul City Gas</a>.&nbsp;
          </strong>
          <span>All rights reserved.</span>
        </div>
        <div className="version">
          <b>Version</b> 1.0.0
        </div>
      </footer>
    );
  }
}

export default Footer;
