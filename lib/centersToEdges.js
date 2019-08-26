"use strict";
const centerToEdges = require("./centerToEdges");
const flatMap = require("lodash.flatmap");

module.exports = centers => flatMap(centers, centerToEdges); // TODO: polyfill flatmap
