import React, { Component } from 'react';
import SkipStyled from './Skip.styled';

class Skip extends Component {
  render() {
    return (
      <SkipStyled>
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
      </SkipStyled>
    );
  }
}

export default Skip;
