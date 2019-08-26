"use strict";
const edgesOfMany = require("./edgesOfMany");
const utils = require("./utils");

module.exports = centers => {
  const edges = edgesOfMany(centers);

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
