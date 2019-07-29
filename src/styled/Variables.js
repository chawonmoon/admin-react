import { lightenDarkenColor, media } from './Functions';

const color = {
  white: '#ffffff',
  gray100: '#f8f9fa',
  gray200: '#e9ecef',
  gray300: '#dee2e6',
  gray400: '#ced4da',
  gray500: '#adb5bd',
  gray600: '#6c757d',
  gray700: '#495057',
  gray800: '#343a40',
  gray900: '#212529',
  black: '#000000',
  blue: '#007bff ',
  indigo: '#6610f2 ',
  purple: '#6f42c1 ',
  hotpink: '#e83e8c ',
  pink: '#f3848c ',
  red: '#dc3545 ',
  orange: '#fd7e14 ',
  yellow: '#ffc107 ',
  green: '#28a745 ',
  teal: '#20c997 ',
  cyan: '#17a2b8 '
};

const themeColor = {
  primary: color.blue,
  secondary: color.gray600,
  success: color.green,
  info: color.cyan,
  warning: color.yellow,
  danger: color.red,
  light: color.gray100,
  dark: color.gray800,
  use: lightenDarkenColor(color.green, -10),
  change: color.pink,
  dimmde: 'rgba(0, 0, 0, 0.75)', // 모달 팝업 반투명 bg
  basic: color.pink // 기본 테마 컬러
};

const body = {
  bodyBg: color.white,
  bodyColor: color.gray900
};

const fonts = {
  fontFamilySansSerif: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  fontFamilyMonospace: `SFMono-Regular, Menlo, Monaco, Consolas,"Liberation Mono", "Courier New", monospace`,
  fontFamilyBase: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  // 기본폰트 크기로 브라우저의 기본값 (일반적으로 16px)을 지정.
  // rem 변환 함수에 사용되기 때문에,
  // px / pt / rem 등의 고정된 크기 단위만 지정해야함
  fontSizeBase: '14px',
  fontWeightLighter: 'lighter',
  fontWeightLight: 300,
  fontWeightNormal: 400,
  fontWeightBold: 700,
  fontWeightBolder: 'bolder',
  fontWeightBase: 400,
  lineHeightBase: 1.5
};

const heading = {
  h1FontSize: fonts.fontSizeBase * 2.5,
  h2FontSize: fonts.fontSizeBase * 2,
  h3FontSize: fonts.fontSizeBase * 1.75,
  h4FontSize: fonts.fontSizeBase * 1.5,
  h5FontSize: fonts.fontSizeBase * 1.25,
  h6FontSize: fonts.fontSizeBase,
  headingsMarginBottom: 0,
  headingsFontFamily: null,
  headingsFontWeight: 500,
  headingsLineHeight: 1.2,
  headingsColor: null
};

const paragraphs = { paragraphMarginBottom: '1rem' };

const links = {
  linkColor: themeColor.primary,
  linkDecoration: 'none',
  linkHoverColor: lightenDarkenColor(themeColor.primary, '15%'),
  linkHoverDecoration: 'none'
};

const tables = {
  tableCellPadding: '0.75rem',
  tableCaptionColor: color.gray600
};

const forms = {
  labelMarginBottom: 0
};

const zIndex = {
  zindexFooter: 1020,
  zindexContentswrap: 1010,
  zindexContents: 1,
  zindexSidebar: 2,
  zindexHeader: 1030,
  zindexModal: 1040,
  zindexSpinner: 1050
};

const codes = {
  codeFontSize: '87.5%',
  codeColor: color.pink,
  kbdPaddingY: '0.2rem',
  kbdPaddingX: '0.4rem',
  kbdFontSize: '87.5%',
  kbdColor: color.white,
  kbdBg: color.gray900,
  preColor: color.gray900,
  preScrollableMaxHeight: '340px'
};

const prints = {
  printPageSize: 'a3',
  printBodyMinWidth: '992px'
};

const commons = {
  borderWidth: '1px',
  borderRadius: '0.25rem',
  boxShadow: `0 0.5rem 1rem rgba(${color.black}, 0.15)`,
  transitionBase: 'all 0.3s ease-in-out',
  transitionFade: 'opacity 0.15s linear',
  transitionCollapse: 'max-height 0.5s ease-in-out'
};

export {
  color,
  themeColor,
  body,
  fonts,
  heading,
  paragraphs,
  links,
  tables,
  forms,
  zIndex,
  codes,
  prints
};
