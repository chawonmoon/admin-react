import React, { Component, Fragment } from 'react';
import NoticeModal from './NoticeModal';

class Messege extends Component {
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
            <li className="breadcrumb-item">
              <a href="javascript:void(0);">챗봇</a>
            </li>
            <li className="breadcrumb-item active">랜덤 메시지 함수</li>
          </ol>
        </div>

        {/* 검색바 */}
        <div className="board-group">
          <div className="select numbering">
            <select>
              <option value="10">목록 10개</option>
              <option value="30">목록 20개</option>
              <option value="50">목록 50개</option>
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
          <div className="searching">
            <div className="select">
              <select>
                <option value="0">랜덤 메시지 함수명</option>
                <option value="1">설명</option>
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

        {/* 세로형 테이블 */}
        <div className="table vertical">
          <table>
            <caption>세로형 테이블 샘플</caption>
            <thead>
              <tr>
                <th scope="col" style={{ width: '35%' }}>
                  <span>랜덤 메시지 함수명</span>
                </th>
                <th scope="col" style={{ width: '10%' }}>
                  <span>종류</span>
                </th>
                <th scope="col" style={{ width: '10%' }}>
                  <span>상태</span>
                </th>
                <th scope="col" style={{ width: 'auto' }}>
                  <span>설명</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <span>01_소다_청구요금조회_AI답변</span>
                </th>
                <td>
                  <span>
                    <span className="badge info">STRING</span>
                  </span>
                </td>
                <td>
                  <span className="badge use">사용중</span>
                </td>
                <td>
                  <span>소다 시작 블록에서 업무 시작할 때 멘트</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>01_소다_청구요금조회_AI답변</span>
                </th>
                <td>
                  <span>
                    <span className="badge info">STRING</span>
                  </span>
                </td>
                <td>
                  <span className="badge use">사용중</span>
                </td>
                <td>
                  <span>소다 시작 블록에서 업무 시작할 때 멘트</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>01_소다_청구요금조회_AI답변</span>
                </th>
                <td>
                  <span>
                    <span className="badge info">STRING</span>
                  </span>
                </td>
                <td>
                  <span className="badge use">사용중</span>
                </td>
                <td>
                  <span>소다 시작 블록에서 업무 시작할 때 멘트</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>01_소다_청구요금조회_AI답변</span>
                </th>
                <td>
                  <span>
                    <span className="badge info">STRING</span>
                  </span>
                </td>
                <td>
                  <span className="badge use">사용중</span>
                </td>
                <td>
                  <span>소다 시작 블록에서 업무 시작할 때 멘트</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>01_소다_청구요금조회_AI답변</span>
                </th>
                <td>
                  <span>
                    <span className="badge info">STRING</span>
                  </span>
                </td>
                <td>
                  <span className="badge use">사용중</span>
                </td>
                <td>
                  <span>소다 시작 블록에서 업무 시작할 때 멘트</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>01_소다_청구요금조회_AI답변</span>
                </th>
                <td>
                  <span>
                    <span className="badge info">STRING</span>
                  </span>
                </td>
                <td>
                  <span className="badge use">사용중</span>
                </td>
                <td>
                  <span>소다 시작 블록에서 업무 시작할 때 멘트</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>01_소다_청구요금조회_AI답변</span>
                </th>
                <td>
                  <span>
                    <span className="badge info">STRING</span>
                  </span>
                </td>
                <td>
                  <span className="badge use">사용중</span>
                </td>
                <td>
                  <span>소다 시작 블록에서 업무 시작할 때 멘트</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>01_소다_청구요금조회_AI답변</span>
                </th>
                <td>
                  <span>
                    <span className="badge info">STRING</span>
                  </span>
                </td>
                <td>
                  <span className="badge use">사용중</span>
                </td>
                <td>
                  <span>소다 시작 블록에서 업무 시작할 때 멘트</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>01_소다_청구요금조회_AI답변</span>
                </th>
                <td>
                  <span>
                    <span className="badge info">STRING</span>
                  </span>
                </td>
                <td>
                  <span className="badge use">사용중</span>
                </td>
                <td>
                  <span>소다 시작 블록에서 업무 시작할 때 멘트</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>01_소다_청구요금조회_AI답변</span>
                </th>
                <td>
                  <span>
                    <span className="badge info">STRING</span>
                  </span>
                </td>
                <td>
                  <span className="badge use">사용중</span>
                </td>
                <td>
                  <span>소다 시작 블록에서 업무 시작할 때 멘트</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 버튼그룹 */}
        <div className="btn-group">
          <nav className="pagination-wrap">
            <ul className="pagination">
              <li className="page-item disabled">
                <a href="javascript:void(0);" className="page-link">
                  <span>«</span>
                </a>
              </li>
              <li className="page-item disabled">
                <a href="javascript:void(0);" className="page-link">
                  <span>‹</span>
                </a>
              </li>
              <li className="page-item active">
                <a href="javascript:void(0);" className="page-link">
                  1
                </a>
              </li>
              <li className="page-item">
                <a href="javascript:void(0);" className="page-link">
                  2
                </a>
              </li>
              <li className="page-item">
                <a href="javascript:void(0);" className="page-link">
                  3
                </a>
              </li>
              <li className="page-item">
                <a href="javascript:void(0);" className="page-link">
                  4
                </a>
              </li>
              <li className="page-item">
                <a href="javascript:void(0);" className="page-link">
                  5
                </a>
              </li>
              <li className="page-item">
                <a href="javascript:void(0);" className="page-link">
                  <span>›</span>
                </a>
              </li>
              <li className="page-item">
                <a href="javascript:void(0);" className="page-link">
                  <span>»</span>
                </a>
              </li>
            </ul>
          </nav>
          <button className="btn btn-info">
            <i className="ico-plus" />
            <span>등록</span>
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Messege;
