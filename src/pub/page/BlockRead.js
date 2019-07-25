import React, { Component, Fragment } from 'react';
import BlockModal from './BlockModal';

class BlockRead extends Component {
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

        <div className="table horizon">
          <table className="table-defaults tables-hor table table-bordered">
            <tbody>
              <tr>
                <th scope="row" style={{ width: '25%' }}>
                  <span>블록명</span>
                </th>
                <td>
                  <span>
                    01_소다_가스요금표<span className="badge info">v2</span>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>블록 표시명</span>
                </th>
                <td>
                  <span>가스요금표</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>설명</span>
                </th>
                <td>
                  <span>가스 요금표 게시판 링크</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>블록유형</span>
                </th>
                <td>
                  <span>
                    <span className="badge use">일반</span>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>실행함수</span>
                </th>
                <td>
                  <span>
                    <span className="badge info">guestBlock</span>블록(손님
                    이상)
                  </span>
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
                  <span>블록 선택 메시지</span>
                </th>
                <td>
                  <span>요금 단가가 궁금해.</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>블록 아이콘</span>
                </th>
                <td>
                  <span>
                    <img src="https://via.placeholder.com/150x150" />
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>AI 업무 분류</span>
                </th>
                <td>
                  <span>13</span>
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
              <tr>
                <th scope="row">
                  <span>전용 Bot</span>
                </th>
                <td>
                  <span>
                    <span className="badge change">2</span>특정 Bot에서만
                    사용하는 블록
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>다음 블록 표시방법</span>
                </th>
                <td>
                  <span>
                    <span className="badge use">버튼</span>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>다음 블록 자동선택</span>
                </th>
                <td>
                  <span>
                    <span className="badge use">자동선택</span>다음 블록이 1개일
                    때, 자동선택 여부
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>성공시 챗봇의 기본 블록 사용</span>
                </th>
                <td>
                  <span>
                    <span className="badge primary">미사용</span>사용시, 챗봇의
                    기본 블록의 성공시 다음 블록을 사용
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>성공시 다음 블록</span>
                </th>
                <td>
                  <span>
                    <a href="javascript:void(0)" className="badge info big">
                      01_소다_기본 <span className="badge change">v2</span>
                    </a>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>실패시 다음 블록</span>
                </th>
                <td>
                  <span>
                    <a href="javascript:void(0)" className="badge info big">
                      01_소다_기본 <span className="badge change">v2</span>
                    </a>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span>중단시 다음 블록</span>
                </th>
                <td>
                  <span>
                    <a href="javascript:void(0)" className="badge info big">
                      01_소다_기본 <span className="badge change">v2</span>
                    </a>
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

        <div className="chatbot">
          <dl>
            <dt>
              <strong>시작 메시지</strong>
              <span className="noti">
                <span className="badge danger fill">3</span>
                <BlockModal />
              </span>
            </dt>
            <dd>
              <div className="bot">
                <p>
                  <span>
                    몇월 청구 요금을 확인해 드릴까요?&nbsp;
                    <span className="badge change">scgmsc</span>
                  </span>
                </p>
              </div>
              <div className="bot result">
                <p>
                  <span>몇월 청구 요금을 확인해 드릴까요?</span>
                </p>
              </div>
              <div className="user">
                <p>
                  <span>{'${requestYm} 청구요금을 알려줘.'}</span>
                </p>
              </div>
              <div className="user result">
                <p>
                  <span>{'${requestYm} 청구요금을 알려줘.'}</span>
                </p>
              </div>
            </dd>
          </dl>
        </div>

        <div className="chatbot">
          <dl>
            <dt>
              <strong>성공 메시지</strong>
              <span className="noti">
                <span className="badge danger fill">3</span>
                <BlockModal />
              </span>
            </dt>
            <dd>
              <div className="bot">
                <p>
                  <span>
                    몇월 청구 요금을 확인해 드릴까요?&nbsp;
                    <span className="badge change">scgmsc</span>
                  </span>
                </p>
              </div>
              <div className="bot result">
                <p>
                  <span>몇월 청구 요금을 확인해 드릴까요?</span>
                </p>
              </div>
              <div className="user">
                <p>
                  <span>{'${requestYm} 청구요금을 알려줘.'}</span>
                </p>
              </div>
              <div className="user result">
                <p>
                  <span>{'${requestYm} 청구요금을 알려줘.'}</span>
                </p>
              </div>
            </dd>
          </dl>
        </div>

        <div className="chatbot">
          <dl>
            <dt>
              <strong>실패 메시지</strong>
              <span className="noti">
                <span className="badge danger fill">3</span>
                <BlockModal />
              </span>
            </dt>
            <dd>
              <div className="bot">
                <p>
                  <span>
                    몇월 청구 요금을 확인해 드릴까요?&nbsp;
                    <span className="badge change">scgmsc</span>
                  </span>
                </p>
              </div>
              <div className="bot result">
                <p>
                  <span>몇월 청구 요금을 확인해 드릴까요?</span>
                </p>
              </div>
              <div className="user">
                <p>
                  <span>{'${requestYm} 청구요금을 알려줘.'}</span>
                </p>
              </div>
              <div className="user result">
                <p>
                  <span>{'${requestYm} 청구요금을 알려줘.'}</span>
                </p>
              </div>
            </dd>
          </dl>
        </div>

        <div className="chatbot">
          <dl>
            <dt>
              <strong>중단 메시지</strong>
              <span className="noti">
                <span className="badge danger fill">3</span>
                <BlockModal />
              </span>
            </dt>
            <dd>
              <div className="bot">
                <p>
                  <span>
                    몇월 청구 요금을 확인해 드릴까요?&nbsp;
                    <span className="badge change">scgmsc</span>
                  </span>
                </p>
              </div>
              <div className="bot result">
                <p>
                  <span>몇월 청구 요금을 확인해 드릴까요?</span>
                </p>
              </div>
              <div className="user">
                <p>
                  <span>{'${requestYm} 청구요금을 알려줘.'}</span>
                </p>
              </div>
              <div className="user result">
                <p>
                  <span>{'${requestYm} 청구요금을 알려줘.'}</span>
                </p>
              </div>
            </dd>
          </dl>
        </div>
      </Fragment>
    );
  }
}

export default BlockRead;
