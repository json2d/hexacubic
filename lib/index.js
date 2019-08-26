"use strict";
const isNeighborOf = require("./isNeighborOf");
const neighborsOf = require("./neighborsOf");
const neighborsOfMany = require("./neighborsOf");
const cornersOf = require("./cornersOf");
const cornersOfMany = require("./cornersOfMany");
const edgesOf = require("./edgesOf");
const edgesOfMany = require("./edgesOfMany");
const boundsOfMany = require("./boundsOfMany");
const {POINTY, FLAT} = require("./constants");

module.exports = {
  neighborsOf,
  neighborsOfMany,
  isNeighborOf,
  cornersOf,
  cornersOfMany,
  edgesOf,
  edgesOfMany,
  boundsOf: edgesOf, // alias
  boundsOfMany,
  orientations: {POINTY, FLAT}
};
