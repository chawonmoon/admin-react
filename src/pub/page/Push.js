import React, { Component, Fragment } from "react";

class Push extends Component {
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
            <li className="breadcrumb-item active">푸시 검색</li>
          </ol>
        </div>

        {/* 검색바 */}
        <div className="board-group">
          <div className="searching user">
            <div className="searchbox">
              <label htmlFor="kind">분류</label>
              <div className="select">
                <select id="kind">
                  <option value="">분류 선택</option>
                  <option value="1">청구서 도착</option>
                  <option value="2">납부 마감</option>
                  <option value="3">자가검침 시작</option>
                  <option value="4">자가검침 마감</option>
                  <option value="7">보증보험 만기</option>
                  <option value="11">방문 예약일</option>
                  <option value="13">납부확약서 납부일</option>
                  <option value="18">방문 예약일 (전입)</option>
                  <option value="17">장기 미접속 회원 알림</option>
                  <option value="19">계량기교체안내</option>
                  <option value="20">자가검침 중간 안내</option>
                  <option value="21">자가검침 종료일 안내</option>
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
            </div>

            <div className="searchbox">
              <label htmlFor="userno">사용계약번호</label>
              <input
                type="search"
                className="form-input"
                id="userno"
                placeholder="검색어를 입력해주세요."
              />
            </div>

            <div className="searchbox">
              <label htmlFor="mobile">핸드폰</label>
              <input
                type="search"
                className="form-input"
                id="mobile"
                placeholder="검색어를 입력해주세요."
              />
            </div>

            <div className="searchbox">
              <label htmlFor="mobileid">모바일ID</label>
              <input
                type="search"
                className="form-input"
                id="mobileid"
                placeholder="검색어를 입력해주세요."
              />
            </div>
            <div className="searchbox">
              <button className="btn">
                <i className="ico-search" />
                <span>검색</span>
              </button>
            </div>
          </div>
        </div>

        <div>검색테이블이 들어가는 영역</div>

        <div className="alert warning user">
          <ul>
            <li>분류 선택 및 사용계약번호로 검색시 최근 1달만 검색</li>
            <li>1달 이전 데이터는 수신타입, 상태 등을 알 수 없음</li>
            <li>사용계약번호, 핸드폰, 모바일ID 중 1개 필수 입력</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Push;
