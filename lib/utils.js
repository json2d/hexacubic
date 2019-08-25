"use strict";

exports.encodeCoord = coord => coord.map(exports.safeFloat).toString();
exports.safeFloat = acVal => Math.round(parseFloat(acVal) * 100) / 100;
