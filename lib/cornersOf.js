"use strict";
const constants = require("./constants");

module.exports = ([x, y, z]) =>
  constants.CORNER_OFFSETS.map(([x1, y1, z1]) => [x + x1, y + y1, z + z1]);
