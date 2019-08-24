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

const coordComparator = (coordA, coordB) => coordA.every((n, i) => F.equals(n, coordB[i]));
const edgeComparator = (edgeA, edgeB) => edgeA.every((corner, i) => coordComparator(corner, edgeB[i]));
