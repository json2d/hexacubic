"use strict";
const edgesOfEvery = require("./edgesOfEvery");
const comparators = require("./comparators");
const isEqualWith = require("lodash.isequalwith");

module.exports = centers => options => {
  const edges = edgesOfEvery(centers)(options);

  const boundaryEdges = [];
  edges.forEach(edge => {
    const edgeReversed = edge.slice(0).reverse();

    for (let _edge of edges) {
      if (isEqualWith(edgeReversed, _edge, comparators.edges)) {
        // NOTE: shared edges will always have coordinates in reversed order

        return; // not a boundary edge, leave early
      }
    }
    boundaryEdges.push(edge);
  });

  return boundaryEdges;
};
