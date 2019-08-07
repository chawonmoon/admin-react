const Brightness = {
  lightenDarkenColor: (rgbcode, percent) => {
    if (rgbcode.indexOf('rgb') < 0) {
      let r = parseInt(rgbcode.slice(1, 3), 16),
        g = parseInt(rgbcode.slice(3, 5), 16),
        b = parseInt(rgbcode.slice(5, 7), 16),
        HSL = Brightness.rgbToHsl(r, g, b),
        newBrightness = HSL[2] + HSL[2] * (percent / 100),
        RGB;

      RGB = Brightness.hslToRgb(HSL[0], HSL[1], newBrightness);
      rgbcode =
        '#' +
        Brightness.convertToTwoDigitHexCodeFromDecimal(RGB[0]) +
        Brightness.convertToTwoDigitHexCodeFromDecimal(RGB[1]) +
        Brightness.convertToTwoDigitHexCodeFromDecimal(RGB[2]);
    }
    return rgbcode;
  },
  convertToTwoDigitHexCodeFromDecimal: decimal => {
    let code = Math.round(decimal).toString(16);

    code.length > 1 || (code = '0' + code);
    return code;
  },
  rgbToHsl: (red, green, blue) => {
    let r = red / 255,
      g = green / 255,
      b = blue / 255,
      max = Math.max(r, g, b),
      min = Math.min(r, g, b),
      h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return [h, s, l];
  },
  hslToRgb: (h, s, l) => {
    let r, g, b, q, p;
    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      }

      q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return [r * 255, g * 255, b * 255];
  }
};

export { Brightness };
