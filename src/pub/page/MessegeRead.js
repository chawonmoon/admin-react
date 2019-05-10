import React, { Component, Fragment } from "react";
import NoticeModal from "./NoticeModal";

class MessegeRead extends Component {
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
            <li className="breadcrumb-item ">
              <a href="javascript:void(0);">랜덤 메시지 함수</a>
            </li>
            <li className="breadcrumb-item active">상세보기</li>
          </ol>
        </div>

        <div className="table horizon">
          <table className="table-defaults tables-hor table table-bordered">
            <tbody>
              <tr>
                <th scope="row" style={{ width: "150px" }}>
                  <span>랜덤 메시지 함수명</span>
                </th>
                <td>
                  <span>01_소다_청구요금조회_AI답변</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>설명</span>
                </th>
                <td>
                  <span>청구요금조회 AI 답변 첫 문구</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>종류</span>
                </th>
                <td>
                  <span>
                    <span className="badge info">STRING</span>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>상태</span>
                </th>
                <td>
                  <span>
                    <span className="badge use">사용중</span>
                  </span>
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

        {/* 세로형 테이블 */}
        <div className="box-border">
          <h2>랜덤 아이템</h2>
          <div className="table vertical">
            <table>
              <caption>세로형 테이블 샘플</caption>
              <thead>
                <tr>
                  <th scope="col" style={{ width: "auto" }}>
                    <span>아이템 이름</span>
                  </th>
                  <th scope="col" style={{ width: "12%" }}>
                    <span>시작</span>
                  </th>
                  <th scope="col" style={{ width: "12%" }}>
                    <span>종료</span>
                  </th>
                  <th scope="col" style={{ width: "20%" }}>
                    <span>&nbsp;</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span>02:00~05:00</span>
                  </th>
                  <td>
                    <span>
                      <span className="badge use">02:00:00</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <span className="badge use">05:00:00</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <button className="btn btn-warning sm">
                        <i className="ico-pencil2" />
                        수정
                      </button>
                      <button className="btn btn-danger sm">
                        <i className="ico-bin" />
                        삭제
                      </button>
                    </span>
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    <span>02:00~05:00</span>
                  </th>
                  <td>
                    <span>
                      <span className="badge use">02:00:00</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <span className="badge use">05:00:00</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <button className="btn btn-warning sm">
                        <i className="ico-pencil2" />
                        수정
                      </button>
                      <button className="btn btn-danger sm">
                        <i className="ico-bin" />
                        삭제
                      </button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span>02:00~05:00</span>
                  </th>
                  <td>
                    <span>
                      <span className="badge use">02:00:00</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <span className="badge use">05:00:00</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <button className="btn btn-warning sm">
                        <i className="ico-pencil2" />
                        수정
                      </button>
                      <button className="btn btn-danger sm">
                        <i className="ico-bin" />
                        삭제
                      </button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span>02:00~05:00</span>
                  </th>
                  <td>
                    <span>
                      <span className="badge use">02:00:00</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <span className="badge use">05:00:00</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <button className="btn btn-warning sm">
                        <i className="ico-pencil2" />
                        수정
                      </button>
                      <button className="btn btn-danger sm">
                        <i className="ico-bin" />
                        삭제
                      </button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span>02:00~05:00</span>
                  </th>
                  <td>
                    <span>
                      <span className="badge use">02:00:00</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <span className="badge use">05:00:00</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <button className="btn btn-warning sm">
                        <i className="ico-pencil2" />
                        수정
                      </button>
                      <button className="btn btn-danger sm">
                        <i className="ico-bin" />
                        삭제
                      </button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span>02:00~05:00</span>
                  </th>
                  <td>
                    <span>
                      <span className="badge use">02:00:00</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <span className="badge use">05:00:00</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <button className="btn btn-warning sm">
                        <i className="ico-pencil2" />
                        수정
                      </button>
                      <button className="btn btn-danger sm">
                        <i className="ico-bin" />
                        삭제
                      </button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span>02:00~05:00</span>
                  </th>
                  <td>
                    <span>
                      <span className="badge use">02:00:00</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <span className="badge use">05:00:00</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <button className="btn btn-warning sm">
                        <i className="ico-pencil2" />
                        수정
                      </button>
                      <button className="btn btn-danger sm">
                        <i className="ico-bin" />
                        삭제
                      </button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span>02:00~05:00</span>
                  </th>
                  <td>
                    <span>
                      <span className="badge use">02:00:00</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <span className="badge use">05:00:00</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <button className="btn btn-warning sm">
                        <i className="ico-pencil2" />
                        수정
                      </button>
                      <button className="btn btn-danger sm">
                        <i className="ico-bin" />
                        삭제
                      </button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span>02:00~05:00</span>
                  </th>
                  <td>
                    <span>
                      <span className="badge use">02:00:00</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <span className="badge use">05:00:00</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <button className="btn btn-warning sm">
                        <i className="ico-pencil2" />
                        수정
                      </button>
                      <button className="btn btn-danger sm">
                        <i className="ico-bin" />
                        삭제
                      </button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span>02:00~05:00</span>
                  </th>
                  <td>
                    <span>
                      <span className="badge use">02:00:00</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <span className="badge use">05:00:00</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <button className="btn btn-warning sm">
                        <i className="ico-pencil2" />
                        수정
                      </button>
                      <button className="btn btn-danger sm">
                        <i className="ico-bin" />
                        삭제
                      </button>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 버튼그룹 */}
          <div className="btn-group">
            <button className="btn btn-info">
              <i className="ico-plus" />
              <span>등록</span>
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MessegeRead;
