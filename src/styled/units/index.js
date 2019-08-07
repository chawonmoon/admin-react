import { css } from 'styled-components';
import { BreadcrumbStyled } from './Breadcrumb.styled';
import { PaginationsStyled } from './Paginations.styled';
import { SelectStyled } from './Select.styled';
import { SpinnerStyled } from './Spinner.styled';
import { TableStyled } from './Table.styled';
import { ButtonStyled } from './Button.styled';
import { AlertStyled } from './Alert.styled';
import { BadgeStyled } from './Badge.styled';
import { InputStyled } from './InputStyled';
import { FileuploadStyled } from './Fileupload.styled';
import { ChatbotStyled } from './Chatbot.styled';

const Index = css`
  
  // 브레드크럼
  ${BreadcrumbStyled}
  
  // 페이지네이션
  ${PaginationsStyled}
  
  // 셀렉트박스
  ${SelectStyled}
  
  // 로딩바
  ${SpinnerStyled}
  
  // 테이블
  ${TableStyled}
  
  // 버튼
  ${ButtonStyled}
  
  // 경고
  ${AlertStyled}
  
  // 뱃지
  ${BadgeStyled}
  
  // 인풋박스
  ${InputStyled}
  
  // 파일 업로드
  ${FileuploadStyled}
  
  // 쳇봇
  ${ChatbotStyled}
`;

export default Index;
