"use strict";
const neighborsOf = require("./neighborsOf");
const isNeighborOf = require("./isNeighborOf");
const cornersOf = require("./cornersOf");
const edgesOf = require("./edgesOf");
const edgesOfEvery = require("./edgesOfEvery");
const boundaryEdgesOfEvery = require("./boundaryEdgesOfEvery");

module.exports = {
  neighborsOf,
  isNeighborOf,
  cornersOf,
  edgesOf,
  edgesOfEvery,
  boundaryEdgesOfEvery
};
