# Hexda
[![npm](https://img.shields.io/npm/v/hexda.svg)](https://www.npmjs.com/package/hexda)
![node](https://img.shields.io/node/v/hexda.svg)
![npm](https://img.shields.io/npm/l/hexda.svg)
![npm](https://img.shields.io/npm/dt/hexda.svg)
![Travis](https://img.shields.io/travis/json2d/hexda.svg)
![Coveralls github](https://img.shields.io/coveralls/github/json2d/hexda.svg)

## `⬢ → * → ⬡` 

A mathy Javacript utility library for working with hexacubic grids functionally

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

### `H.neighborsOf(hexacube)`
#### `Point → [Point]`

Takes a hexacube center point and returns an array of center points of its neighbor hexacubes.

##### Parameters

- `hexacube (Point)`: The center point of the hexacube.
##### Returns
- `([Point])`: Returns an array of center points of the neighbor hexacubes of the hexacube.

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

### `H.isNeighborOf(hexacubeA)(hexacubeB)`
#### `Point → Point → Boolean`

Creates a predicate function that evaluates if `hexacubeB` is a neighbor of `hexacubeA`.

##### Parameters

- `hexacubeA (Point)`: The center point of the source hexacube.
- `hexacubeB (Point)`: The center point of the target hexacube.

##### Returns
- `(Boolean)`: Returns `true` if source and target hexacubes are neighbors, else `false`.

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

### `H.cornersOf(hexacube)`
#### `Point → [Point]`

Takes a hexacube center point and returns its corner points.

##### Parameters

- `hexacube (Point)`: The center point of the hexacube.

##### Returns
- `([Point])`: Returns an array of corner points of the hexacube.

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

### `H.edgesOf(hexacube)` [aliases: `H.boundsOf`]
#### `Point → Edges[]`

Takes a hexacube center point and returns its edges.

##### Parameters

- `hexacube (Point)`: The center point of the hexacube.

##### Returns
- `([Edge])`: Returns an array of corner point pairs representing the edges of the hexacube.

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

### `H.edgesOfMany(hexacubes)`
#### `[Point] → [Edge]`

Takes a set of hexacube center points returns all the edges.

##### Parameters

- `hexacubes ([Point])`: The array of center points of the hexacubes.

##### Returns
- `([Edge])`: Returns an array of corner point pairs, or edges, of every hexacube.

##### Examples

```js
const origin = [0, 0, 0];

const originAndNeighbors = [
    origin,
    ...H.neighborsOf(origin)
]

H.edgesOfMany(originAndNeighbors);
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

Because neighbor hexacubes share edges, it may be desireable to dedupe:

```js
const _ = requre("lodash");

const edges = H.edgesOfMany(originAndNeighbors);
const dedupedEdges = _.uniqWith(edges, H.isEqualEdge)
```

more functionally:

```js
const _ = requre("lodash/fp");

const uniqEdge = _.uniqWith(H.isEqualEdge);

const dedupedEdges = _.compose(uniqEdge, H.edgesOfMany)(originAndNeighbors);    
```

### `H.boundsOfMany(hexacubes)`
#### `[Point] → Edges[]`

Takes a set of hexacube center points and returns the edges of its boundary.

##### Parameters

- `hexacubes ([Point])`: The array of the center points of the hexacubes.

##### Returns
- `([Edge])`: Returns an array of the edges of the boundary around the cluster(s) of hexacubes.

##### Examples

```js
const origin = [0, 0, 0];

const originAndNeighbors = [
    origin,
    ...H.neighborsOf(origin)
]

H.boundsOfMany(originAndNeighbors);
// => 
// [ 
//   ... 18 edges total (3 edges on boundary for each neighbor of origin)
// ]
```

### `H.accumlateBounds(accumulator, edge, edgeIndex, edges)`

Accumlates an edge if it is a boundary edge with respect to a set of edges

```js
const edges = H.edgesOfMany(hexacubes);
const bounds = edges.reduce(H.accumlateBounds);
```

### `H.projectionOf(point)

Projects a hexacubic point isometrically to a plane of view, where x-axis is the horizontal axis and y-axis and z-axis are the diagonal axis

```js
H.projectionOf(origin)
// => [0, 0]

H.cornersOf(origin)
  .map(_.compose(customTransform, H.projectionOf))
  .map(([x,y]) => <Point x={x} y={y}/>)
// =>

const customProjectionOf = _.compose(customTransform, H.projectionOf)

H.edgesOf(origin)
  .map(edge => edge.map(customProjectionOf))
  .map(([[Ax,Ay],[Bx,By]]) => <Line Ax={Ax} Ay={Ay} Bx={Bx} By={By}/>)
// =>
```

