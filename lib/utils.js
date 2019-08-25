"use strict";

exports.encodeCoord = coord => coord.map(exports.roundFloat).toString();
exports.encodeEdge = edge => edge.map(exports.encodeCoord).toString();
exports.roundFloat = val => Math.round(parseFloat(val) * 100) / 100;
