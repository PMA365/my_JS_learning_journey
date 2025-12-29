# Functions

#### Are there any other function syntaxes without braces?

JavaScript has only these three ways to define functions:

Function Declaration

```js
function f() {}
```

Function Expression const

```js
f = function () {};
```

Arrow Function

```js
// prettier-ignore
const square = x => x * x;
const square = (x) => x * x;
```

Arrow Function with Braces

```js
const square = (x) => {
	return x * x;
};
```
Functions that don’t have a return statement at all, such as makeNoise, similarly return undefined