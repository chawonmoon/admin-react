import { css } from 'styled-components';
import { SelectBoxStyled } from './SelectBox.styled';
import { ModalStyled } from './Modal.styled';
import { ColorpickerStyled } from './Colorpicker.styled';
import { DragndropStyled } from './Dragndrop.styled';

const Index = css`
  // react-modal
  ${ModalStyled}
  
  // react-select
  ${SelectBoxStyled} 
  
  // react-color
  ${ColorpickerStyled} 
  
  // react-beautiful-dnd
  ${DragndropStyled}
`;

export default Index;
