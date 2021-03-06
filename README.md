# Hexda
[![npm](https://img.shields.io/npm/v/hexda.svg)](https://www.npmjs.com/package/hexda)
![node](https://img.shields.io/node/v/hexda.svg)
![npm](https://img.shields.io/npm/l/hexda.svg)
![npm](https://img.shields.io/npm/dt/hexda.svg)
![Travis](https://img.shields.io/travis/json2d/hexda.svg)
![Coveralls github](https://img.shields.io/coveralls/github/json2d/hexda.svg)

## `⬢ → *` 

A functional Javacript utility library for working with hexagon grids

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

### `H.neighborsOf(coord)()`
#### `Tuple → * → [Tuple]`

Creates a function that returns an array of cube coordinates that are neighbors to `coord`.

##### Parameters

- `coord (Tuple)`: The source cube coordinate.

##### Returns
- `([Tuple])`: Returns an array of cube coordinates for neighbors.

##### Examples

```js
const origin = [0, 0, 0];

H.neighborsOf(origin)();
// => [
//  [1, 0, -1],
//  [-1, 0, 1],
//  [0, 1, -1],
//  [0, -1, 1],
//  [1, -1, 0],
//  [-1, 1, 0]
//]
```

### `H.isNeighborOf(coordA)(coordB)`
#### `Tuple → Tuple → Boolean`

Creates a predicate function that evaluates if `coordB` is a neighbor of `coordA`.

##### Parameters

- `coordA (Tuple)`: The source cube coordinate.
- `coordB (Tuple)`: The target cube coordinate.

##### Returns
- `(Boolean)`: Returns `true` if neighbors, else `false`.

##### Examples

```js
const homer = [0, 0, 0];
const flanders = [1, 0, -1];

H.isNeighborOf(homer)(flanders);
// => true
```
