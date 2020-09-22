// www.rampweb.com/toolbar/colorcontrast.html
export const getBrightness = ({ r, g, b }) => (Math.round(r * 299) + Math.round(g * 587) + Math.round(b * 114)) / 1000;
