"use strict";
const centerToCorners = require("./centerToCorners");

module.exports = ([x, y, z]) =>
  // map each corner to a pair with the next corner (looped back to front)
  centerToCorners([x, y, z]).map((corner, i, corners) => {
    const edge = [corner, corners[(i + 1) % corners.length]];

    if (i % 2 == 0) {
      // flip direction for every other pair so that it matches each neighbor's corresponding edge! 😎
      edge.reverse();
    }

    return edge;
  });

// TODO: abstract functor
// const pathPointToEdge = (point, i, path) => [
//   point,
//   path[(i + 1) % path.length]
// ]
//
// centerToCorners([x, y, z]).map(pathPointToEdge)
