"use strict";

module.exports =
  ([x, y, z]) =>
  ([x1, y1, z1]) =>
    Math.max(Math.abs(x - x1), Math.abs(y - y1), Math.abs(z - z1));
