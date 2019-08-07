import { fonts } from '../Variables';

const Unit = {
  rem: size => {
    const { fontSizeBase } = fonts;
    let baseUnit = fontSizeBase.replace(/[0-9]/g, ''),
      unit = size.replace(/[0-9]/g, ''),
      staticSize = fontSizeBase.replace(/[^0-9]/g, ''),
      orignSize = size.replace(/[^0-9]/g, '');
    switch (baseUnit) {
      case 'pt':
        staticSize = staticSize * (16 / 12);
        break;
      case 'rem':
        staticSize = staticSize * 16;
        break;
      case 'px':
        staticSize = staticSize;
        break;
      default:
        console.error(
          `상대 크기 단위 ${baseUnit}가 사용되었습니다. 고정 크기 단위(px/pt/rem)만 사용해야 합니다.`
        );
        break;
    }

    switch (unit) {
      case 'px':
        orignSize = orignSize / staticSize;
        break;
      case 'pt':
        orignSize = orignSize(16 / 12) / staticSize;
        break;
      case 'rem':
        orignSize = orignSize;
        break;
      default:
        console.error(
          `상대 크기 단위 ${unit}가 사용되었습니다. 고정 크기 단위(px/pt/rem)만 사용해야 합니다.`
        );
        break;
    }

    return parseInt(orignSize * 1000) / 1000 + 'rem';
  }
};

export { Unit };
