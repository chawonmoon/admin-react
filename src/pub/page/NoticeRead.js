import React, { Component, Fragment } from 'react';

class NoticeRead extends Component {
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
            <li className="breadcrumb-item active">
              <a href="javascript:void(0);">게시판</a>
            </li>
            <li className="breadcrumb-item active">상세보기</li>
          </ol>
        </div>

        {/* 가로형 테이블 */}
        <div className="table horizon">
          <table className="table-defaults tables-hor table table-bordered">
            <tbody>
              <tr>
                <th scope="row" style={{ width: '7%' }}>
                  <span>등록일시</span>
                </th>
                <td>
                  <span>2019-02-22 17:46:49</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>제목</span>
                </th>
                <td>
                  <span>
                    [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                    이벤트!
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>내용</span>
                </th>
                <td>
                  <span>
                    [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                    이벤트! [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한
                    100% 당첨 이벤트! [이벤트안내] 가스락 "잠금화면" 신규
                    사용자를 위한 100% 당첨 이벤트! [이벤트안내] 가스락
                    "잠금화면" 신규 사용자를 위한 100% 당첨 이벤트!
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>이미지</span>
                </th>
                <td className="tableimg">
                  <img src="https://via.placeholder.com/800x400" />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>최근공지 게시상태</span>
                </th>
                <td>
                  <span>
                    <span className="badge primary pill">Primary</span>
                    <span className="badge secondary pill">Secondary</span>
                    <span className="badge success pill">Success</span>
                    <span className="badge danger pill">Danger</span>
                    <span className="badge warning pill">Warning</span>
                    <span className="badge info pill">Info</span>
                    <span className="badge light pill">Light</span>
                    <span className="badge dark pill">Dark</span>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>최근공지 게시일시</span>
                </th>
                <td>
                  <span>2019-02-22 17:33:42 ~ 2019-02-23 17:33:42</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 버튼그룹 */}
        <div className="btn-group">
          <button className="btn btn-info">
            <i className="ico-list" />
            <span>목록</span>
          </button>
          <div>
            <button className="btn btn-warning">
              <i className="ico-pencil2" />
              <span>수정</span>
            </button>
            <button className="btn btn-danger" disabled>
              <i className="ico-bin" />
              <span>삭제</span>
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NoticeRead;
