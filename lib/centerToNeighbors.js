"use strict";
const constants = require("./constants");
const comparators = require("./comparators");
const flatMap = require("lodash.flatmap");
const uniqWith = require("lodash.uniqwith");

const centerToNeighbors = ([x, y, z]) =>
  constants.NEIGHBOR_OFFSETS.map(([x1, y1, z1]) => [x + x1, y + y1, z + z1]);

centerToNeighbors.every = centers =>
  uniqWith(flatMap(centers, centerToNeighbors), comparators.points).filter(center =>
    centers.every(_center => !comparators.points(center, _center))
  );

module.exports = centerToNeighbors;
