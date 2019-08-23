"use strict";
const edgesOfEvery = require("./edgesOfEvery");
const isEqual = require("lodash.isequal");
const reverse = require("lodash.reverse");

module.exports = centers => options => {
  const edges = edgesOfEvery(centers)(options);

  const boundaryEdges = [];
  edges.forEach(edge => {

    const edgeReversed = edge.slice(0).reverse();

    for (let _edge of edges) {

      if (isEqual(edgeReversed, _edge)) { // NOTE: shared edges will always have coordinates in reversed order
  
        // console.log(edgeReversed, _edge);
        return; // not a boundary edge, leave early
      }
    }
    boundaryEdges.push(edge);
  });

  return boundaryEdges;
};
