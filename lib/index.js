"use strict";
const isNeighborOf = require("./isNeighborOf");
const neighborsOf = require("./neighborsOf");
const neighborsOfMany = require("./neighborsOf");
const centerToCorners = require("./centerToCorners");
const centersToCorners = require("./centersToCorners");
const edgesOf = require("./edgesOf");
const edgesOfMany = require("./edgesOfMany");
const boundsOfMany = require("./boundsOfMany");
const { POINTY, FLAT } = require("./constants");

module.exports = {
  neighborsOf,
  neighborsOfMany,
  isNeighborOf,
  centerToCorners,
  centersToCorners,
  edgesOf,
  edgesOfMany,
  boundsOf: edgesOf, // alias
  boundsOfMany,
  orientations: { POINTY, FLAT }
};
