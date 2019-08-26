"use strict";
const centerToCorners = require("./centerToCorners");
const flatMap = require("lodash.flatmap");

module.exports = centers => flatMap(centers, centerToCorners);
