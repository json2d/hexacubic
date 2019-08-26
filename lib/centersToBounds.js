"use strict";
const centerToEdges = require("./centerToEdges");
const utils = require("./utils");
const flatMap = require("lodash.flatmap");

module.exports = centers => {
  const edges = flatMap(centers, centerToEdges); // with dupes for next part

  const includeDict = {};
  const excludeDict = {};

  edges.forEach(edge => {
    const encodedEdge = utils.encodeEdge(edge);
    if (excludeDict[encodedEdge]) {
      return;
    } else if (includeDict[encodedEdge]) {
      delete includeDict[encodedEdge];
      excludeDict[encodedEdge] = edge;
    } else {
      includeDict[encodedEdge] = edge;
    }
  });

  const bounds = Object.values(includeDict);

  return bounds;
};
