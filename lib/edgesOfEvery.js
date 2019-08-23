"use strict";
const edgesOf = require("./edgesOf");

module.exports = centers => options =>
  centers.flatmap(center => edgesOf(center)); // TODO: polyfill flatmap
