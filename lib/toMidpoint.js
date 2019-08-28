"use strict";
module.exports = points => {
  const summed = points.reduce(
    (acc, point) => point.map((n, i) => n + acc[i]),
    [0, 0, 0]
  );

  return summed.map(n => n / points.length);
};
