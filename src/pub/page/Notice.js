import React, { Component, Fragment } from "react";
import NoticeModal from "./NoticeModal";

class Notice extends Component {
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
              <a href="javascript:void(0);">공지사항</a>
            </li>
            <li className="breadcrumb-item active">게시판</li>
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
                <option value="0">제목 + 내용</option>
                <option value="1">제목</option>
                <option value="2">내용</option>
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
                <th scope="col" style={{ width: "7%" }}>
                  <span>번호</span>
                </th>
                <th scope="col" style={{ width: "auto" }}>
                  <span>제목</span>
                </th>
                <th scope="col" style={{ width: "10%" }}>
                  <span>상태</span>
                </th>
                <th scope="col" style={{ width: "25%" }}>
                  <span>게시일시</span>
                </th>
                <th scope="col" style={{ width: "15%" }}>
                  <span>등록일시</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <span>10</span>
                </th>
                <td className="table-ellipsis">
                  <span>
                    [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                    이벤트!
                  </span>
                </td>
                <td>
                  <span className="badge primary">Primary</span>
                  <span className="badge secondary">Secondary</span>
                </td>
                <td>
                  <span>2019-02-12 10:04:00 ~ 2019-02-15 14:04:00</span>
                </td>
                <td>
                  <span>2019-01-28 16:18:05</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>9</span>
                </th>
                <td className="table-ellipsis">
                  <span>
                    [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                    이벤트!
                  </span>
                </td>
                <td>
                  <span className="badge success">Success</span>
                  <span className="badge danger">Danger</span>
                </td>
                <td>
                  <span>2019-02-12 10:04:00 ~ 2019-02-15 14:04:00</span>
                </td>
                <td>
                  <span>2019-01-28 16:18:05</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>8</span>
                </th>
                <td className="table-ellipsis">
                  <span>
                    [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                    이벤트!
                  </span>
                </td>
                <td>
                  <span className="badge warning">Warning</span>
                  <span className="badge info">Info</span>
                </td>
                <td>
                  <span>2019-02-12 10:04:00 ~ 2019-02-15 14:04:00</span>
                </td>
                <td>
                  <span>2019-01-28 16:18:05</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>7</span>
                </th>
                <td className="table-ellipsis">
                  <span>
                    [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                    이벤트!
                  </span>
                </td>
                <td>
                  <span className="badge light">Light</span>
                  <span className="badge dark">Dark</span>
                </td>
                <td>
                  <span>2019-02-12 10:04:00 ~ 2019-02-15 14:04:00</span>
                </td>
                <td>
                  <span>2019-01-28 16:18:05</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>6</span>
                </th>
                <td className="table-ellipsis">
                  <span>
                    [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                    이벤트!
                  </span>
                </td>
                <td>
                  <span className="badge primary">Primary</span>
                  <span className="badge secondary">Secondary</span>
                </td>
                <td>
                  <span>2019-02-12 10:04:00 ~ 2019-02-15 14:04:00</span>
                </td>
                <td>
                  <span>2019-01-28 16:18:05</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>5</span>
                </th>
                <td className="table-ellipsis">
                  <span>
                    [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                    이벤트!
                  </span>
                </td>
                <td>
                  <span className="badge success">Success</span>
                  <span className="badge danger">Danger</span>
                </td>
                <td>
                  <span>2019-02-12 10:04:00 ~ 2019-02-15 14:04:00</span>
                </td>
                <td>
                  <span>2019-01-28 16:18:05</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>4</span>
                </th>
                <td className="table-ellipsis">
                  <span>
                    [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                    이벤트!
                  </span>
                </td>
                <td>
                  <span className="badge warning">Warning</span>
                  <span className="badge info">Info</span>
                </td>
                <td>
                  <span>2019-02-12 10:04:00 ~ 2019-02-15 14:04:00</span>
                </td>
                <td>
                  <span>2019-01-28 16:18:05</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>3</span>
                </th>
                <td className="table-ellipsis">
                  <span>
                    [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                    이벤트!
                  </span>
                </td>
                <td>
                  <span className="badge light">Light</span>
                  <span className="badge dark">Dark</span>
                </td>
                <td>
                  <span>2019-02-12 10:04:00 ~ 2019-02-15 14:04:00</span>
                </td>
                <td>
                  <span>2019-01-28 16:18:05</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>2</span>
                </th>
                <td className="table-ellipsis">
                  <span>
                    [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                    이벤트!
                  </span>
                </td>
                <td>
                  <span className="badge primary">Primary</span>
                  <span className="badge secondary">Secondary</span>
                </td>
                <td>
                  <span>2019-02-12 10:04:00 ~ 2019-02-15 14:04:00</span>
                </td>
                <td>
                  <span>2019-01-28 16:18:05</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>1</span>
                </th>
                <td className="table-ellipsis">
                  <span>
                    [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                    이벤트!
                  </span>
                </td>
                <td>
                  <span className="badge success">Success</span>
                  <span className="badge danger">Danger</span>
                </td>
                <td>
                  <span>2019-02-12 10:04:00 ~ 2019-02-15 14:04:00</span>
                </td>
                <td>
                  <span>2019-01-28 16:18:05</span>
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
          <NoticeModal />
        </div>
      </Fragment>
    );
  }
}

export default Notice;
