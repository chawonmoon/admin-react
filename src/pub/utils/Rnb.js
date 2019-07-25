import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
              <i className="ico-checkbox-checked" />
              <span>메인</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active">
              <i className="ico-checkbox-checked" />
              <span>로그인</span>
            </NavLink>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i className="ico-checkbox-checked" />
              <span>게시판</span>
              <i className="ico-circle-down downbullet" />
            </a>
            <ul className="sub">
              <li>
                <NavLink to="/notice" activeClassName="active">
                  <i className="ico-checkbox-checked" />
                  <span>게시판 목록(등록 모달 포함)</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/notice/read" activeClassName="active">
                  <i className="ico-checkbox-checked" />
                  <span>게시판 상세</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/notice/write" activeClassName="active">
                  <i className="ico-checkbox-checked" />
                  <span>게시판 등록</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i className="ico-checkbox-checked" />
              <span>이용안내</span>
              <i className="ico-circle-down downbullet" />
            </a>
            <ul className="sub">
              <li>
                <NavLink to="/guide" activeClassName="active">
                  <i className="ico-checkbox-checked" />
                  <span>이용안내 목록</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/guide/write" activeClassName="active">
                  <i className="ico-checkbox-checked" />
                  <span>이용안내 등록/수정</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i className="ico-checkbox-checked" />
              <span>점검일정</span>
              <i className="ico-circle-down downbullet" />
            </a>
            <ul className="sub">
              <li>
                <NavLink to="/schedule" activeClassName="active">
                  <i className="ico-checkbox-checked" />
                  <span>점검일정 목록</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/schedule/read" activeClassName="active">
                  <i className="ico-checkbox-checked" />
                  <span>점검일정 상세</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/schedule/write" activeClassName="active">
                  <i className="ico-checkbox-checked" />
                  <span>점검일정 폼</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i className="ico-checkbox-checked" />
              <span>사용자</span>
              <i className="ico-circle-down downbullet" />
            </a>
            <ul className="sub">
              <li>
                <NavLink to="/user" activeClassName="active">
                  <i className="ico-checkbox-checked" />
                  <span>사용자 검색</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/user/push" activeClassName="active">
                  <i className="ico-checkbox-checked" />
                  <span>푸시 검색</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i className="ico-checkbox-checked" />
              <span>블록</span>
              <i className="ico-circle-down downbullet" />
            </a>
            <ul className="sub">
              <li>
                <NavLink to="/block" activeClassName="active">
                  <i className="ico-checkbox-checked" />
                  <span>블록 목록</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/block/read" activeClassName="active">
                  <i className="ico-checkbox-checked" />
                  <span>블록 상세</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/block/write" activeClassName="active">
                  <i className="ico-checkbox-checked" />
                  <span>블록 폼</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i className="ico-checkbox-checked" />
              <span>랜덤메시지</span>
              <i className="ico-circle-down downbullet" />
            </a>
            <ul className="sub">
              <li>
                <NavLink to="/messege" activeClassName="active">
                  <i className="ico-checkbox-checked" />
                  <span>랜덤메시지 목록</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/messege/read" activeClassName="active">
                  <i className="ico-checkbox-checked" />
                  <span>랜덤메시지 상세</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/messege/write" activeClassName="active">
                  <i className="ico-checkbox-checked" />
                  <span>랜덤메시지 폼</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/messege/read/randomitem" activeClassName="active">
                  <i className="ico-checkbox-checked" />
                  <span>랜덤메시지 아이템 등록</span>
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
