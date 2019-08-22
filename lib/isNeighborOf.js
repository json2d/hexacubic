"use strict";
const constants = require("./constants");

module.exports = ([x, y, z]) => ([x1, y1, z1]) =>
  [x1 - x, y1 - y, z1 - z]
    .sort()
    .every((n, i) => n === constants.NEIGHBOR_OFFSET_SORTED[i]);
