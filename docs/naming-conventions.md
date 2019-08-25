## Naming Convention

> "The hardest problem left in computer science is this thing we haven't figured out the best name for yet." - Future Programmers

Here are some thoughts on the naming conventions used in this library:

Lets consider the function that takes a hexacube point and returns its corner points - here's two ways we can go:

```js
H.toCorners(hexacube) // imperative function name - eg. `mapStateToProp`
H.cornersOf(hexacube) // declarative function name - eg. `propsOfState`
```

So the question becomes: should a function name be imperative or declarative?

Here the example function name `propsOfState` really describes what the output is, not the process of creating the output.

But on the other hand, `propsOfState` could be considered and presumed to be the declarative shorthand of the imperative `getPropsOfState`.

Declarative function names are pretty widely adopted in the wild and in many popular libraries - eg. Redux has `actionCreators` which are functions that return actions.

Its also common to name your function after the specific type of function it is - eg. `actionThunk`

Another way to frame the question of imperative vs declarative is to as should the name be a verb vs a noun?

When choosing a noun, it seems to make the most sense to choose a noun that describes a thing _that does something_ to imbue it that hint to the intuitution that this is a function - eg. `propsCreator` vs `propsOfState`

While our actual function name `cornersOf` isn't a noun of the type described above, it does have something else going on: it ends with a preposition! (`of`) With that there's the implication of a object of that preposition, and that appears to be that hint to our brain that this is a function, and that the object of that preposition is the argument.

### Plurality

Alot of times functions need to have pluralized variants, and so to will the names.

Some decent suffices and prefices are: `many`, `every`, `all`

`many` seems to be a good fit - here's how it gets applied to the imperative and declarative function names:

```js
H.cornersOfMany(hexacubes)
H.manyToCorners(hexacubes)
```

here the declarative version sounds a bit more natural, but both work well.

### Enhanceability

Alot of times, especially in functional programming where we'd like functions to be unary, functions need a variant that can be enhanced with options - the name also needs to enhanced, like with the suffix `with` :

```js
H.cornersOfWith(options)(hexacube) // uh...ok what happened here? ❌ 
H.cornersOfManyWith(options)(hexacubes)

H.toCornersWith(options)(hexacube)
H.manyToCornersWith(options)(hexacubes)
```

As we can see declarative `cornersOf` fumbles pretty badly with the suffix `with` attached. The problem stems from something mentioned earlier about `cornersOf`: it already ends with a preposition (`of`) and so adding a second one `with` after it is just no good and we just broke the English language.

There is a way to save it though: try adding something appropriate between the prepositions:

```js
H.cornersOfOneWith(options)(hexacube)
```

Meanwhile the imperatives with the `to` suffix are not breaking a sweat using the suffix `with`:

```js
H.toEdges(hexacube)
H.toEdgesWith(options)(hexacube)

H.toNeighbors(hexacube)
H.toNeighborsWith(options)(hexacube)

H.toProjection(hexacube)
H.toProjectionWith(options)(hexacube)

H.toXY(hexacube)
H.toXYWith(hexacube)
```

These imperative names also flows pretty with functors like `map`

```js
hexacubes.map(H.toProjection)
hexacubes.flatMap(H.toProjection)
```

Alternative prefixs like `get` and `map` just dont sound as good:

```js
hexacubes.map(H.mapProjection) // map map map map map
hexacubes.map(H.getProjection)
```

Having a consistent naming convention can be contagious!
```js
const toCustomProjection = H.toProjectionWith({orientation: H.constants.POINTY_HEXAGON, size: 3})
toCustomProjection(hexacube);
```

More examples that includes pluraization and enhancement

```js
H.manyToCornersWith(hexacubes)
H.manyToEdgesWith(options)(hexacubes)
H.manyToNeighborsWith(hexacubes)
H.manyToProjectionWith(options)(hexacubes)
```

Used in `map`:

```js
hexacubeWorlds.map(H.manyToCorners) // returns corners of many world
hexacubeWorlds.map(H.manyToCornersWith(options)) 
hexacubeWorlds.map(H.cornersOfMany) // ✅
hexacubeWorlds.map(H.cornersOfManyWith(options)) // ✅
```

### Misc

Imperativeness also work ok for reducer functions:

```js
edges.reduce(H.accumulateBoundaryEdges)
```

The best when a single verb does the job:

```js
H.translate(dx,dy,dz)(hexacube)
```

### Plain Bad

Nesting the pluralized and other special versions of the function might seem like a clever idea at first:

```js
H.cornersOf.every(hexacubes)
```

But at second glance its pretty weird and non-intuitive, and even more so because it wont show up well in autocomplete features for editors

...
