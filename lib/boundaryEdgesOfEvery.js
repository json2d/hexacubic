"use strict";
const edgesOfEvery = require("./edgesOfEvery");
const isEqual = require("lodash.isequal");

module.exports = centers => options => {
  const edges = edgesOfEvery(centers)(options);

  const boundaryEdges = [];
  edges.forEach(edge => {
    let count = 0;

    for (let _edge of edges) {
      if (isEqual(edge, _edge)) {
        count++;
        if (count > 1) {
          return; // not a boundary edge, leave early
        }
      }
    }
    boundaryEdges.push(edge);
  });

  return boundaryEdges;
};
