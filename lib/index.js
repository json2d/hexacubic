"use strict";
const isNeighborOf = require("./isNeighborOf");
const neighborsOf = require("./neighborsOf");
const neighborsOfMany = require("./neighborsOf");
const centerToCorners = require("./centerToCorners");
const centersToCorners = require("./centersToCorners");
const centerToEdges = require("./centerToEdges");
const centersToEdges = require("./centersToEdges");
const boundsOfMany = require("./boundsOfMany");
const { POINTY, FLAT } = require("./constants");

module.exports = {
  neighborsOf,
  neighborsOfMany,
  isNeighborOf,
  centerToCorners,
  centersToCorners,
  centerToEdges,
  centersToEdges,
  boundsOf: centerToEdges, // alias
  boundsOfMany,
  orientations: { POINTY, FLAT }
};
