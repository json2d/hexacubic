"use strict";
const edgesOf = require("./edgesOf");
const flatMap = require("lodash.flatmap");

module.exports = centers => flatMap(centers, edgesOf); // TODO: polyfill flatmap
