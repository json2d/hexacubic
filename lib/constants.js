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

exports.CORNER_OFFSETS = [
  [ONE_THIRD, ONE_THIRD, -TWO_THIRD],
  [-ONE_THIRD, TWO_THIRD, -ONE_THIRD],
  [-TWO_THIRD, ONE_THIRD, ONE_THIRD],

  [-ONE_THIRD, TWO_THIRD, -ONE_THIRD],
  [ONE_THIRD, ONE_THIRD, -TWO_THIRD],
  [-ONE_THIRD, TWO_THIRD, -ONE_THIRD]
];
