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
    const enC = utils.encodeEdge(H.edgesOf(nonNeighborOfOrigin)[0]);

    expect(enA).toEqual(enB);
    expect(enA).not.toEqual(enC);
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

describe("neighborsOf()", () => {
  test("basic usage", () => {
    const neighborsOfOrigin = H.neighborsOf(origin);

    expect(neighborsOfOrigin).toEqual(constants.NEIGHBOR_OFFSETS);
    expect(neighborsOfOrigin).not.toContainEqual([0, 0, 0]);
    expect(neighborsOfOrigin).not.toContainEqual([2, 0, -2]);
  });
  test("every", () => {
    const neighborsOfGroup = H.neighborsOf.every([origin, neighborOfOrigin]);

    expect(neighborsOfGroup.length).toEqual(8);
  });
  test.skip("exceptions", () => {
    expect(() => H.neighborsOf(invalidPoint)).toThrow();
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

describe("cornersOf()", () => {
  test("basic usage", () => {
    const cornersOfOrigin = H.cornersOf(origin);

    expect(cornersOfOrigin).toEqual(constants.CORNER_OFFSETS);
    // expect(cornersOfOrigin.every(H.isCorner)).toBeTruthy();
  });
  test("every", () => {
    const cornersOfGroup = H.cornersOf.every([origin, neighborOfOrigin]);

    expect(cornersOfGroup.length).toEqual(12);
    // expect(cornersOfOrigin.every(H.isCorner)).toBeTruthy();
  });
  test.skip("exceptions", () => {
    expect(() => H.cornersOf(invalidPoint)).toThrow();
  });
});

describe("edgesOf()", () => {
  test("basic usage", () => {
    const edgesOfOrigin = H.edgesOf(origin);
    const cornersOfOrigin = H.cornersOf(origin);

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
    expect(() => H.edgesOf(invalidPoint)).toThrow();
  });
});

describe("edgesOfMany()", () => {
  test("basic usage", () => {
    const edgesOfOrigin = H.edgesOf(origin);
    const edgesOfNeighbor = H.edgesOf(neighborOfOrigin);

    const edgesOfGroup = H.edgesOfMany([origin, neighborOfOrigin]);

    expect(edgesOfOrigin).toEqual(H.edgesOfMany([origin]));

    expect(edgesOfGroup.length).toEqual(12);
    expect(edgesOfGroup).toEqual([...edgesOfOrigin, ...edgesOfNeighbor]);
    // expect(edgesOfOrigin.every(H.isEdge)).toBeTruthy();

    const edgesOfNonContiguousGroup = H.edgesOfMany([
      origin,
      neighborOfOrigin,
      nonNeighborOfOrigin
    ]);
    expect(edgesOfNonContiguousGroup.length).toEqual(18);
  });
  test.skip("exceptions", () => {
    expect(() => H.edgesOfMany([validPoint, invalidPoint])).toThrow();
  });
});

describe("boundsOfMany()", () => {
  test("basic usage", () => {
    const boundsOfOrigin = H.boundsOfMany([origin]);

    expect(boundsOfOrigin.length).toEqual(6);

    const boundsOfGroup = H.boundsOfMany([
      origin,
      neighborOfOrigin
    ]);

    expect(boundsOfGroup.length).toEqual(10);
    // expect(edgesOfOrigin.every(H.isEdge)).toBeTruthy();

    const boundsOfNonContiguousGroup = H.boundsOfMany([
      origin,
      neighborOfOrigin,
      nonNeighborOfOrigin
    ]);

    expect(boundsOfNonContiguousGroup.length).toEqual(16);

    const originAndNeighbors = [origin, ...H.neighborsOf(origin)];

    const boundsOfOriginAndNeighbors = H.boundsOfMany(
      originAndNeighbors
    );
    expect(boundsOfOriginAndNeighbors.length).toEqual(18);
  });
  test.skip("exceptions", () => {
    expect(() => H.edgesOfMany([validPoint, invalidPoint])).toThrow();
  });
});
