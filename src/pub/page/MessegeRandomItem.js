import React, { Component, Fragment } from 'react';
import CKEditor from 'ckeditor4-react';

class MessegeRandomItem extends Component {
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
            <li className="breadcrumb-item active">랜덤 아이템 등록</li>
          </ol>
        </div>

        <div className="table horizon messgerandom">
          <table className="table-defaults tables-hor table table-bordered">
            <tbody>
              <tr>
                <th scope="row" style={{ width: '15%' }}>
                  <span>아이템 이름</span>
                </th>
                <td colSpan="3">
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
                  <span>시작</span>
                </th>
                <td colSpan="3">
                  <div className="select inline">
                    <select>
                      <option value="">미설정</option>
                      <option value="0">00</option>
                      <option value="1">01</option>
                      <option value="2">02</option>
                      <option value="3">03</option>
                      <option value="4">04</option>
                      <option value="5">05</option>
                      <option value="6">06</option>
                      <option value="7">07</option>
                      <option value="8">08</option>
                      <option value="9">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
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
                  <div className="select inline">
                    <select>
                      <option value="">미설정</option>
                      <option value="0">00</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="40">40</option>
                      <option value="50">50</option>
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
                  <span>종료</span>
                </th>
                <td colSpan="3">
                  <div className="select inline">
                    <select>
                      <option value="">미설정</option>
                      <option value="0">00</option>
                      <option value="1">01</option>
                      <option value="2">02</option>
                      <option value="3">03</option>
                      <option value="4">04</option>
                      <option value="5">05</option>
                      <option value="6">06</option>
                      <option value="7">07</option>
                      <option value="8">08</option>
                      <option value="9">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
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
                  <div className="select inline">
                    <select>
                      <option value="">미설정</option>
                      <option value="0">00</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="40">40</option>
                      <option value="50">50</option>
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
                  <span>리스트</span>
                </th>
                <td rowSpan="3">
                  <table>
                    <thead>
                      <tr>
                        <th>선택문구</th>
                        <th colSpan="2">응답문구</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="chatitem">
                        <td>
                          <CKEditor
                            config={{
                              toolbar: [], // 텍스트만 입력되기때문에 툴바를 삭제
                              startupMode: 'source', // 텍스트만 입력되야하기 때문에 시작을 소스모드로 변경
                              resize_enabled: false // 사용자 리사이즈를 삭제
                            }}
                            data="기본 텍스트"
                          />
                        </td>
                        <td>
                          <CKEditor
                            config={{
                              toolbar: [], // 텍스트만 입력되기때문에 툴바를 삭제
                              startupMode: 'source', // 텍스트만 입력되야하기 때문에 시작을 소스모드로 변경
                              resize_enabled: false // 사용자 리사이즈를 삭제
                            }}
                            data="기본 텍스트"
                          />
                        </td>
                        <td>
                          <button className="btn btn-danger sm">
                            <i className="ico-bin" />
                            삭제
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="btn-group modal">
                    <button className="btn btn-info sm">
                      <i className="ico-plus" />
                      추가
                    </button>
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

export default MessegeRandomItem;
