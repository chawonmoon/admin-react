import React, { Component } from 'react';

class Chatbot extends Component {
  render() {
    return (
      <div className="chatbot">
        <dl>
          <dt>
            <strong>제목 타이틀</strong>
            <span className="noti">
              <span className="badge danger fill">3</span>
              <button className="btn">
                <i className="ico-wrench" />
              </button>
            </span>
          </dt>
          <dd>
            <div className="bot">
              <p>
                <span>몇월 청구 요금을 확인해 드릴까요?</span>
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
    );
  }
}

export default Chatbot;
