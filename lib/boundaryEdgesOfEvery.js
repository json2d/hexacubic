"use strict";
const edgesOfEvery = require("./edgesOfEvery");
const isEqualWith = require("lodash.isequalwith");
const F = require("float");

module.exports = centers => options => {
  const edges = edgesOfEvery(centers)(options);

  const boundaryEdges = [];
  edges.forEach(edge => {
    const edgeReversed = edge.slice(0).reverse();

    for (let _edge of edges) {
      if (isEqualWith(edgeReversed, _edge, edgeComparator)) {
        // NOTE: shared edges will always have coordinates in reversed order

        return; // not a boundary edge, leave early
      }
    }
    boundaryEdges.push(edge);
  });

  return boundaryEdges;
};

function edgeComparator(edgeA, edgeB) {
  return edgeA.every((corner, i) =>
    corner.every((n, j) => F.equals(n, edgeB[i][j]))
  );
}
