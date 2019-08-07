import styled from 'styled-components';
import { color, themeColor, fonts } from '../../styled/Variables';

const { white } = color,
  { basic } = themeColor,
  { fontSizeBase } = fonts,
  commonColor = '#1e88e5'; // 컴포넌트 공통 색상

const SkipStyled = styled.div`
  font-size: 0;
  background: ${basic};
  ul {
    text-align: center;
    line-height: 0;
    li {
      display: inline-block;
      line-height: 0;
      font-size: 0;
      a {
        display: inline-block;
        width: 159px;
        line-height: 0;
        height: 0;
        border: 0px solid ${commonColor};
        background: ${white};
        text-align: center;
        overflow: hidden;
        color: ${commonColor};
        font-size: ${fontSizeBase};
        &:focus {
          border: 2px solid ${commonColor};
          line-height: 30px;
          height: auto;
        }
      }
    }
  }
`;

export default SkipStyled;
