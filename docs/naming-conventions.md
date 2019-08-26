## Naming Convention

> "The hardest problem left in computer science is this thing we haven't really figured out the best name for yet." _- Programmers of the Future_

Here are some of the thoughts that went into deciding the naming conventions used in this library:

### Getting Started

Lets consider our function that takes a hexacube point and returns its corner points - here are two ways we can go:

```js
H.toCorners(hexacube) // imperative function name - eg. `mapStateToProp`
H.cornersOf(hexacube) // declarative function name - eg. `propsOfState`
```

Ok great, now we're faced with the question: should a function name be imperative or declarative?

Lets consider the example function name `propsOfState`: this name actually describes what the output is, not the process of creating the output.

But on the other hand, `propsOfState` might be considered and presumed to be the declarative shorthand of the imperative `getPropsOfState`.

In reality, declarative function names are pretty widely adopted in the wild and in many popular libraries - eg. Redux has `actionCreators` which are functions that return actions.

Its also somehwat common to name functions after the specific type of function it is - eg. `actionThunk`

##### Verbage vs Nounage

Another way the question of imperative vs declarative can be framed is to ask whether function names should be verbs or nouns.

When choosing a noun, it seems to make the most sense to choose a noun that describes a thing _that does something_ to imbue it that hint to the intuitution that this is a function - eg. `propsCreator` vs `propsOfState`

While our function name `cornersOf` isn't a noun of the type described above, it does have something else going on: 

It ends with a preposition! (`of`) 

With that there's the implication of a object of that preposition, and that appears to be that hint to our brain that this is a function, and that the object of that preposition is the argument.

### Plurality

Alot of times functions need to have pluralized variants, and so to will the names.

Some decent suffices and prefices are: `many`, `every`, `all`

`many` seems to be a good fit - here's how it gets applied to the imperative and declarative function names:

```js
H.cornersOfMany(hexacubes) // suffixed to declaratives
H.manyToCorners(hexacubes) // prefixed to imperatives 
```

Here the declarative version sounds a bit more natural, though both work atleast well enough.

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
H.toNeighbors(hexacube)
H.toNeighborsWith(options)(hexacube)

H.toEdges(hexacube)
H.toEdgesWith(options)(hexacube)

H.toBounds(hexacube)
H.toBoundsWith(options)(hexacube)

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
const toCustomProjection = H.toProjectionWith({orientation: H.orientations.POINTY, size: 3})
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

### Contextual Ambiguity

```js
H.toEdges(hexacube)
```

This implicit context becomes problematic when there are multiple things to can be mapped to edges:

```js
H.toEdges(centerOrCornerOrBounds)
```

Depending on the usecase, support for fuzzy typed input may or may not be possible. The alternative is to have individual functions for each thing and make the name explicitly state the thing:

```
H.cornerToEdges(point)
H.centerToEdges(point)
```

While obviously this makes those function names more verbose, but it also makes the pluralized variants names more precise without making them more verbose by letting us to replace the `many` prefix:

```
H.centersToEdges(points)
H.boundsToEdges(bounds)
```

Same with the declaratives:

```
H.edgesOfCenters(points)
H.edgesOfBounds(bounds)
```

It also solves the issue with the enhanced variants: (previously mentioned)

```
H.cornersOfWith(options)(point) // "of with" is not good ❌
H.cornersOfCenterWith(options)(point) // ✅
```

Usage with `map` also sounds more natural and no longer needs to rely on the collection name for inference from 

```js
points.map(H.toEdges) // the collection is not well-named to allow readers to infer input type
points.map(H.centerToEdges)
```

Overall the more explicit approach to naming does improve the readability of the code by reducing contextual ambiguity.

### Misc

Imperativeness also work ok for reducer functions:

```js
edges.reduce(H.accumulateBounds)
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

### A bit Deeper

Lets consider the most practically verbose function names I've encountered in the wild:

```js
mapStateToProps(state) // from React-Redux
```

Here's a breakdown of what each component is contributing our overall understanding of how the function behaves:
- `map` - a verb describing an process
- `state` - a noun object describing the input argument
- `to` - a preposition of the verb-object pair
- `props` - a noun object of the preposition describing the output argument

Indeed this function is telling us alot about how we should expect, including what kind of input it takes and what kind of output it generates.

This naming convention could perhaps (fanciely) be called __imperatively transformative__, in that it describes the transformation of an input into an output - the basis of what functions do.

If you take shorthands of this name, you can see how some of the information about the function's behavior becomes implicit:

```js
mapToProps(state) // still ok: the input is well-named in this example atleast
toProps(state) // still ok: the input is well-named in this example atleast

mapState(state) // hmm, map state to what now? ❌ 
mapProps(state) // still ok, but maybe a bit ambiguous whether `props` is the input or output

stateToProps(state) // still ok: the preposition `to` makes this imperative, so we dont need `map` for that
```

Quite similar to how a well-named parameter can hint what the input should be, so can calling function with a named scope - eg. with functions from static classes

```js
State.toProps(state) // ok: state to props, got it.
```

Context can be luckily derived from certain situations, but not always.

```js
states.map(toProps)
```

...