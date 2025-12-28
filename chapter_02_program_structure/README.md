# Important Notes

diffrence between the expression and statement in js

```
3 + 5 // → 8
"Amir" // → "Amir"
x * 10 // → some number
true && false // → false
myFunc(2, 3) // → return value of the function
```

✔ You can put expressions anywhere a value is expected

```
let x = 10;        // variable declaration statement
if (x > 5) { ... } // if statement
for (...) { ... }  // loop statement
return x;          // return statement
```

✔ Statements control the flow of the program
✔ They usually don’t produce a value (some do, but that’s advanced JS)

Statements exceptions that produce the value :

Function Declaration
✔ Yes (function object)

```
function foo(){}
```

The function itself is a value, but the statement doesn’t return it

Class Declaration
✔ Yes (class constructor)

```
class A {}
```

Same as functions: produces a value but not returned

If you can ask “What is its value?” → it’s an expression.
If you can ask “What does it do?” → it’s a statement.

---

If an expression corresponds to a sentence fragment, a JavaScript statement corresponds to a full sentence. A program is a list of statements.

The simplest kind of statement is an expression with a semicolon after it. This is a program:

```
1; !false;
```

---

#### Bindings

To catch and hold values, JavaScript provides a thing called a binding, or variable.

```
let caught = 5 * 5;
```

### JavaScript has two categories of values:

##### 1. Primitive values (numbers, strings, booleans, null, undefined, symbol, bigint)

Stored directly

Assigned by value

So here:

```js
let luigisDebt = 140;
```

luigisDebt simply holds the number 140 directly.

#### whats Symbol?

Symbols were never designed to be a security feature.
They were designed to be non‑colliding keys, not private keys.

Used in libraries/frameworks
Libraries use this to avoid conflicts with user-defined keys.

In a real library:

The library creates the Symbol inside its own module

The user never sees that Symbol

The user cannot reference it

The user cannot overwrite it

Library code (hidden from user):

```js
// inside the library file
const internalId = Symbol("internalId");

export function createUser(name) {
	return {
		name,
		[internalId]: 12345,
	};
}
```

User code (in another file):

```js
import { createUser } from "some-library";

const user = createUser("Amir");

// user tries this:
user[internalId] = "custom"; // ❌ ERROR — internalId is not defined
```

Even if the user writes:

```js
user[Symbol("internalId")] = "custom";
```

This creates a different property:

```js
Symbol("internalId") !== Symbol("internalId");
```

Why Libraries use Symbols instead of #private :

1.Private fields didn’t exist for most of JS history

2.Private fields only work inside classes

3.Libraries often use plain objects, not classes

Symbols allow hidden metadata without full privacy(so developer can inspect them for the debuging):
Object.getOwnPropertySymbols(obj)

```js
const sym = Object.getOwnPropertySymbols(user)[0]; // 0 catch first Symbole, 1 catch the second if exists and so on..
console.log(user[sym]); // 12345
```

4.Symbols work across modules(can be shared across multiple js files of library. But #private fields are per‑class, not per‑module they cant do that)

### whats bigInt?

You create a BigInt by:

adding n at the end → 123n

or using the constructor → BigInt("123")

❌ Mixing BigInt and Number (not allowed)

```js
10n + 5; // ❌ TypeError
```

You must convert:

```
10n + BigInt(5) // ✔️ 15n

Number(10n) + 5 // ✔️ 15

```

---

##### 2. Objects (arrays, functions, objects)

Stored by reference

Variables hold a reference to the object

Example:

```js
let obj = { debt: 140 };
Here, obj is a reference to an object.
```

---

### Binding Names

sequence of one or more letters. Digits can be part of binding names—catch22 is a valid name, for example—but the name must not start with a digit.

A binding name may include dollar signs ($) or underscores (\_) but no other punctuation or special characters

---

####The Environment

The collection of bindings and their values that exist at a given time is called the environment.

When a program starts up, this environment is not empty.
It always contains bindings that are part of the language standard, and most of the time, it also has bindings that provide ways to interact with the surrounding system.
For example, in a browser, there are functions to interact with the currently loaded website and to read mouse and keyboard input

#### functions

A lot of the values provided in the default environment have the type function

For example, in a browser environment, the binding prompt holds a function that shows a little dialog asking for user input. It is used like this:

```js
prompt("Enter passcode");
```

---

```
let theNumber = Number(prompt("Pick a number"));
```

The function Number converts a value to a number.

The Number.isNaN function is a standard JavaScript function that returns true only if the argument it is given is NaN

```js
Number.isNaN(theNumber);
```

```js
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
	console.log("Your number is the square root of " + theNumber * theNumber);
}
```

---

### for loops

```js
for (let number = 0; number <= 12; number = number + 2) {
	console.log(number);
}
```

The parentheses after a for keyword must contain two semicolons. The part before the first semicolon initializes the loop, **usually** by defining a binding.The second part is the expression that checks whether the loop must continue. The final part updates the state of the loop after every iteration. In most cases, this is shorter and clearer than a while construct.

why **usually** is used here?
Because the initialization part of a for loop does not have to define a variable.
It often does — but it’s not required.

✔️ the initialization can be anything (or even empty)
It can:

Assign to an existing variable

Call a function

Be empty

Contain multiple expressions

Or even be something unrelated to the loop counter

```js
let i = 5 for (i; i < 10; i++) { console.log(i) }

for (openConnection(); !connectionClosed(); readNextChunk()){
  processChunk();
}

let i = 0
for (; i < 10; i++) {
  console.log(i)
}

for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(i, j)
}

```

break → stops the loop entirely

continue → skips the rest of the current iteration and jumps to the next one

The break statement has the effect of immediately jumping out of the enclosing loop

```js
for (let current = 20; ; current = current + 1) {
	if (current % 7 == 0) {
		console.log(current);
		break;
	}
}
// → 21
```

The continue keyword is similar to break in that it influences the progress of a loop. When continue is encountered in a loop body, control jumps out of the body and continues with the loop’s next iteration.

```js
const users = ["amir", "", "sara", null, "john"];

for (let user of users) {
	if (!user) {
		continue; // skip empty or null entries
	}

	console.log("Valid user:", user);
}
```

---

### switch case

```js
switch (prompt("What is the weather like?")) {
	case "rainy":
		console.log("Remember to bring an umbrella.");
		break;
	case "sunny":
		console.log("Dress lightly.");
	case "cloudy":
		console.log("Go outside.");
		break;
	default:
		console.log("Unknown weather type!");
		break;
}
```

in this example bc we dont have break right after the "sunny"
it will continue to reach the break right after "Go outside."
and this is good bc we dont need to write the "Go outside."
another time for the "sunny" case.

---

### Comments

2 way of writing comments in js :

```js
// single line comment
/*
I first found this number scrawled on the back of an old notebook. Since then, it has often dropped by, showing up in phone numbers and the serial numbers of products that I've bought. It obviously likes me, so I've decided to keep it.
*/
```
