"use strict";
const constants = require("./constants");
const flatMap = require("lodash.flatmap");

const centerToCorners = ([x, y, z]) =>
  constants.CORNER_OFFSETS.map(([x1, y1, z1]) => [x + x1, y + y1, z + z1]);

centerToCorners.every = centers => flatMap(centers, centerToCorners);

module.exports = centerToCorners;
