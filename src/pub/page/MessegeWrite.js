import React, { Component, Fragment } from "react";
import CKEditor from "ckeditor4-react";

class MessegeWrite extends Component {
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
            <li className="breadcrumb-item">
              <a href="javascript:void(0);">랜덤메시지 함수</a>
            </li>
            <li className="breadcrumb-item active">등록하기</li>
          </ol>
        </div>

        <div className="table horizon">
          <table className="table-defaults tables-hor table table-bordered">
            <tbody>
              <tr>
                <th scope="row" style={{ width: "15%" }}>
                  <span>랜덤 메시지명</span>
                </th>
                <td>
                  <input
                    type="text"
                    className="form-input"
                    title="샘플 인풋 텍스트"
                    placeholder="텍스트를 입력해주세요."
                  />
                  <p className="form-Feedback">
                    <i className="ico-cancel-circle" />
                    <span>필수 입력 값입니다.</span>
                  </p>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>설명</span>
                </th>
                <td>
                  <CKEditor
                    config={{
                      toolbar: [], // 텍스트만 입력되기때문에 툴바를 삭제
                      startupMode: "source", // 텍스트만 입력되야하기 때문에 시작을 소스모드로 변경
                      resize_enabled: false // 사용자 리사이즈를 삭제
                    }}
                    data="기본 텍스트"
                  />
                  <p className="form-Feedback">
                    <i className="ico-cancel-circle" />
                    <span>필수 입력 값입니다.</span>
                  </p>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>종류</span>
                </th>
                <td>
                  <div className="select">
                    <select>
                      <option value="select">SELECT</option>
                      <option value="string">STRING</option>
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
              <tr>
                <th scope="row">
                  <span>상태</span>
                </th>
                <td>
                  <div className="select">
                    <select>
                      <option value="select">사용</option>
                      <option value="string">사용중지</option>
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
            <button className="btn btn-danger">
              <i className="ico-cross" />
              <span>취소</span>
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MessegeWrite;
