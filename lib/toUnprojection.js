"use strict";

// ref: https://stackoverflow.com/questions/2459402/hexagonal-grid-coordinates-to-pixel-coordinates

module.exports = ([x, y]) => {
  const y0 = (2 / 3) * y;
  const x0 = (Math.sqrt(3) / 3) * x - y / 3;
  const z0 = -((Math.sqrt(3) / 3) * x + y / 3);

  return [x0, y0, z0];
};
