const H = require("./../lib/index");
const constants = require("./../lib/constants");

describe("neighborsOf()", () => {
  test("basic usage", () => {
    const origin = [0, 0, 0];
    const neighborsOfOrigin = H.neighborsOf(origin)();

    expect(neighborsOfOrigin).toEqual(constants.NEIGHBOR_OFFSETS);
    expect(neighborsOfOrigin).not.toContainEqual([0, 0, 0]);
    expect(neighborsOfOrigin).not.toContainEqual([2, 0, -2]);
  });
  test("exceptions", () => {
    const invalidCoord = [1, 1, 1];

    expect(() => H.neighborsOf(invalidCoord)).toThrow();
  });
});

describe("isNeighborOf()", () => {
  test("basic usage", () => {
    const origin = [0, 0, 0];
    const isNeighborOfOrigin = H.isNeighborOf(origin);

    const neighbor = [1, 0, -1];
    const nonNeighbor = [2, 0, -2];

    expect(isNeighborOfOrigin(neighbor)).toBeTruthy();
    expect(isNeighborOfOrigin(nonNeighbor)).not.toBeTruthy();
  });
  test("exceptions", () => {
    const validCoord = [0, 0, 0];
    const invalidCoord = [1, 1, 1];

    expect(() => H.isNeighborOf(invalidCoord)).toThrow();
    expect(() => H.isNeighborOf(validCoord)(invalidCoord)).toThrow();
  });
});
