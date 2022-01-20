"use strict";
const centerToEdges = require("./centerToEdges");
const flatMap = require("lodash.flatmap");
const comparators = require("./comparators");
const uniqWith = require("lodash.uniqwith");

module.exports = centers =>
  uniqWith(flatMap(centers, centerToEdges), comparators.edges);
