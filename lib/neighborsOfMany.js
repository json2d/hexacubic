"use strict";
const neighborsOf = require("./neighborsOf");
const comparators = require("./comparators");
const flatMap = require("lodash.flatmap");
const uniqWith = require("lodash.uniqwith");

module.exports = centers =>
  uniqWith(flatMap(centers, neighborsOf), comparators.points).filter(center =>
    centers.every(_center => !comparators.points(center, _center))
  );

