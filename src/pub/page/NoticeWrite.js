import React, { Component, Fragment } from 'react';
import CKEditor from 'ckeditor4-react';

class NoticeWrite extends Component {
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

        <div className="table horizon">
          <table className="table-defaults tables-hor table table-bordered">
            <tbody>
              <tr>
                <th scope="row" style={{ width: '15%' }}>
                  <span>제목</span>
                </th>
                <td>
                  <input
                    type="text"
                    className="form-input"
                    title="제목"
                    placeholder="텍스트를 입력해주세요."
                  />
                  <p className="form-Feedback">
                    <i className="ico-cancel-circle" />
                    <span>제목을 확인 후 다시 시도해 주세요</span>
                  </p>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>내용</span>
                </th>
                <td>
                  <CKEditor />
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <span>최근공지 게시일시</span>
                </th>
                <td>
                  <input
                    type="text"
                    className="form-input"
                    title="최근공지 게시일시"
                    placeholder="공지 게시일을 입력해주세요."
                  />
                  <p className="form-Feedback">
                    <i className="ico-cancel-circle" />
                    <span>날짜를 확인 후 다시 시도해 주세요</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="btn-group">
          <button className="btn btn-info">
            <i className="ico-list" />
            <span>목록</span>
          </button>
          <div>
            <button className="btn btn-info">
              <i className="ico-checkmark" />
              <span>확인</span>
            </button>
            <button className="btn btn-danger" onClick={this.closeModal}>
              <i className="ico-cross" />
              <span>취소</span>
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NoticeWrite;
