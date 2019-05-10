import React, { Component, Fragment } from "react";

class User extends Component {
  render() {
    return (
      <Fragment>
        {/* 브레드크럼 */}
        <div className="breadcrumbs-wrap">
          <ol className="breadcrumbs">
            <li className="breadcrumb-item">
              <a href="javascript:void(0);">
                <i className="ico-home" />
              </a>
            </li>
            <li className="breadcrumb-item ">
              <a href="javascript:void(0);">사용자</a>
            </li>
            <li className="breadcrumb-item active">사용자 검색</li>
          </ol>
        </div>

        {/* 검색바 */}
        <div className="board-group">
          <div className="searching">
            <div className="select">
              <select>
                <option value="0">핸드폰번호</option>
                <option value="1">사용계약번호</option>
                <option value="2">모바일</option>
              </select>
              <span className="bullet">
                <svg
                  height="20"
                  width="20"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                </svg>
              </span>
            </div>
            <div className="searchbox">
              <input
                type="search"
                className="form-input"
                title="샘플 인풋 서치"
                placeholder="검색어를 입력해주세요."
              />
              <button className="btn">
                <i className="ico-search" />
              </button>
            </div>
          </div>
        </div>

        <div>검색테이블이 들어가는 영역</div>
      </Fragment>
    );
  }
}

export default User;
