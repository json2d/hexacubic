"use strict";
const isNeighborOf = require("./isNeighborOf");
const centerToNeighbors = require("./centerToNeighbors");
const centersToNeighbors = require("./centersToNeighbors");
const centerToCorners = require("./centerToCorners");
const centersToCorners = require("./centersToCorners");
const centerToEdges = require("./centerToEdges");
const centersToEdges = require("./centersToEdges");
const centersToBounds = require("./centersToBounds");
const { POINTY, FLAT } = require("./constants");

module.exports = {
  centerToNeighbors,
  centersToNeighbors,
  isNeighborOf,
  centerToCorners,
  centersToCorners,
  centerToEdges,
  centersToEdges,
  boundsOf: centerToEdges, // alias
  centersToBounds,
  orientations: { POINTY, FLAT }
};
