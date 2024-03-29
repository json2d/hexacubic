"use strict";

exports.ORIGIN = [0, 0, 0];

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

exports.POINTY = "POINTY";
exports.FLAT = "FLAT";

// assuming projection size is 1
exports.PROJECTED_SQ_DISTANCE_BETWEEN_CENTERS = 3;
exports.PROJECTED_DISTANCE_BETWEEN_CENTERS = Math.sqrt(3);
