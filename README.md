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

### `H.neighborsOf(hexagon)`
#### `Coord → [Coord]`

Creates a function that returns an array of cube coordinates that are neighbors to `coord`.

##### Parameters

- `hexagon (Coord)`: The cube coordinate of the center point of the source hexagon.
##### Returns
- `([Coord])`: Returns an array of cube coordinates of the neighbor hexagons of the source hexagon.

##### Examples

```js
const origin = [0, 0, 0];

H.neighborsOf(origin);
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

### `H.isNeighborOf(hexagonA)(hexagonB)`
#### `Coord → Coord → Boolean`

Creates a predicate function that evaluates if `hexagonB` is a neighbor of `hexagonA`.

##### Parameters

- `hexagonA (Coord)`: The cube coordinate of the center point of the source hexagon.
- `hexagonB (Coord)`: The cube coordinate of the center point of the target hexagon.

##### Returns
- `(Boolean)`: Returns `true` if source and target hexagons are neighbors, else `false`.

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

### `H.cornersOf(hexagon)`
#### `Coord → Coord[]`

Creates a function that returns the corners of a source hexagon
##### Parameters

- `hexagon (Coord)`: The cube coordinate of the center point of the source hexagon.

##### Returns
- `(Coord[])`: Returns an array of cube coordinates of the corner points of the source hexagon.

##### Examples

```js
const origin = [0, 0, 0];

H.cornersOf(origin);
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

### `H.edgesOf(hexagon)` [aliases: `H.boundaryOf`]
#### `Coord → Edges[]`

Creates a function that returns the edges of a source hexagon
##### Parameters

- `hexagon (Coord)`: The cube coordinate of the center point of the source hexagon.

##### Returns
- `(Edge[])`: Returns an array of corner point pairs representing the edges of the source hexagon.

##### Examples

```js
const origin = [0, 0, 0];

H.edgesOf(origin);
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

### `H.edgesOfEvery(hexagons)`
#### `Coord[] → Edges[]`

Creates a function that returns the edges of every source hexagon specified.
##### Parameters

- `hexagons (Coord[])`: The array of cube coordinate of the center point of the source hexagons.

##### Returns
- `(Edge[])`: Returns an array of corner point pairs, or edges, of every source hexagon.

##### Examples

```js
const origin = [0, 0, 0];

const originAndNeighbors = [
    origin,
    ...H.neighborsOf(origin)
]

H.edgesOfEvery(originAndNeighbors);
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
const _ = requre("lodash");

const edges = H.edgesOfEvery(originAndNeighbors);
const dedupedEdges = _.uniqWith(edges, H.isEqualEdge)
```

more functionally:

```js
const _ = requre("lodash/fp");

const uniqEdge = _.uniqWith(H.isEqualEdge);

const dedupedEdges = _.compose(uniqEdge, H.edgesOfEvery)(originAndNeighbors);    
```

### `H.boundaryEdgesOfEvery(hexagons)`
#### `Coord[] → Edges[]`

Creates a function that returns the edges of the boundary of every source hexagon specified.
##### Parameters

- `hexagons (Coord[])`: The array of cube coordinate of the center point of every source hexagon.

##### Returns
- `(Edge[])`: Returns an array of the edges of the boundary around the cluster(s) of source hexagons.

##### Examples

```js
const origin = [0, 0, 0];

const originAndNeighbors = [
    origin,
    ...H.neighborsOf(origin)
]

H.boundaryEdgesOfEvery(originAndNeighbors);
// => 
// [ 
//   ... 18 edges total (3 edges on boundary for each neighbor of origin)
// ]
```


