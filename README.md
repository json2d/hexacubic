# hexacubic
[![npm](https://img.shields.io/npm/v/hexacubic.svg)](https://www.npmjs.com/package/hexacubic)
![node](https://img.shields.io/node/v/hexacubic.svg)
![npm](https://img.shields.io/npm/l/hexacubic.svg)
![npm](https://img.shields.io/npm/dt/hexacubic.svg)
![Travis](https://img.shields.io/travis/json2d/hexacubic.svg)
![Coveralls github](https://img.shields.io/coveralls/github/json2d/hexacubic.svg)

## `⬢ → * → ⬡` 

A mathy Javacript utility library for working with hexacubic grids functionally

# Getting started

Install via `yarn` or `npm`:

```
yarn add hexacubic
```
```
npm install hexacubic -S
```

### CJS

```javascript
const H = require('hexacubic')
```

### ES6

```javascript
import H from 'hexacubic'
```

# API

### `H.centerToNeighbors(hexacube)`
#### `Point → [Point]`

Takes a hexacube center point and returns an array of center points of its neighbor hexacubes.

##### Parameters

- `hexacube (Point)`: The center point of the hexacube.
##### Returns
- `([Point])`: Returns an array of center points of the neighbor hexacubes of the hexacube.

##### Examples

```js
const origin = [0, 0, 0];

H.centerToNeighbors(origin);
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

### `H.centerToCorners(hexacube)`
#### `Point → [Point]`

Takes a hexacube center point and returns its corner points.

##### Parameters

- `hexacube (Point)`: The center point of the hexacube.

##### Returns
- `([Point])`: Returns an array of corner points of the hexacube.

##### Examples

```js
const origin = [0, 0, 0];

H.centerToCorners(origin);
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

### `H.centerToEdges(hexacube)` [aliases: `H.centerToBounds`]
#### `Point → [Edge]`

Takes a hexacube center point and returns its edges.

##### Parameters

- `hexacube (Point)`: The center point of the hexacube.

##### Returns
- `([Edge])`: Returns an array of corner point pairs representing the edges of the hexacube.

##### Examples

```js
const origin = [0, 0, 0];

H.centerToEdges(origin);
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

### `H.centersToEdges(hexacubes)`
#### `[Point] → [Edge]`

Takes a set of hexacube center points returns all the edges. (deduped)

##### Parameters

- `hexacubes ([Point])`: The array of center points of the hexacubes.

##### Returns
- `([Edge])`: Returns an array of corner point pairs, or edges, of every hexacube.

##### Examples

```js
const origin = [0, 0, 0];

const originAndNeighbors = [
    origin,
    ...H.centerToNeighbors(origin)
]

H.centersToEdges(originAndNeighbors);
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

If you want all the edges with duplicates instead, use `flatMap` with `.centerToEdges()`:

```js
import _ from "lodash/fp"

const edges = _.flatMap(H.centerToEdges)(originAndNeighbors)
```


### `H.centersToBounds(hexacubes)`
#### `[Point] → [Edge]`

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
    ...H.centerToNeighbors(origin)
]

H.centersToBounds(originAndNeighbors);
// => 
// [ 
//   ... 18 edges total (3 edges on boundary for each neighbor of origin)
// ]
```

### `H.accumlateBounds(accumulator, edge, edgeIndex, edges)`

Accumlates an edge if it is a boundary edge with respect to a set of edges

```js
const edges = H.centersToEdges(hexacubes);
const bounds = edges.reduce(H.accumlateBounds);
```

### `H.toProjection(point)`
#### `Point → XY`

Projects a hexacubic point isometrically to a plane of view, where x-axis is the horizontal axis and y-axis and z-axis are the diagonal axis

```js
H.toProjection(origin)
// => [0, 0]

H.centerToCorners(origin)
  .map(_.compose(customTransform, H.toProjection))
  .map(([x,y]) => <Point x={x} y={y}/>)
// =>

const customProjectionOf = _.compose(customTransform, H.toProjection)

H.centerToEdges(origin)
  .map(edge => edge.map(customProjectionOf))
  .map(([[Ax,Ay],[Bx,By]]) => <Line Ax={Ax} Ay={Ay} Bx={Bx} By={By}/>)
// =>
```

### `H.toProjectionWith(options)(point)`
#### `Point → * → XY`

options:
- `size (Number)` - The projection scalar.
- `offset ([Number])` - The projection translated.

### `H.toMidpoint(points)`
#### `[Point] → Point`

Takes an array of hexacubic points and returns the midpoint, or median point.

```js

const origin = [0, 0, 0];
const neighborOfOrigin = [0, 1, -1];

H.toMidpoint([origin, neighborOfOrigin])
// => [0, .5, -.5]

const neighborsOfOrigin = H.centerToNeighbors(origin);
H.toMidpoint(neighborsOfNeighbor);
// => [0, 0, 0]

```

### `H.distanceFrom(hexacubeA)(hexacubeB)`
#### `Point → Point → Number`

Creates a function that calculates the distance of `hexacubeB` from `hexacubeA`.

```js

const origin = [0, 0, 0];
const neighborOfOrigin = [0, 1, -1];

H.distanceFrom(origin)(neighborOfOrigin)
// => 1

const distanceFromOrigin = H.distanceFrom(origin)
const elsewhere = [5, -5, 0]
distanceFromOrigin(elsewhere)
// => 5

```


