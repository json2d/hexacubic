const H = require("./../lib/index");
const constants = require("./../lib/constants");
const comparators = require("./../lib/comparators");
const utils = require("./../lib/utils");

const origin = [0, 0, 0];
const neighborOfOrigin = [0, 1, -1];
const nonNeighborOfOrigin = [0, 5, -5];
const invalidPoint = [1, 1, 1];
const validPoint = [0, 0, 0];

const floatyA = 0.33333333333333337;
const floatyB = 0.3333333333333333;

const floatyPointA = [
  0.33333333333333337,
  0.3333333333333333,
  -0.6666666666666667
];
const floatyPointB = [
  0.3333333333333333,
  0.33333333333333337,
  -0.6666666666666666
];

const floatyEdgeA = [
  [0.33333333333333337, 0.3333333333333333, -0.6666666666666667],
  [0.6666666666666666, -0.33333333333333337, -0.3333333333333333]
];
const floatyEdgeB = [
  [0.3333333333333333, 0.33333333333333337, -0.6666666666666666],
  [0.66666666666666667, -0.3333333333333333, -0.33333333333333337]
];

describe("utils", () => {
  test("roundFloat", () => {
    expect(utils.roundFloat(floatyA)).toEqual(utils.roundFloat(floatyB));
    expect(utils.roundFloat(floatyA)).not.toEqual(floatyA);
  });

  test("roundCubic", () => {
    // mostly within
    expect(utils.roundCubic([-1.30534, 0.03333, 1.272])).toEqual([-1, 0, 1]);

    // corner
    expect(utils.roundCubic(floatyPointA)).toEqual([1, 0, -1]);

    // edge
    expect(utils.roundCubic([-2.06347, 1.5, 0.56347])).toEqual([-2, 1, 1]);
  });

  test("encodePoint", () => {
    const enA = utils.encodePoint(floatyPointA);
    const enB = utils.encodePoint(floatyPointB);
    const enC = utils.encodePoint(origin);

    expect(enA).toEqual(enB);
    expect(enA).not.toEqual(enC);
  });
  test("encodeEdge", () => {
    const enA = utils.encodeEdge(floatyEdgeA);
    const enB = utils.encodeEdge(floatyEdgeB);
    const enC = utils.encodeEdge(H.centerToEdges(nonNeighborOfOrigin)[0]);

    expect(enA).toEqual(enB);
    expect(enA).not.toEqual(enC);
  });
  test("isCubic", () => {
    expect(utils.isCubic(validPoint)).toBeTruthy();
    expect(utils.isCubic(invalidPoint)).not.toBeTruthy();
  });
});

describe("comparators", () => {
  test("points", () => {
    expect(comparators.points(origin, origin)).toBeTruthy();
    expect(comparators.points(origin, neighborOfOrigin)).not.toBeTruthy();

    expect(comparators.points(floatyPointA, floatyPointB)).toBeTruthy();
  });
  test("edges", () => {
    expect(comparators.edges(floatyEdgeA, floatyEdgeB)).toBeTruthy();
  });
});

describe("toMidpoint()", () => {
  test("basic usage", () => {
    const midpointOfOriginAndNeighbor = [0, 0.5, -0.5];
    expect(H.toMidpoint([origin, neighborOfOrigin])).toEqual(
      midpointOfOriginAndNeighbor
    );
  });
  test("with many points", () => {
    const neighborsOfNeighbor = H.centerToNeighbors(neighborOfOrigin);
    expect(H.toMidpoint(constants.NEIGHBOR_OFFSETS)).toEqual([0, 0, 0]);
    expect(H.toMidpoint(neighborsOfNeighbor)).toEqual(neighborOfOrigin);
  });
  test("with floats", () => {
    const cornersOfNeighbor = H.centerToCorners(neighborOfOrigin);
    expect(
      comparators.points(neighborOfOrigin, H.toMidpoint(cornersOfNeighbor))
    ).toBeTruthy();
  });
});

describe("centerToNeighbors()", () => {
  test("basic usage", () => {
    const neighborsOfOrigin = H.centerToNeighbors(origin);

    expect(neighborsOfOrigin).toEqual(constants.NEIGHBOR_OFFSETS);
    expect(neighborsOfOrigin).not.toContainEqual([0, 0, 0]);
    expect(neighborsOfOrigin).not.toContainEqual([2, 0, -2]);
  });
  test("many", () => {
    const neighborsOfGroup = H.centersToNeighbors([origin, neighborOfOrigin]);

    expect(neighborsOfGroup.length).toEqual(8);
  });
  test.skip("exceptions", () => {
    expect(() => H.centerToNeighbors(invalidPoint)).toThrow();
  });
});

describe("isNeighborOf()", () => {
  test("basic usage", () => {
    expect(H.isNeighborOf(origin)(neighborOfOrigin)).toBeTruthy();
    expect(H.isNeighborOf(neighborOfOrigin)(origin)).toBeTruthy();

    expect(H.isNeighborOf(origin)(nonNeighborOfOrigin)).not.toBeTruthy();
    expect(H.isNeighborOf(nonNeighborOfOrigin)(origin)).not.toBeTruthy();
  });
  test.skip("exceptions", () => {
    expect(() => H.isNeighborOf(invalidPoint)).toThrow();
    expect(() => H.isNeighborOf(validPoint)(invalidPoint)).toThrow();
  });
});

describe("centerToCorners()", () => {
  test("basic usage", () => {
    const cornersOfOrigin = H.centerToCorners(origin);

    expect(cornersOfOrigin).toEqual(constants.CORNER_OFFSETS);
    // expect(cornersOfOrigin.every(H.isCorner)).toBeTruthy();
  });
  test("many", () => {
    const cornersOfGroup = H.centersToCorners([origin, neighborOfOrigin]);

    expect(cornersOfGroup.length).toEqual(10);
    // expect(cornersOfOrigin.every(H.isCorner)).toBeTruthy();
  });
  test.skip("exceptions", () => {
    expect(() => H.centerToCorners(invalidPoint)).toThrow();
  });
});

describe("centerToEdges()", () => {
  test("basic usage", () => {
    const edgesOfOrigin = H.centerToEdges(origin);
    const cornersOfOrigin = H.centerToCorners(origin);

    expect(edgesOfOrigin.length).toEqual(6);

    edgesOfOrigin.forEach(edge => {
      const [cornerA, cornerB] = edge;
      expect(cornerA).not.toEqual(cornerB);
      expect(cornersOfOrigin).toContainEqual(cornerA);
      expect(cornersOfOrigin).toContainEqual(cornerB);
    });

    // expect(edgesOfOrigin.every(H.isEdge)).toBeTruthy();
  });
  test.skip("exceptions", () => {
    expect(() => H.centerToEdges(invalidPoint)).toThrow();
  });
});

describe("centersToEdges()", () => {
  test("basic usage", () => {
    const edgesOfOrigin = H.centerToEdges(origin);
    const edgesOfNeighbor = H.centerToEdges(neighborOfOrigin);

    const edgesOfGroup = H.centersToEdges([origin, neighborOfOrigin]);

    expect(edgesOfOrigin).toEqual(H.centersToEdges([origin]));

    expect(edgesOfGroup.length).toEqual(11);
    expect(edgesOfGroup).not.toEqual([...edgesOfOrigin, ...edgesOfNeighbor]);
    // expect(edgesOfOrigin.every(H.isEdge)).toBeTruthy();

    const edgesOfNonContiguousGroup = H.centersToEdges([
      origin,
      nonNeighborOfOrigin
    ]);
    expect(edgesOfNonContiguousGroup.length).toEqual(12);
  });
  test.skip("exceptions", () => {
    expect(() => H.centersToEdges([validPoint, invalidPoint])).toThrow();
  });
});

describe("centersToBounds()", () => {
  test("basic usage", () => {
    const boundsOfOrigin = H.centersToBounds([origin]);

    expect(boundsOfOrigin.length).toEqual(6);

    const boundsOfGroup = H.centersToBounds([origin, neighborOfOrigin]);

    expect(boundsOfGroup.length).toEqual(10);
    // expect(edgesOfOrigin.every(H.isEdge)).toBeTruthy();

    const boundsOfNonContiguousGroup = H.centersToBounds([
      origin,
      neighborOfOrigin,
      nonNeighborOfOrigin
    ]);

    expect(boundsOfNonContiguousGroup.length).toEqual(16);

    const originAndNeighbors = [origin, ...H.centerToNeighbors(origin)];

    const boundsOfOriginAndNeighbors = H.centersToBounds(originAndNeighbors);
    expect(boundsOfOriginAndNeighbors.length).toEqual(18);
  });
  test.skip("exceptions", () => {
    expect(() => H.centersToEdges([validPoint, invalidPoint])).toThrow();
  });
});

describe("distanceFrom()", () => {
  test("basic usage", () => {
    expect(H.distanceFrom(origin)(neighborOfOrigin)).toEqual(1);

    const distanceFromOrigin = H.distanceFrom(origin);

    expect(distanceFromOrigin(origin)).toEqual(0);

    const elsewhere = [5, -5, 0];
    const somewhere = [4, -5, 1];

    expect(distanceFromOrigin(elsewhere)).toEqual(5);
    expect(distanceFromOrigin(somewhere)).toEqual(5);
    expect(H.distanceFrom(elsewhere)(somewhere)).toEqual(1);
  });
  test.skip("exceptions", () => {
    expect(() => H.distanceFrom(validPoint, invalidPoint)).toThrow();
  });
});

describe("polygonsOfOrigin()", () => {
  test.skip("basic usage", () => {
    const polygonsOfOrigin = H.centersToPolygons([origin]);

    expect(polygonsOfOrigin.length).toEqual(1);

    // next assert may not be so good since order may not be the same
    expect(polygonsOfOrigin[0]).toEqual(H.constants.CORNER_OFFSETS);

    const polygonsOfOriginAndNeighbor = H.centersToPolygons([
      origin,
      neighborOfOrigin
    ]);

    expect(polygonsOfOriginAndNeighbor.length).toEqual(1);
    expect(polygonsOfOriginAndNeighbor[0].length).toEqual(10);

    const polygonsOfOriginAndNonNeighbor = H.centersToPolygons([
      origin,
      nonNeighborOfOrigin
    ]);

    expect(polygonsOfOriginAndNonNeighbor.length).toEqual(2);
    expect(polygonsOfOriginAndNonNeighbor[0].length).toEqual(6);
    expect(polygonsOfOriginAndNonNeighbor[1].length).toEqual(6);
  });
  test.skip("exceptions", () => {
    expect(() => H.polygonsOfOrigin([validPoint, invalidPoint])).toThrow();
    expect(() => H.polygonsOfOrigin(validPoint)).toThrow();
  });
});

// TODO: refactor w/ hexacube -> xy lookup so test can be put in loop
// eg. Map({ [0,0,0]: [0,0]})
describe("toProjection()", () => {
  test("basic usage - origin", () => {
    const xy = H.toProjection(origin);
    expect(xy).toEqual([0, 0]);
  });
  test("basic usage - unit points", () => {
    const xy = H.toProjection([1, -2, 1]);
    expect(xy).toEqual([0, -3]);

    const xy2 = H.toProjection([-1, 2, -1]);
    expect(xy2).toEqual([0, 3]);

    const xy3 = H.toProjection([-3, 2, 1]);
    expect(xy3).toEqual([-3.464101615137755, 3]);
  });
  test("basic usage - non-unit points", () => {
    expect(H.toProjection([0.5, -1, , 0.5])).toEqual([0, -1.5]);
  });
});

describe("toProjectionWith()", () => {
  test("basic usage", () => {
    const project = H.toProjectionWith({ size: 2, offset: -10 });

    // expected values
    const xyByCube = new Map([
      [[0, 0, 0], [-10, -10]],
      [[1, -2, 1], [-10, -16]],
      [[-1, 2, -1], [-10, -4]]
    ]);

    xyByCube.forEach((xy, cube) => expect(project(cube)).toEqual(xy));
  });
});

describe("toUnprojection()", () => {
  test("basic usage", () => {
    // need to use hexacube comparator here because `-0 !== 0`
    // in fact these test should probably all be written this way
    expect(H.comparators.points(H.toUnprojection([0, 0]), origin)).toBeTruthy();
  });
  test("basic usage - unit points", () => {
    expect(H.toUnprojection([0, -3])).toEqual([1, -2, 1]);
    expect(H.toUnprojection([0, 3])).toEqual([-1, 2, -1]);
    expect(H.toUnprojection([-3.464101615137755, 3])).toEqual([-3, 2, 1]);
  });
  test("basic usage - non-unit points", () => {
    expect(H.toUnprojection([0, -1.5])).toEqual([0.5, -1, 0.5]);
  });
});

describe("toUnprojectionWith()", () => {
  test("basic usage", () => {
    // c&p'd from `toProjectionWith` spec

    const unproject = H.toUnprojectionWith({ size: 2, offset: -10 });

    // expected values
    const xyByCube = new Map([
      [[0, 0, 0], [-10, -10]],
      [[1, -2, 1], [-10, -16]],
      [[-1, 2, -1], [-10, -4]]
    ]);

    xyByCube.forEach((xy, cube) => {
      // // this fails by false positive case by `-0 !== 0
      // expect(unproject(xy)).toEqual(cube));

      // so instead we'll use our hexacube comparator as a workaround
      expect(H.comparators.points(unproject(xy), cube)).toBeTruthy();
    });
  });
});
