# Hexda
[![npm](https://img.shields.io/npm/v/hexda.svg)](https://www.npmjs.com/package/hexda)
![node](https://img.shields.io/node/v/hexda.svg)
![npm](https://img.shields.io/npm/l/hexda.svg)
![npm](https://img.shields.io/npm/dt/hexda.svg)
![Travis](https://img.shields.io/travis/json2d/hexda.svg)
![Coveralls github](https://img.shields.io/coveralls/github/json2d/hexda.svg)

## `⬢ → *` 

A mathy Javacript utility library for working with hexagon grids functionally

# Getting started

Install via `yarn` or `npm`:

```
yarn add hexda
```
```
npm install hexda
```

### CJS

```javascript
const H = require('hexda')
```

### ES6

```javascript
import H from 'hexda'
```

# API

### `H.neighborsOf(center)([grid])`
#### `Coord → * → [Coord]`

Creates a function that returns an array of cube coordinates that are neighbors to `coord`.

##### Parameters

- `center (Coord)`: The source cube coordinate.
- `[grid] (Hexagon[])`: the target sparse finite grid of hexagons, default is an infinite grid of hexagons
##### Returns
- `([Coord])`: Returns an array of cube coordinates for neighbors.

##### Examples

```js
const origin = [0, 0, 0];

H.neighborsOf(origin)();
// => 
// [
//  [1, 0, -1],
//  [-1, 0, 1],
//  [0, 1, -1],
//  [0, -1, 1],
//  [1, -1, 0],
//  [-1, 1, 0]
//]
```

### `H.isNeighborOf(centerA)(centerB)`
#### `Coord → Coord → Boolean`

Creates a predicate function that evaluates if `centerB` is a neighbor of `centerA`.

##### Parameters

- `centerA (Coord)`: The source cube coordinate.
- `centerB (Coord)`: The target cube coordinate.

##### Returns
- `(Boolean)`: Returns `true` if neighbors, else `false`.

##### Examples

```js
const homer = [0, 0, 0];
const flanders = [1, 0, -1];

H.isNeighborOf(homer)(flanders);
// => true

const patty = [10, -5, -5];

H.isNeighborOf(homer)(patty);
// => false

const selma = patty;
H.isNeighborOf(patty)(selma);
// => false
```

### `H.cornersOf(center)()`
#### `Coord → * → Coord[]`

Creates a function that returns the corners of a source hexagon
##### Parameters

- `center (Coord)`: The cube coordinate of the center point of the source hexagon.

##### Returns
- `(Coord[])`: Returns an array of cube coordinates of corner points of the source hexagon.

##### Examples

```js
const origin = [0, 0, 0];

H.cornersOf(origin)();
// => 
//[ 
//   [ 0.3333333333333333, 0.3333333333333333, -0.6666666666666666 ],
//   [ -0.3333333333333333, 0.6666666666666666, -0.3333333333333333 ],
//   [ -0.6666666666666666, 0.3333333333333333, 0.3333333333333333 ],
//   [ -0.3333333333333333, 0.6666666666666666, -0.3333333333333333 ],
//   [ 0.3333333333333333, 0.3333333333333333, -0.6666666666666666 ],
//   [ -0.3333333333333333, 0.6666666666666666, -0.3333333333333333 ] 
// ]
```

### `H.edgesOf(center)()` [aliases: `H.boundaryOf`]
#### `Coord → * → Edges[]`

Creates a function that returns the edges of a source hexagon
##### Parameters

- `center (Coord)`: The cube coordinate of the center point of the source hexagon.

##### Returns
- `(Edge[])`: Returns an array of corner point pairs representing the edges of the source hexagon.

##### Examples

```js
const origin = [0, 0, 0];

H.edgesOf(origin)();
// => 
// [ 
//   [ 
//     [ 0.3333333333333333, 0.3333333333333333, -0.6666666666666666 ],
//     [ -0.3333333333333333, 0.6666666666666666, -0.3333333333333333 ] 
//   ],
//   [ 
//     [ -0.3333333333333333, 0.6666666666666666, -0.3333333333333333 ],
//     [ -0.6666666666666666, 0.3333333333333333, 0.3333333333333333 ] 
//   ],
//   [ 
//     [ -0.6666666666666666, 0.3333333333333333, 0.3333333333333333 ],
//     [ -0.3333333333333333, 0.6666666666666666, -0.3333333333333333 ] 
//   ],
//   [ 
//     [ -0.3333333333333333, 0.6666666666666666, -0.3333333333333333 ],
//     [ 0.3333333333333333, 0.3333333333333333, -0.6666666666666666 ] 
//   ],
//   [ 
//     [ 0.3333333333333333, 0.3333333333333333, -0.6666666666666666 ],
//     [ -0.3333333333333333, 0.6666666666666666, -0.3333333333333333 ] 
//   ],
//   [ 
//     [ -0.3333333333333333, 0.6666666666666666, -0.3333333333333333 ],
//     [ 0.3333333333333333, 0.3333333333333333, -0.6666666666666666 ] 
//   ]
// ]
```

### `H.edgesOfEvery(centers)()`
#### `Coord[] → * → Edges[]`

Creates a function that returns the edges of every source hexagon specified.
##### Parameters

- `centers (Coord[])`: The array of cube coordinate of the center point of every source hexagon.

##### Returns
- `(Edge[])`: Returns an array of corner point pairs representing the edges of every source hexagon.

##### Examples

```js
const origin = [0, 0, 0];

const originAndNeighbors = [
    origin,
    ...H.neighborsOf(origin)()
]

H.edgesOfEvery(originAndNeighbors)();
// => 
// [ 
//   [ 
//     [ 0.3333333333333333, 0.3333333333333333, -0.6666666666666666 ],
//     [ -0.3333333333333333, 0.6666666666666666, -0.3333333333333333 ] 
//   ],
//   [ 
//     [ -0.3333333333333333, 0.6666666666666666, -0.3333333333333333 ],
//     [ -0.6666666666666666, 0.3333333333333333, 0.3333333333333333 ] 
//   ],
//   [ 
//     [ -0.6666666666666666, 0.3333333333333333, 0.3333333333333333 ],
//     [ -0.3333333333333333, 0.6666666666666666, -0.3333333333333333 ] 
//   ],
//   [ 
//     [ -0.3333333333333333, 0.6666666666666666, -0.3333333333333333 ],
//     [ 0.3333333333333333, 0.3333333333333333, -0.6666666666666666 ] 
//   ],
//   [ 
//     [ 0.3333333333333333, 0.3333333333333333, -0.6666666666666666 ],
//     [ -0.3333333333333333, 0.6666666666666666, -0.3333333333333333 ] 
//   ],
//   [ 
//     [ -0.3333333333333333, 0.6666666666666666, -0.3333333333333333 ],
//     [ 0.3333333333333333, 0.3333333333333333, -0.6666666666666666 ] 
//   ]
//   ... 36 more edges (6 edges for each neighbor of origin)
// ]
```

Because neighbor hexagons share edges, it may be desireable to dedupe:

```js
const edges = H.edgesOfEvery(originAndNeighbors)();
const distinctEdges = _.distinct(edges)
```

You can also use the `distinct` option:
```js
const edges = H.edgesOfEvery(originAndNeighbors)({distinct: true});
```


### `H.boundaryEdgesOfEvery(centers)()`
#### `Coord[] → * → Edges[]`

Creates a function that returns the edges of the boundary of every source hexagon specified.
##### Parameters

- `centers (Coord[])`: The array of cube coordinate of the center point of every source hexagon.

##### Returns
- `(Edge[])`: Returns an array of corner point pairs representing the edges of the boundary of every source hexagon.

##### Examples

```js
const origin = [0, 0, 0];

const originAndNeighbors = [
    origin,
    ...H.neighborsOf(origin)()
]

H.boundaryEdgesOfEvery(originAndNeighbors)();
// => 
// [ 
//   ... 18 edges total (3 edges on boundary for each neighbor of origin)
// ]
```


