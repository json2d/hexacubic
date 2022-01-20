"use strict";
module.exports =
  ({ size, offset }) =>
  ([x0, y0, z0]) => {
    let x = Math.sqrt(3) * x0 + (Math.sqrt(3) / 2) * y0;
    let y = (3 / 2) * y0;

    if (size) {
      x *= size;
      y *= size;
    }

    if (offset) {
      x += offset;
      y += offset;
    }

    return [x, y];
  };
