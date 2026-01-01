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

The place where the computer stores this context is the call stack.

Every time a function is called, the current context is stored on top of this stack. When a function returns, it removes the top context from the stack and uses that context to continue execution

Storing this stack requires space in the computer’s memory. When the stack grows too big, the computer will fail with a message like “out of stack space” or “too much recursion.”

### Optional Arguments

JavaScript is extremely broad-minded about the number of arguments you can pass to a function. If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters are assigned the value **undefined**.

```js
function square(x) {
	return x * x;
}
console.log(square(4, true, "hedgehog")); // → 16
```

<!-- missing parameters are assigned the value undefined -->

```js
function minus(a, b) {
	if (b === undefined) return -a;
	else return a - b;
}
console.log(minus(10));
// → -10
```

If you write an = operator after a parameter, followed by an expression, the value of that expression will replace the argument when it is not given(sth like default value for that parameter)

```js
function roundTo(n, step = 1) {
	let remainder = n % step;
	return n - remainder + (remainder < step / 2 ? 0 : step);
}
console.log(roundTo(4.5));
// → 5
console.log(roundTo(4.5, 2));
// → 4
```

### Closure

purpose of Closure existance :
This feature—being able to reference a specific instance of a local binding in an enclosing scope—is called closure

A function that references bindings from local scopes around it is called a closure.
OR
A closure is created when:
an inner function
keeps access to the variables of its outer function
even after the outer function has finished executing.

```js
function outer() {
	let count = 0;

	function inner() {
		count++;
		console.log(count);
	}

	return inner;
}

const fn = outer();
fn(); // 1
fn(); // 2
```

```js
function multiplier(factor) {
	return (number) => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
// → 10
```

---

### Recursion

A function that calls itself is called recursive

this power function, which does the same as the \*\* (exponentiation) operator

```js
function power(base, exponent) {
	if (exponent == 0) {
		return 1;
	} else {
		return base * power(base, exponent - 1);
	}
}
console.log(power(2, 3));
// → 8
// input (2,3)
// 2*power(2,2)
// power(2,2) = 2*power(2,1)
// power(2,1)= 2*power(2,0) = 2*1
// => 2*2*2*1
```
