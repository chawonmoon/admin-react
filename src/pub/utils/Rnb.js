import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Rnb extends Component {
  render() {
    return (
      <aside className="rnb">
        <a className="handle" href="javascript:void(0);">
          <i className="ico-list" />
        </a>
        <ul>
          <li>
            <NavLink to="/main" activeClassName="active">
              <i className="ico-checkbox-unchecked" />
              <span>메인</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active">
              <i className="ico-checkbox-unchecked" />
              <span>로그인</span>
            </NavLink>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i className="ico-checkbox-unchecked" />
              <span>게시판</span>
              <i className="ico-circle-down downbullet" />
            </a>
            <ul className="sub">
              <li>
                <NavLink to="/notice" activeClassName="active">
                  <i className="ico-checkbox-unchecked" />
                  <span>게시판 목록</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/notice" activeClassName="active">
                  <i className="ico-checkbox-unchecked" />
                  <span>게시판 상세</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/notice" activeClassName="active">
                  <i className="ico-checkbox-unchecked" />
                  <span>게시판 폼</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i className="ico-checkbox-unchecked" />
              <span>이용안내</span>
              <i className="ico-circle-down downbullet" />
            </a>
            <ul className="sub">
              <li>
                <NavLink to="/guide" activeClassName="active">
                  <i className="ico-checkbox-unchecked" />
                  <span>이용안내 목록</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/guide" activeClassName="active">
                  <i className="ico-checkbox-unchecked" />
                  <span>이용안내 상세</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/guide" activeClassName="active">
                  <i className="ico-checkbox-unchecked" />
                  <span>이용안내 폼</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i className="ico-checkbox-unchecked" />
              <span>점검일정</span>
              <i className="ico-circle-down downbullet" />
            </a>
            <ul className="sub">
              <li>
                <NavLink to="/schedule" activeClassName="active">
                  <i className="ico-checkbox-unchecked" />
                  <span>점검일정 목록</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/schedule" activeClassName="active">
                  <i className="ico-checkbox-unchecked" />
                  <span>점검일정 상세</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/schedule" activeClassName="active">
                  <i className="ico-checkbox-unchecked" />
                  <span>점검일정 폼</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i className="ico-checkbox-unchecked" />
              <span>랜덤메시지</span>
              <i className="ico-circle-down downbullet" />
            </a>
            <ul className="sub">
              <li>
                <NavLink to="/messege" activeClassName="active">
                  <i className="ico-checkbox-unchecked" />
                  <span>랜덤메시지 목록</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/messege" activeClassName="active">
                  <i className="ico-checkbox-unchecked" />
                  <span>랜덤메시지 상세</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/messege" activeClassName="active">
                  <i className="ico-checkbox-unchecked" />
                  <span>랜덤메시지 폼</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i className="ico-checkbox-unchecked" />
              <span>블록</span>
              <i className="ico-circle-down downbullet" />
            </a>
            <ul className="sub">
              <li>
                <NavLink to="/block" activeClassName="active">
                  <i className="ico-checkbox-unchecked" />
                  <span>블록 목록</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/block" activeClassName="active">
                  <i className="ico-checkbox-unchecked" />
                  <span>블록 상세</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/block" activeClassName="active">
                  <i className="ico-checkbox-unchecked" />
                  <span>블록 폼</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i className="ico-checkbox-unchecked" />
              <span>사용자</span>
              <i className="ico-circle-down downbullet" />
            </a>
            <ul className="sub">
              <li>
                <NavLink to="/user" activeClassName="active">
                  <i className="ico-checkbox-unchecked" />
                  <span>사용자 목록</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/user" activeClassName="active">
                  <i className="ico-checkbox-unchecked" />
                  <span>사용자 상세</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/user" activeClassName="active">
                  <i className="ico-checkbox-unchecked" />
                  <span>사용자 폼</span>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    );
  }
}
export default Rnb;
