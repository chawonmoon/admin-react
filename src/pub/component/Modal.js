import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import { TableH } from '../units';

Modal.setAppElement('#root');

class Modaldefault extends Component {
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
          <i className="ico-bubble" />
          <span>Default Modal</span>
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
            <h2 className="title-modal">타이틀 영역</h2>
          </div>
          <div className="contents-modal">
            <TableH />
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

export default Modaldefault;
