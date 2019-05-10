import React, { Component, Fragment } from "react";

class Block extends Component {
  render() {
    return (
      <Fragment>
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
            <li className="breadcrumb-item active">블록</li>
          </ol>
        </div>

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
                <option value="name">블록명</option>
                <option value="method">실행함수</option>
                <option value="apiVersion">API 버젼</option>
                <option value="description">설명</option>
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

        <div className="table vertical">
          <table>
            <caption>세로형 테이블 샘플</caption>
            <thead>
              <tr>
                <th scope="col" style={{ width: "20%" }}>
                  <span>블록명</span>
                </th>
                <th scope="col" style={{ width: "15%" }}>
                  <span>실행함수</span>
                </th>
                <th scope="col" style={{ width: "15%" }}>
                  <span>실행함수 변수</span>
                </th>
                <th scope="col" style={{ width: "15%" }}>
                  <span>상태</span>
                </th>
                <th scope="col" style={{ width: "auto" }}>
                  <span>설명</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <span>
                    00_공통_사용계약번호등록
                    <span className="badge info">V2</span>
                  </span>
                </th>
                <td className="table-ellipsis">
                  <span>
                    <span className="badge info">guestBlock</span>
                    <span className="badge change">V2</span>
                  </span>
                </td>
                <td>
                  <span>
                    <span className="badge info">useContractNum</span>
                  </span>
                </td>
                <td>
                  <span>
                    <span className="badge use">사용중</span>
                  </span>
                </td>
                <td>
                  <span>미납 요금 없을 때 확인용으로 납부 확인 안내</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>
                    00_공통_사용계약번호등록
                    <span className="badge info">V2</span>
                  </span>
                </th>
                <td className="table-ellipsis">
                  <span>
                    <span className="badge info">guestBlock</span>
                    <span className="badge change">V2</span>
                  </span>
                </td>
                <td>
                  <span>
                    <span className="badge info">useContractNum</span>
                  </span>
                </td>
                <td>
                  <span>
                    <span className="badge use">사용중</span>
                  </span>
                </td>
                <td>
                  <span>미납 요금 없을 때 확인용으로 납부 확인 안내</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>
                    00_공통_사용계약번호등록
                    <span className="badge info">V2</span>
                  </span>
                </th>
                <td className="table-ellipsis">
                  <span>
                    <span className="badge info">guestBlock</span>
                    <span className="badge change">V2</span>
                  </span>
                </td>
                <td>
                  <span>
                    <span className="badge info">useContractNum</span>
                  </span>
                </td>
                <td>
                  <span>
                    <span className="badge use">사용중</span>
                  </span>
                </td>
                <td>
                  <span>미납 요금 없을 때 확인용으로 납부 확인 안내</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>
                    00_공통_사용계약번호등록
                    <span className="badge info">V2</span>
                  </span>
                </th>
                <td className="table-ellipsis">
                  <span>
                    <span className="badge info">guestBlock</span>
                    <span className="badge change">V2</span>
                  </span>
                </td>
                <td>
                  <span>
                    <span className="badge info">useContractNum</span>
                  </span>
                </td>
                <td>
                  <span>
                    <span className="badge use">사용중</span>
                  </span>
                </td>
                <td>
                  <span>미납 요금 없을 때 확인용으로 납부 확인 안내</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>
                    00_공통_사용계약번호등록
                    <span className="badge info">V2</span>
                  </span>
                </th>
                <td className="table-ellipsis">
                  <span>
                    <span className="badge info">guestBlock</span>
                    <span className="badge change">V2</span>
                  </span>
                </td>
                <td>
                  <span>
                    <span className="badge info">useContractNum</span>
                  </span>
                </td>
                <td>
                  <span>
                    <span className="badge use">사용중</span>
                  </span>
                </td>
                <td>
                  <span>미납 요금 없을 때 확인용으로 납부 확인 안내</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>
                    00_공통_사용계약번호등록
                    <span className="badge info">V2</span>
                  </span>
                </th>
                <td className="table-ellipsis">
                  <span>
                    <span className="badge info">guestBlock</span>
                    <span className="badge change">V2</span>
                  </span>
                </td>
                <td>
                  <span>
                    <span className="badge info">useContractNum</span>
                  </span>
                </td>
                <td>
                  <span>
                    <span className="badge use">사용중</span>
                  </span>
                </td>
                <td>
                  <span>미납 요금 없을 때 확인용으로 납부 확인 안내</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>
                    00_공통_사용계약번호등록
                    <span className="badge info">V2</span>
                  </span>
                </th>
                <td className="table-ellipsis">
                  <span>
                    <span className="badge info">guestBlock</span>
                    <span className="badge change">V2</span>
                  </span>
                </td>
                <td>
                  <span>
                    <span className="badge info">useContractNum</span>
                  </span>
                </td>
                <td>
                  <span>
                    <span className="badge use">사용중</span>
                  </span>
                </td>
                <td>
                  <span>미납 요금 없을 때 확인용으로 납부 확인 안내</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>
                    00_공통_사용계약번호등록
                    <span className="badge info">V2</span>
                  </span>
                </th>
                <td className="table-ellipsis">
                  <span>
                    <span className="badge info">guestBlock</span>
                    <span className="badge change">V2</span>
                  </span>
                </td>
                <td>
                  <span>
                    <span className="badge info">useContractNum</span>
                  </span>
                </td>
                <td>
                  <span>
                    <span className="badge use">사용중</span>
                  </span>
                </td>
                <td>
                  <span>미납 요금 없을 때 확인용으로 납부 확인 안내</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>
                    00_공통_사용계약번호등록
                    <span className="badge info">V2</span>
                  </span>
                </th>
                <td className="table-ellipsis">
                  <span>
                    <span className="badge info">guestBlock</span>
                    <span className="badge change">V2</span>
                  </span>
                </td>
                <td>
                  <span>
                    <span className="badge info">useContractNum</span>
                  </span>
                </td>
                <td>
                  <span>
                    <span className="badge use">사용중</span>
                  </span>
                </td>
                <td>
                  <span>미납 요금 없을 때 확인용으로 납부 확인 안내</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>
                    00_공통_사용계약번호등록
                    <span className="badge info">V2</span>
                  </span>
                </th>
                <td className="table-ellipsis">
                  <span>
                    <span className="badge info">guestBlock</span>
                    <span className="badge change">V2</span>
                  </span>
                </td>
                <td>
                  <span>
                    <span className="badge info">useContractNum</span>
                  </span>
                </td>
                <td>
                  <span>
                    <span className="badge use">사용중</span>
                  </span>
                </td>
                <td>
                  <span>미납 요금 없을 때 확인용으로 납부 확인 안내</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

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

export default Block;
