import { css } from 'styled-components';
import IconsVar from './IconsVar';
import { IcoSvg, IcoEot, IcoTtf, IcoWoff } from '../resources/font';
import {
  color,
  body,
  fonts,
  heading,
  paragraphs,
  links,
  tables,
  forms
} from './Variables';

const { black } = color,
  { bodyColor, bodyBg } = body,
  {
    fontFamilyMonospace,
    fontFamilyBase,
    fontSizeBase,
    fontWeightBold,
    fontWeightBolder,
    fontWeightBase,
    lineHeightBase
  } = fonts,
  { headingsMarginBottom } = heading,
  { paragraphMarginBottom } = paragraphs,
  { linkColor, linkDecoration, linkHoverColor, linkHoverDecoration } = links,
  { tableCellPadding, tableCaptionColor } = tables,
  { labelMarginBottom } = forms;

const iconResult = () => {
  let iconItem = [];
  for (let key in IconsVar) {
    let styles = `\.ico-${key}:before{content:"\\${IconsVar[key]}"}`;
    iconItem.push(styles);
  }
  return iconItem.join(';');
};

const Reset = css`
  
  // 폰트 페이스
  @font-face {
    font-family: "icomoon";
    src: url("${IcoEot}?h3g94c");
    src: url("${IcoEot}?h3g94c#iefix") 
        format("embedded-opentype"),
      url("${IcoTtf}?h3g94c") format("truetype"),
      url("${IcoWoff}?h3g94c") format("woff"),
      url("${IcoSvg}?h3g94c#icomoon") format("svg");
    font-weight: normal;
    font-style: normal;
  }
  
  [class^="ico-"], [class*=" ico-"] {
    // Base 폰트로 덮어씌워지는 문제 수정
    font-family: "icomoon" !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
  
    // 글꼴 렌더링 설정
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
   
  ${css`
    ${iconResult()}
  `}

  // 1.box-sizing : content-box 에서 padding 또는 border 에 의해 width 가 영향을받지 않도록 변경.
  // 2. 모든 브라우저에서 기본 글꼴 모음을 변경.
  // 3. 모든 브라우저에서 행의 높이를 수정.
  // 4. Windows Phone 및 iOS에서 기기의 방향 변경 후 글꼴 크기 조정을 방지.
  // 5. iOS에서 기본 탭 강조 표시를 완전히 투명하게 변경.      
  *, *::before, *::after {
    box-sizing: border-box; // 1
  }      
  html {
    font-family: sans-serif; // 2
    font-size: ${fontSizeBase};
    line-height: 1.15; // 3
    -webkit-text-size-adjust: 100%; // 4
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); // 5  
  }
  
  // 새로운 HTML5 구조 요소가 올바르게 표시되도록 추가 (IE10, 구형 브라우저).
  article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
  }
  
  // Body
  //
  // 1. 모든 브라우저에서 여백을 제거.
  // 2. 기본 '배경색'을 적용.
  // 3. 상속을 위한 초기 텍스트 정렬 값을 설정.      
  body {
    margin: 0; // 1
    font-family: ${fontFamilyBase};
    font-weight: ${fontWeightBase};
    line-height: ${lineHeightBase};
    color: ${bodyColor};
    text-align: left; // 3
    background-color: ${bodyBg}; // 2
  }
  
  // 키보드를 통해 액세스 할 수없는 요소의 포커스 외곽선 제거.
  // 포인터 이벤트에 응답 할 수있는 요소 주위에 원하지 않는 포커스 외곽선 제거.
  [tabindex="-1"]:focus {
    outline: 0 !important;
  }
  
  // Content Grouping
  // 1. Firefox에서 올바르게 표현될 수 있는 box-sizing 속성 추가
  // 2. Edge 및 IE에 overflow 속성 지정.
  hr {
    box-sizing: content-box; // 1
    height: 0; // 1
    overflow: visible; // 2
  }
  
  // 머리글에서 위쪽 여백을 제거.
  // 기본적으로 h1 ~ h6는 모두 위쪽과 아래쪽 여백이 있음.
  // margin 중첩을 피하기 위해 타입 스케일 내에서 쉽게 제어 할 수 있도록 상단 여백을 제거.
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: ${headingsMarginBottom};
  }
  
  // 문장 단락(P)의 여백 재설정
  // p의 상단 여백 재설정. em 대신 rem 단위를 사용하도록 하단 여백을 재설정.
  p {
    margin-top: 0;
    margin-bottom: ${paragraphMarginBottom};
  }
  
  // Abbreviations(약어)
  // 1. 툴팁 플러그인의 data- * 속성에 대한 중복 된 동작
  // 2. Chrome, Edge, IE, Opera 및 Safari에 올바른 text-decoration을 통일.
  // 3. cursor:help 를 설정하여 addr 태그임을 명시.
  // 4. Firefox 39- 대응, 아래쪽 테두리를 제거.
  // 5. text-decoration:underline 이 글자와 글자와 동떨어지지 않게 겹치도록 설정.
  abbr[title], abbr[data-original-title] {
    // 1
    text-decoration: underline; // 2
    text-decoration: underline dotted; // 2
    cursor: help; // 3
    border-bottom: 0; // 4
    text-decoration-skip-ink: none; // 5
  }
  
  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }
  
  ol, ul, dl {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      list-style: none;
    }
  }
  
  ol ol, ul ul, ol ul, ul ol {
    margin-bottom: 0;
  }
  
  dt {
    font-weight: ${fontWeightBold};
  }
  
  dd {
    margin-bottom: 0.5rem;
    margin-left: 0; // 브라우저 기본설정 리셋
  }
  
  blockquote {
    margin: 0 0 1rem;
  }
  
  b, strong {
    font-weight: ${fontWeightBolder}; // Chrome, Edge 및 Safari에서 font-weight 통일
  }
  
  small {
    // 모든 브라우저에서 글꼴 크기 통일.
    font-size: 80%;
  }
  
  // 모든 브라우저에서 sub 및 sup 요소가 줄 높이에 영향을 주지 않도록 설정.
  sub, sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }
  
  sub {
    bottom: -0.25em;
  }
  
  sup {
    top: -0.5em;
  }
  
  // Links
  a {
    color: ${linkColor};
    text-decoration: ${linkDecoration};
    background-color: transparent; // IE 10의 a 에서 회색 background-color 제거.
  
    &:hover {
      color: ${linkHoverColor};
      text-decoration: ${linkHoverDecoration};
    }
  }
  
  // 명시 적으로 keyboard-focusable (tabindex를 사용하지 않음)로 설정되지 않은
  // placeholder link / name 된 앵커 (href를 사용하지 않음)에 대해 이러한 스타일을 실행 취소합니다.
  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
    &:hover,
    &:focus {
      color: inherit;
      text-decoration: none;
    }
         
    &:focus {
      outline: 0;
    }
  }
  
  // Code
  pre,
  code,
  kbd,
  samp {
    font-family: ${fontFamilyMonospace};
    // 모든 브라우저에서 글꼴 단위를 em 으로 수정.
    font-size: 1em;
  }
  
  pre {
    // 브라우저 기본 margin-top 제거
    margin-top: 0;
    // 브라우저 기본 margin-bottom 1em을 rem을 사용하도록 재설정
    margin-bottom: 1rem;
    // 콘텐츠가 외부로 유출되지 않도록 함
    overflow: auto;
  }
  
  // Figures
  figure {
    // margin을 통일.
    margin: 0 0 1rem;
  }
  
  // Images and content
  img {
    vertical-align: middle;
    border-style: none; // IE 10의 링크 내부 이미지의 테두리를 제거.
  }
  
  svg {
    // IE10/11의 SVG overflow 버그에 대한 해결책.
    overflow: hidden;
    vertical-align: middle;
  }
  
  // Tables
  table {
    border-collapse: collapse; // 이중 border 방지
  }
  
  caption {
    padding-top: ${tableCellPadding};
    padding-bottom: ${tableCellPadding};
    color: ${tableCaptionColor};
    text-align: left;
    caption-side: bottom;
  }
  
  th {
    // text-align이 설정된 가장 가까운 부모인 body 에서 상속하여 기본 th 정렬을 일치시킨다.
    text-align: inherit;
  }
  
  // Forms
  label {
    // label 간격에 margin 을 사용.
    display: inline-block;
    margin-bottom: ${labelMarginBottom};
  }
  
  // macOS Chrome이 추가한 기본 'border-radius' 제거.
  button {
    border-radius: 0;
    border: 1px;
  }
  
  // 투명한 button 배경이 기본 button 포커스 스타일을 잃는 Firefox / IE 버그를 해결.
  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }
  
  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0; // Firefox 및 Safari 에서 margin 제거
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  
  button,
  input {
    overflow: visible; // Edge대응 overflow:visible
  }
  
  button,
  select {
    text-transform: none; // Firefox에서 대소문자 변환속성 상속 제거.
  }
  
  // Safari에서 word-wrap 상속 제거.
  select {
    word-wrap: normal;
  }
  
  // 1. Android v4-에서 네이티브 audio 와 video 컨트롤 UI 파과 WebKit 버그를 방지.
  // 2. iOS 및 Safari에서 클릭 가능한 유형의 스타일을 수정할 수 있게 변경.
  button,
  [type="button"], // 1
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button; // 2
  }
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    &:not(:disabled) {
      cursor: pointer;
    }
  }
  
  // Firefox에서 내부 테두리와 패딩을 제거하되, Normalize와 같이 outline을 복원하지 마십시오.
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }
  
  input[type="radio"],
  input[type="checkbox"] {
    box-sizing: border-box; // 1. IE 10 box-sizing 통일.
    padding: 0; // 2. IE 10에서 패딩을 제거.
  }
  
  input[type="date"],
  input[type="time"],
  input[type="datetime-local"],
  input[type="month"] {
    // 모바일 사파리에서 line-height 를 설정했을때 텍스트가 input 내에서
    // 수직 가운데 정렬되지 않는 버그를 방지하려면 시간 입력의 기본 모양을 제거해야함.
    -webkit-appearance: listbox;
  }
  
  textarea {
    overflow: auto; // IE에서 기본 세로 스크롤바를 제거.
    resize: vertical; // resize의 제약을 기본적인 박스 모양을 유지하기위해 위해 세로로만 설정.
  }
  
  fieldset {
    // fieldset 에 기본속성으로 min-width:min-content 를 설정.
    // div 는 기본값으로 min-width:0 을 가지고 있으므로
    // fieldset 이 표준 블록 요소처럼 동작하도록 재설정.
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }
  
  // 1. Edge 및 IE에서 텍스트 배치를 수정.
  // 2. IE의 fieldset 엘리먼트로부터 색상 상속.
  legend {
    display: block;
    width: 100%;
    max-width: 100%; // 1
    padding: 0;
    margin-bottom: 0.5rem;
  
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit; // 2
    white-space: normal; // 1
  }
  
  progress {
    vertical-align: baseline; // Chrome, Firefox 및 Opera에서 vertical-align 통일.
  }
  
  // Chrome에서 증가 및 감소 버튼의 커서 스타일을 수정(기본값 설정).
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  
  [type="search"] {
    outline-offset: -2px;
    -webkit-appearance: none;
  }
  
  // macOS의 Chrome 및 Safari에서 안쪽 여백을 제거합니다.
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  // 1. iOS 및 Safari에서 스타일을 클릭 할 수없는 유형을 수정.
  // 2. Safari에서 font 속성을 'inherit'으로 변경.
  ::-webkit-file-upload-button {
    font: inherit; // 2
    -webkit-appearance: button; // 1
  }
  
  // 요소 표시 수정
  output {
    display: inline-block;
  }
  
  summary {
    display: list-item; // list-item 으로 디스플레이 속성 통일
    cursor: pointer;
  }
  
  template {
    display: none; // IE에 디스플레이 속성 설정
  }
  
  // 항상 hidden 속성을 가진 요소를 숨김 (PureCSS에서).
  // IE 10에서 적절한 디스플레이가 필요합니다.
  [hidden] {
    display: none !important;
  }
`;

export default Reset;
