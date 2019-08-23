"use strict";
const centerToCorners = require("./centerToCorners");

module.exports = ([x, y, z]) => (options) =>
  // map each corner to a pair with the next corner (looped back to front)
  centerToCorners([x, y, z])(options).map((corner, i, corners) => [
    corner,
    corners[(i + 1) % corners.length]
  ]);

// TODO: abstract functor
// const pathPointToEdge = (point, i, path) => [
//   point,
//   path[(i + 1) % path.length]
// ]
//
// centerToCorners([x, y, z]).map(pathPointToEdge)
