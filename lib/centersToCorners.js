"use strict";
const centerToCorners = require("./centerToCorners");
const flatMap = require("lodash.flatmap");
const comparators = require("./comparators");
const uniqWith = require("lodash.uniqwith");

module.exports = centers =>
  uniqWith(flatMap(centers, centerToCorners), comparators.points);
