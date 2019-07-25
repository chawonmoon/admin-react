import React, { Component } from 'react';

class Skip extends Component {
  render() {
    return (
      <div id="skipnavi">
        <ul>
          <li>
            <a href="#container">본문 바로가기</a>
          </li>
          <li>
            <a href="#header">주메뉴 바로가기</a>
          </li>
          <li>
            <a href="#footer">푸터 바로가기</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Skip;
