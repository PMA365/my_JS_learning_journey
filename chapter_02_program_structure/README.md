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
