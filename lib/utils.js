"use strict";

exports.encodeCenter = center => center.join(",");
exports.encodePoint = point => point.map(exports.roundFloat).toString();
exports.encodeEdge = edge => edge.map(exports.encodePoint).toString();
exports.roundFloat = val => Math.round(parseFloat(val) * 100) / 100;
exports.isCubic = ([x, y, z]) => x + y + z === 0;

// ref: https://www.redblobgames.com/grids/hexagons/#rounding
exports.roundCubic = ([x, y, z]) => {
  let q = Math.round(x);
  let r = Math.round(y);
  let s = Math.round(z);

  const q_diff = Math.abs(q - x);
  const r_diff = Math.abs(r - y);
  const s_diff = Math.abs(s - z);

  if (q_diff > r_diff && q_diff > s_diff) {
    q = -r - s;
  } else if (r_diff > s_diff) {
    r = -q - s;
  } else {
    s = -q - r;
  }
  return [q, r, s];
};
