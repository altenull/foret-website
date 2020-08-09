export const hexToRgb = (hex) => {
  const rgbArray = hex
    .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));

  return {
    r: rgbArray[0],
    g: rgbArray[1],
    b: rgbArray[2],
  };
};
