import React, { Component, Fragment } from "react";
import Modal from "react-modal";
import CKEditor from "ckeditor4-react";

Modal.setAppElement("#root");

class NoticeModal extends Component {
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
        <button className="btn btn-info" onClick={this.openModal}>
          <i className="ico-plus" />
          <span>등록</span>
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
                    <th scope="row" style={{ width: "15%" }}>
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

export default NoticeModal;
