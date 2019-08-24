"use strict";
const F = require("float");

exports.coords = (coordA, coordB) =>
  coordA.every((n, i) => F.equals(n, coordB[i]));

exports.edges = (edgeA, edgeB) =>
  edgeA.every((corner, i) => exports.coords(corner, edgeB[i]));
