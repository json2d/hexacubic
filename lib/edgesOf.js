"use strict";
const cornersOf = require("./cornersOf");

module.exports = ([x, y, z]) => (options) =>
  // map each corner to a pair with the next corner (looped back to front)
  cornersOf([x, y, z])(options).map((corner, i, corners) => [
    corner,
    corners[(i + 1) % corners.length]
  ]);

// TODO: abstract functor
// const pathPointToEdge = (point, i, path) => [
//   point,
//   path[(i + 1) % path.length]
// ]
//
// cornersOf([x, y, z]).map(pathPointToEdge)
