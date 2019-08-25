"use strict";
const constants = require("./constants");
const flatMap = require("lodash.flatmap");

const cornersOf = ([x, y, z]) =>
  constants.CORNER_OFFSETS.map(([x1, y1, z1]) => [x + x1, y + y1, z + z1]);

cornersOf.every = centers => flatMap(centers, center => cornersOf(center)); // TODO: polyfill flatmap

module.exports = cornersOf;