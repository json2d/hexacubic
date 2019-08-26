"use strict";

exports.encodePoint = point => point.map(exports.roundFloat).toString();
exports.encodeEdge = edge => edge.map(exports.encodePoint).toString();
exports.roundFloat = val => Math.round(parseFloat(val) * 100) / 100;
