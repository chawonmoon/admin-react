import React, { Component, Fragment } from "react";
import CKEditor from "ckeditor4-react";
import { SelectboxMulti, Fileupload } from "../component";

class BlockWrite extends Component {
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
            <li className="breadcrumb-item">
              <a href="javascript:void(0);">블록</a>
            </li>
            <li className="breadcrumb-item active">등록</li>
          </ol>
        </div>

        <div className="table horizon">
          <table className="table-defaults tables-hor table table-bordered">
            <tbody>
              <tr>
                <th scope="row" style={{ width: "25%" }}>
                  <span>블록명</span>
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
                    <span>아이디를 확인 후 다시 시도해 주세요</span>
                  </p>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>블록 표시명</span>
                </th>
                <td>
                  <CKEditor
                    config={{
                      height: 70,
                      toolbar: [], // 텍스트만 입력되기때문에 툴바를 삭제
                      startupMode: "source", // 텍스트만 입력되야하기 때문에 시작을 소스모드로 변경
                      resize_enabled: false // 사용자 리사이즈를 삭제
                    }}
                    data="납부 실시간 조회"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>설명</span>
                </th>
                <td>
                  <CKEditor
                    config={{
                      height: 70,
                      toolbar: [], // 텍스트만 입력되기때문에 툴바를 삭제
                      startupMode: "source", // 텍스트만 입력되야하기 때문에 시작을 소스모드로 변경
                      resize_enabled: false // 사용자 리사이즈를 삭제
                    }}
                    data="납부 실시간 조회"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>블록유형</span>
                </th>
                <td>
                  <div className="select">
                    <select>
                      <option value="1">일반</option>
                      <option value="2">회원가입</option>
                      <option value="3">AI 에러</option>
                      <option value="4">AI 블록 선택</option>
                      <option value="5">Bot 변경 블록</option>
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
                  <span>블록 API 버전</span>
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
                    <span>아이디를 확인 후 다시 시도해 주세요</span>
                  </p>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>실행함수</span>
                </th>
                <td>
                  <SelectboxMulti
                    selectopt={[
                      { value: "guestBlock", label: "guestBlock", badge: "v1" },
                      {
                        value: "memberBlock",
                        label: "memberBlock",
                        badge: "v2"
                      },
                      {
                        value: "contractBlock",
                        label: "contractBlock",
                        badge: "v3"
                      }
                    ]}
                  />
                  <sub>블록 (정회원 이상)</sub>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>실행함수 파라미터</span>
                </th>
                <td>
                  <span className="badge info">useContractNum</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>초기화 변수</span>
                </th>
                <td>
                  <input
                    type="text"
                    className="form-input"
                    title="샘플 인풋 텍스트"
                    placeholder="초기화할 변수를 입력하세요."
                  />
                  <p className="form-Feedback">
                    <i className="ico-cancel-circle" />
                    <span>아이디를 확인 후 다시 시도해 주세요</span>
                  </p>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>결과값 타입</span>
                </th>
                <td>
                  <span className="badge info">null</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>비회원 허용</span>
                </th>
                <td>
                  <span>
                    <span className="badge use">허용</span>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>블록 메시지</span>
                </th>
                <td>
                  <input
                    type="text"
                    className="form-input"
                    title="샘플 인풋 텍스트"
                    placeholder="초기화할 변수를 입력하세요."
                    defaultValue="그래, 확인 한 번 해보자."
                  />
                  <p className="form-Feedback">
                    <i className="ico-cancel-circle" />
                    <span>아이디를 확인 후 다시 시도해 주세요</span>
                  </p>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>블록 아이콘</span>
                </th>
                <td>
                  <Fileupload />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>AI 업무 분류</span>
                </th>
                <td>
                  <SelectboxMulti
                    selectopt={[
                      { value: "guestBlock", label: "guestBlock", badge: "v1" },
                      {
                        value: "memberBlock",
                        label: "memberBlock",
                        badge: "v2"
                      },
                      {
                        value: "contractBlock",
                        label: "contractBlock",
                        badge: "v3"
                      }
                    ]}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>AI 입력창 표시</span>
                </th>
                <td>
                  <input type="checkbox" id="stateai" />
                  <label htmlFor="stateai">
                    &nbsp;다음 블록 표시시, 채팅창 하단에 입력창 표시
                  </label>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>시작시간</span>
                </th>
                <td>
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
                  <span>종료시간</span>
                </th>
                <td>
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
              <tr>
                <th scope="row">
                  <span>전용 Bot</span>
                </th>
                <td>
                  <SelectboxMulti
                    selectopt={[
                      { value: "guestBlock", label: "guestBlock", badge: "v1" },
                      {
                        value: "memberBlock",
                        label: "memberBlock",
                        badge: "v2"
                      },
                      {
                        value: "contractBlock",
                        label: "contractBlock",
                        badge: "v3"
                      }
                    ]}
                  />
                  <sub>특정 Bot에서만 사용하는 블록</sub>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>종료 블록</span>
                </th>
                <td>
                  <input type="checkbox" id="endblock" />
                  <label htmlFor="endblock">
                    &nbsp;다음 블록을 호출하지 않는 블록
                  </label>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>다음 블록 표시방법</span>
                </th>
                <td>
                  <div className="select">
                    <select>
                      <option value="1">버튼</option>
                      <option value="2">메시지</option>
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
                  <span>다음 블록 자동선택</span>
                </th>
                <td>
                  <input type="checkbox" id="oneblock" />
                  <label htmlFor="oneblock">
                    &nbsp;다음 블록이 1개일 때, 자동선택 여부
                  </label>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>성공시 챗봇의 기본 블록 사용</span>
                </th>
                <td>
                  <input type="checkbox" id="compblock" />
                  <label htmlFor="compblock">
                    &nbsp;성공시, 챗봇의 기본 블록의 성공시 다음 블록을 사용
                  </label>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>성공시 다음 블록</span>
                </th>
                <td>
                  <SelectboxMulti
                    selectopt={[
                      { value: "guestBlock", label: "guestBlock", badge: "v1" },
                      {
                        value: "memberBlock",
                        label: "memberBlock",
                        badge: "v2"
                      },
                      {
                        value: "contractBlock",
                        label: "contractBlock",
                        badge: "v3"
                      }
                    ]}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>실패시 다음 블록</span>
                </th>
                <td>
                  <SelectboxMulti
                    selectopt={[
                      { value: "guestBlock", label: "guestBlock", badge: "v1" },
                      {
                        value: "memberBlock",
                        label: "memberBlock",
                        badge: "v2"
                      },
                      {
                        value: "contractBlock",
                        label: "contractBlock",
                        badge: "v3"
                      }
                    ]}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>중단시 다음 블록</span>
                </th>
                <td>
                  <SelectboxMulti
                    selectopt={[
                      { value: "guestBlock", label: "guestBlock", badge: "v1" },
                      {
                        value: "memberBlock",
                        label: "memberBlock",
                        badge: "v2"
                      },
                      {
                        value: "contractBlock",
                        label: "contractBlock",
                        badge: "v3"
                      }
                    ]}
                  />
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
            <button className="btn btn-warning">
              <i className="ico-pencil2" />
              <span>수정</span>
            </button>
            <button className="btn btn-danger">
              <i className="ico-bin" />
              <span>삭제</span>
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BlockWrite;
