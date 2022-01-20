"use strict";
const F = require("float");

exports.points = (pointA, pointB) =>
  pointA.every((n, i) => F.equals(n, pointB[i]));

exports.edges = (edgeA, edgeB) =>
  edgeA.every((corner, i) => exports.points(corner, edgeB[i]));
