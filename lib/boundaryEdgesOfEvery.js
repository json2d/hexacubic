"use strict";
const edgesOfEvery = require("./edgesOfEvery");
const comparators = require("./comparators");
const isEqualWith = require("lodash.isequalwith");

module.exports = centers => options => {
  const edges = edgesOfEvery(centers)(options);

  const boundaryEdges = edges.filter((edge, i, _edges) => {
    return _edges.every(_edge => edge == _edge || !isEqualWith(edge, _edge, comparators.edges));
  });

  return boundaryEdges;
};
