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

---

Global binding :
For bindings defined outside of any function, block,
or module (see Chapter 10), the scope is the whole program—you can refer to such bindings wherever you want. These are called global.

```js
let x = 10; // Global
if (true) {
	let y = 20; // Local to block
	var z = 30; // Also global
}

const halve = function (n) {
	return n / 2;
};
let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10
```

Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. This approach to binding visibility is called **lexical scoping**

---

function is still just a regular binding and can, if not constant, be assigned a new value, like so:
require a semicolon ; after the function

```js
let launchMissiles = function () {
	missileSystem.launch("now");
};
if (safeMode) {
	launchMissiles = function () {
		/* do nothing */
	};
}
```

function declaration

There is a slightly shorter way to create a function binding. When the function keyword is used at the start of a statement, it works differently.

```js
function square(x) {
	return x * x;
}
```

tip:

```js
console.log("The future says:", future());
function future() {
	return "You'll never have flying cars";
}
```

in this way the function conceptually moved to top of their scope and can be used by all the code in that scope

---

Arrow Functions

```js
const roundTo = (n, step) => {
	let remainder = n % step;
	return n - remainder + (remainder < step / 2 ? 0 : step);
};
```

It expresses something like :

##### “this input (the parameters) produces => this result (the body).”

tip: >= is not equel to =>

When there is only one parameter name, you can omit the parentheses around the parameter list

```js
//prettier-ignore
const square2 = x => x * x;
```

If the body is a single expression rather than a block in braces, that expression will be returned from the function.
That means these two definitions of square do the same thing:

```js
const square1 = (x) => {
	return x * x;
};
const square2 = (x) => x * x;
```

When an arrow function has no parameters at all, its parameter list is just an empty set of parentheses.

```js
const horn = () => {
	console.log("Toot");
};
```

---

### The Call Stack
