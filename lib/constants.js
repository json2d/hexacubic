"use strict";
exports.NEIGHBOR_OFFSET_SORTED = [-1, 0, 1];
exports.NEIGHBOR_OFFSETS = [
  [1, 0, -1],
  [-1, 0, 1],
  [0, 1, -1],
  [0, -1, 1],
  [1, -1, 0],
  [-1, 1, 0]
];

const ONE_THIRD = 1 / 3;
const TWO_THIRD = 2 / 3;

// here the magic pattern for clockwise ordered corners is shiftomg the 2/3 element left (looped back to front) and flip the signs!
exports.CORNER_OFFSETS = [
  [ONE_THIRD, -TWO_THIRD, ONE_THIRD],
  [TWO_THIRD, -ONE_THIRD, -ONE_THIRD],
  [ONE_THIRD, ONE_THIRD, -TWO_THIRD],
  [-ONE_THIRD, TWO_THIRD, -ONE_THIRD],
  [-TWO_THIRD, ONE_THIRD, ONE_THIRD],
  [-ONE_THIRD, -ONE_THIRD, TWO_THIRD]
];
