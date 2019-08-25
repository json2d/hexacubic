"use strict";
const edgesOfEvery = require("./edgesOfEvery");
const utils = require("./utils");

module.exports = centers => options => {
  const edges = edgesOfEvery(centers)(options);

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

  const boundaryEdges = Object.values(includeDict);

  return boundaryEdges;
};
