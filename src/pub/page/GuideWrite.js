import React, { Component, Fragment } from "react";
import CKEditor from "ckeditor4-react";
import { Fileupload } from "../component";

class GuideWrite extends Component {
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
                <th scope="row" style={{ width: "15%" }}>
                  <span>제목</span>
                </th>
                <td>
                  <input
                    type="text"
                    className="form-input"
                    title="제목"
                    placeholder="제목을 입력해주세요."
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
                  <span>리스트 이미지</span>
                </th>
                <td>
                  <Fileupload />
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <span>상태</span>
                </th>
                <td>
                  <div className="select">
                    <select>
                      <option value="1">사용</option>
                      <option value="2">사용중지</option>
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

export default GuideWrite;
