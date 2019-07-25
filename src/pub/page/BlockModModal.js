import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import CKEditor from 'ckeditor4-react';
import { Fileupload } from '../component';

Modal.setAppElement('#root');

class BlockModModal extends Component {
  state = {
    modalIsOpen: false
  };

  constructor() {
    super();
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // 참조 / 동기화 / 액세스 할 수 있는 시점.
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <Fragment>
        <button className="btn btn-warning sm" onClick={this.openModal}>
          <i className="ico-pencil2" />
          <span>수정</span>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="default-modal"
          overlayClassName="default-overlay"
        >
          <div className="header-modal">
            <button className="close-modal" onClick={this.closeModal}>
              <i className="ico-cross" />
            </button>
            <h2 className="title-modal">등록하기</h2>
          </div>
          <div className="contents-modal">
            {/* 가로형 테이블 */}
            <div className="table horizon">
              <table className="table-defaults tables-hor table table-bordered">
                <tbody>
                  <tr>
                    <th scope="row" style={{ width: '15%' }}>
                      <span>메시지 타입</span>
                    </th>
                    <td>
                      <div className="select">
                        <select>
                          <option value="1">메시지</option>
                          <option value="2">이미지</option>
                          <option value="3">링크</option>
                          <option value="4">랜덤 메시지</option>
                          <option value="5">실행함수</option>
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
                      <span>메시지</span>
                    </th>
                    <td>
                      <CKEditor
                        config={{
                          toolbar: [], // 텍스트만 입력되기때문에 툴바를 삭제
                          startupMode: 'source', // 텍스트만 입력되야하기 때문에 시작을 소스모드로 변경
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
                      <span>이미지</span>
                    </th>
                    <td>
                      <Fileupload />
                      <p className="form-Feedback">
                        <i className="ico-cancel-circle" />
                        <span>필수 입력 값입니다.</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <span>링크</span>
                    </th>
                    <td>
                      <input
                        type="text"
                        className="form-input"
                        title="샘플 인풋 텍스트"
                        placeholder="링크를 입력해주세요."
                      />
                      <p className="form-Feedback">
                        <i className="ico-cancel-circle" />
                        <span>필수 입력 값입니다.</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <span>랜덤 메시지</span>
                    </th>
                    <td>
                      <input
                        type="text"
                        className="form-input"
                        title="샘플 인풋 텍스트"
                        placeholder="랜덤 메시지를 입력해주세요."
                      />
                      <p className="form-Feedback">
                        <i className="ico-cancel-circle" />
                        <span>필수 입력 값입니다.</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <span>화자</span>
                    </th>
                    <td>
                      <div className="select">
                        <select>
                          <option value="10">챗봇</option>
                          <option value="30">사용자</option>
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
          </div>
          <div className="btn-group modal">
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
        </Modal>
      </Fragment>
    );
  }
}

export default BlockModModal;
