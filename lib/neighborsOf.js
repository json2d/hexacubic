"use strict";
const constants = require("./constants");

module.exports = ([x, y, z]) => () =>
  constants.NEIGHBOR_OFFSETS.map(([x1, y1, z1]) => [x + x1, x + y1, z + z1]);
