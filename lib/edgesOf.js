"use strict";
const cornersOf = require("./cornersOf");

module.exports = ([x, y, z]) => options =>
  // map each corner to a pair with the next corner (looped back to front)
  cornersOf([x, y, z])(options).map((corner, i, corners) => {
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
// cornersOf([x, y, z]).map(pathPointToEdge)
