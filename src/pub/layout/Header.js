import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { HomeLogo } from "images";

class Header extends Component {
  render() {
    return (
      <header className="header" id="header">
        <h1>
          <Link to="/">
            <img src="https://via.placeholder.com/225x62" alt="더미 로고" />
          </Link>
        </h1>
        <button className="btn_snb" href="javascript:void(0);">
          <i className="ico-menu" />
        </button>
        <div className="btn_admin_wrap active">
          <button className="btn_admin">
            <i className="ico-user-tie" />
            <span>관리자</span>
          </button>
          <div className="btn_admin_popup">
            <button className="btn_profile">
              <i className="ico-profile" />
              <span>프로필</span>
            </button>
            <button className="btn_logout">
              <i className="ico-exit" />
              <span>로그아웃</span>
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
