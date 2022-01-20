"use strict";

const toUnprojection = require("./toUnprojection");

// ref: https://stackoverflow.com/questions/2459402/hexagonal-grid-coordinates-to-pixel-coordinates

module.exports = ({ size = 1, offset = 0 }) => ([x, y]) => {
  const p1 = [(x - offset) / size, (y - offset) / size];
  return toUnprojection(p1);
};
