"use strict";
const centerToNeighbors = require("./centerToNeighbors");
const comparators = require("./comparators");
const flatMap = require("lodash.flatmap");
const uniqWith = require("lodash.uniqwith");

module.exports = centers =>
  uniqWith(flatMap(centers, centerToNeighbors), comparators.points).filter(
    center => centers.every(_center => !comparators.points(center, _center)) // exclude input centers
  );
