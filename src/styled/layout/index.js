import { css } from 'styled-components';
import { BoxStyled } from './Box.styled';
import { Grouping } from './Grouping.styled';

const Index = css`
  // Common layout
  html,
  body {
    height: 100%;
    min-width: 320px;
    #root {
      height: 100%;
      min-width: 320px;
    }
    textarea.cke_source {
      width: calc(100% - 10px) !important;
      height: calc(100% - 10px) !important;
      padding: 5px;
      box-sizing: content-box;
    }
  }

  // Box 레이아웃 설정
  ${BoxStyled}
  
  // 버튼, 테이블 그룹핑 Tag 스타일
  ${Grouping}
`;

export default Index;
