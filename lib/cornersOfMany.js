"use strict";
const cornersOf = require("./cornersOf");
const flatMap = require("lodash.flatmap");

module.exports = centers => flatMap(centers, cornersOf);
