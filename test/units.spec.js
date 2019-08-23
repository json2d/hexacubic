const H = require("./../lib/index");
const constants = require("./../lib/constants");

const origin = [0, 0, 0];
const neighborOfOrigin = [0, 1, -2];
const invalidCoord = [1, 1, 1];
const validCoord = [0, 0, 0];

describe("neighborsOf()", () => {
  test("basic usage", () => {
    const neighborsOfOrigin = H.neighborsOf(origin)();

    expect(neighborsOfOrigin).toEqual(constants.NEIGHBOR_OFFSETS);
    expect(neighborsOfOrigin).not.toContainEqual([0, 0, 0]);
    expect(neighborsOfOrigin).not.toContainEqual([2, 0, -2]);
  });
  test.skip("exceptions", () => {

    expect(() => H.neighborsOf(invalidCoord)).toThrow();
  });
});

describe("isNeighborOf()", () => {
  test("basic usage", () => {
    const isNeighborOfOrigin = H.isNeighborOf(origin);

    const neighbor = [1, 0, -1];
    const nonNeighbor = [2, 0, -2];

    expect(isNeighborOfOrigin(neighbor)).toBeTruthy();
    expect(isNeighborOfOrigin(nonNeighbor)).not.toBeTruthy();
  });
  test.skip("exceptions", () => {

    expect(() => H.isNeighborOf(invalidCoord)).toThrow();
    expect(() => H.isNeighborOf(validCoord)(invalidCoord)).toThrow();
  });
});


describe("cornersOf()", () => {
  test("basic usage", () => {
    const cornersOfOrigin = H.cornersOf(origin)();

    expect(cornersOfOrigin).toEqual(constants.CORNER_OFFSETS);
    // expect(cornersOfOrigin.every(H.isCorner)).toBeTruthy();
  });
  test.skip("exceptions", () => {

    expect(() => H.cornersOf(invalidCoord)).toThrow();
  });
});

describe("edgesOf()", () => {
  test("basic usage", () => {
    const edgesOfOrigin = H.edgesOf(origin)();
    const cornersOfOrigin = H.cornersOf(origin)();

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

    expect(() => H.edgesOf(invalidCoord)).toThrow();
  });
});

describe("edgesOfEvery()", () => {
  test("basic usage", () => {

    const edgesOfOrigin = H.edgesOf(origin)();
    const edgesOfNeighbor = H.edgesOf(neighborOfOrigin)();

    const edgesOfGroup = H.edgesOfEvery([origin,neighborOfOrigin])();

    expect(edgesOfOrigin).toEqual(H.edgesOfEvery([origin])());

    expect(edgesOfGroup.length).toEqual(12);
    expect(edgesOfGroup).toEqual([...edgesOfOrigin, ...edgesOfNeighbor]);
    // expect(edgesOfOrigin.every(H.isEdge)).toBeTruthy();
  });
  test.skip("exceptions", () => {

    expect(() => H.edgesOfEvery([validCoord, invalidCoord])).toThrow();
  });
});

describe("boundaryEdgesOfEvery()", () => {
  test("basic usage", () => {

    const boundaryEdgesOfOrigin = H.boundaryEdgesOfEvery([origin])();

    expect(boundaryEdgesOfOrigin.length).toEqual(6);

    const boundaryEdgesOfGroup = H.boundaryEdgesOfEvery([origin,neighborOfOrigin])();

    expect(boundaryEdgesOfGroup.length).toEqual(10);
    // expect(edgesOfOrigin.every(H.isEdge)).toBeTruthy();
  });
  test.skip("exceptions", () => {

    expect(() => H.edgesOfEvery([validCoord, invalidCoord])).toThrow();
  });
});
