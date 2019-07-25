import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import Dragndrop from '../component/Dragndrop';

Modal.setAppElement('#root');

class BlockModal extends Component {
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
        <button className="btn" onClick={this.openModal}>
          <i className="ico-wrench" />
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
            <h2 className="title-modal">수정하기</h2>
          </div>
          <div className="contents-modal">
            <Dragndrop />
          </div>
          <div className="btn-group modal">
            <div>
              <button className="btn btn-info">
                <i className="ico-plus" />
                <span>등록</span>
              </button>
              <button className="btn btn-info">
                <i className="ico-checkmark" />
                <span>확인</span>
              </button>
            </div>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

export default BlockModal;
