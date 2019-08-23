"use strict";
const edgesOf = require("./edgesOf");
const flatMap = require("lodash.flatmap");
module.exports = centers => options =>
  flatMap(centers, center => edgesOf(center)(options)); // TODO: polyfill flatmap
