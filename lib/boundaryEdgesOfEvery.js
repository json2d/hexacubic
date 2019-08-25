"use strict";
const edgesOfEvery = require("./edgesOfEvery");
const comparators = require("./comparators");
const isEqualWith = require("lodash.isequalwith");

module.exports = centers => options => {
  const edges = edgesOfEvery(centers)(options);

  const boundaryEdges = edges.filter((edge, i, _edges) => {
    const edgeReversed = edge.slice(0).reverse();
    return _edges.every(_edge => !isEqualWith(edgeReversed, _edge, comparators.edges));
  });

  return boundaryEdges;
};
