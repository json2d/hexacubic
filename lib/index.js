"use strict";
const isNeighborOf = require("./isNeighborOf");
const centerToNeighbors = require("./centerToNeighbors");
const centersToNeighbors = require("./centersToNeighbors");
const centerToCorners = require("./centerToCorners");
const centersToCorners = require("./centersToCorners");
const centerToEdges = require("./centerToEdges");
const centersToEdges = require("./centersToEdges");
const centersToBounds = require("./centersToBounds");
const toProjection = require("./toProjection");
const toProjectionWith = require("./toProjectionWith");
const toMidpoint = require("./toMidpoint");
const distanceFrom = require("./distanceFrom");
const { POINTY, FLAT } = require("./constants");

module.exports = {
  centerToNeighbors,
  centersToNeighbors,
  isNeighborOf,
  centerToCorners,
  centersToCorners,
  centerToEdges,
  centersToEdges,
  centerToBounds: centerToEdges, // alias
  centersToBounds,
  toProjection,
  toProjectionWith,
  toMidpoint,
  distanceFrom,
  orientations: { POINTY, FLAT }
};
