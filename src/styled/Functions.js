import { css } from 'styled-components';

// color : lighten = amt 양수, darken = amt 음수
const lightenDarkenColor = (color, amt) => {
    let usePound = false,
      colorCode,
      num,
      r,
      g,
      b;

    if (color[0] === 'r' && color[1] === 'g' && color[2] === 'b') {
      colorCode = colorToHex(color);
    }

    if (color[0] === '#') {
      colorCode = color.slice(1);
      usePound = true;
    }

    num = parseInt(colorCode, 16);

    r = (num >> 16) + amt;
    g = ((num >> 8) & 0x00ff) + amt;
    b = (num & 0x0000ff) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    return (
      (usePound ? '#' : '') +
      (r.toString(16).length === 1 ? '0' + r.toString(16) : r.toString(16)) +
      (g.toString(16).length === 1 ? '0' + g.toString(16) : g.toString(16)) +
      (b.toString(16).length === 1 ? '0' + b.toString(16) : b.toString(16))
    );
  },
  colorToHex = color => {
    if (color.substr(0, 1) === '#') {
      return color;
    }
    let digits = /(.*?)rgb((\d+),\s?(\d+),\s?(\d+))/.exec(color);

    if (digits) {
      let r = parseInt(digits[2]),
        g = parseInt(digits[3]),
        b = parseInt(digits[4]);

      return (
        '#' +
        (r.toString(16).length === 1 ? '0' + r.toString(16) : r.toString(16)) +
        (g.toString(16).length === 1 ? '0' + g.toString(16) : g.toString(16)) +
        (b.toString(16).length === 1 ? '0' + b.toString(16) : b.toString(16))
      );
    } else {
      digits = /(.*?)rgba?\((\d+),\s?(\d+),\s?(\d+),\s?(\d+(\.\d)?)\)/.exec(
        color
      );

      if (digits) {
        let r = parseInt(digits[2]),
          g = parseInt(digits[3]),
          b = parseInt(digits[4]),
          a = parseFloat(digits[5]);

        return (
          '#' +
          (r.toString(16).length === 1
            ? '0' + r.toString(16)
            : r.toString(16)) +
          (g.toString(16).length === 1
            ? '0' + g.toString(16)
            : g.toString(16)) +
          (b.toString(16).length === 1
            ? '0' + b.toString(16)
            : b.toString(16)) +
          (a * 255).toString(16).substring(0, 2)
        );
      }
    }
    return color;
  };

// 반응형 미디어쿼리 셋팅
// ex) ${media.desktopL`width: 768px;`}
const breakpoints = {
    desktopL: '1440px',
    tabletL: '1024px',
    tabletS: '767px',
    mobL: '639px',
    mobM: '424px',
    mobS: '374px'
  },
  media = Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${breakpoints[label] / 16}em) {
        ${css(...args)};
      }
    `;
    return acc;
  }, {});

export { lightenDarkenColor, media };
