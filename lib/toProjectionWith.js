"use strict";
module.exports = ({ size, offset }) => ([x0, y0, z0]) => {
  const x = Math.sqrt(3) * x0 + (Math.sqrt(3) / 2) * y0;
  const y = (3 / 2) * y0;

  if (offset) {
    x += offset;
    y += offset;
  }

  if (size) {
    x *= size;
    y *= size;
  }

  return [x, y];
};
