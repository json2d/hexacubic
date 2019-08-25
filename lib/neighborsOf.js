"use strict";
const constants = require("./constants");
const comparators = require("./comparators");
const flatMap = require("lodash.flatmap");
const uniqWith = require("lodash.uniqwith");

const neighborsOf = ([x, y, z]) =>
  constants.NEIGHBOR_OFFSETS.map(([x1, y1, z1]) => [x + x1, y + y1, z + z1]);

neighborsOf.every = centers =>
  uniqWith(flatMap(centers, neighborsOf), comparators.coords).filter(center =>
    centers.every(_center => !comparators.coords(center, _center))
  );

module.exports = neighborsOf;
