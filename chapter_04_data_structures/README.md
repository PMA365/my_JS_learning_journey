# DATA STRUCTURES: OBJECTS AND ARRAYS

array and is written as a list of values between square brackets, separated by commas.

```js
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[2 - 1]); // → 3
```

Almost all JavaScript values have properties. The exceptions are null and undefined

```js

Almost all JavaScript values have properties. The exceptions are null and undefined
```

**Note**
The two main ways to access properties in JavaScript are with a dot and with square brackets

```js
value.x;
value[x];
```

If you want to access a property named 2 or John Doe, you must use square brackets:

```js
value[2]
value[“John Doe”]
```

Just like strings, arrays have a **length** property that tells us how many elements the array has.

---

#### Methods

```js
let doh = "Doh";
console.log(typeof doh.toUpperCase); // → function
console.log(doh.toUpperCase());
// → DOH
```

Interestingly, even though the call to toUpperCase does not pass any arguments, the function somehow has access to the string “Doh”, the value whose property we called

You’ll find out how this works in Chapter 6.

Properties that contain functions are generally called methods of the value they belong to, as in “toUpperCase is a method of a string.”

<br>
<br>

Two methods you can use to manipulate arrays:

```js
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5] console.log(sequence.pop()); // → 5 console.log(sequence);
// → [1, 2, 3, 4]
```

---

#### Objects

you can’t write n => {prop: n}, since the braces will be interpreted as a function body. Instead, you have to put a set of parentheses around the object to make it clear that it is an expression.

```js
// for just retruning obj we should use braces before after the object
const createObj = () => ({
	prop: "1234",
});
// or
const createObj2 = () => {
	return {
		prop: "1234",
	};
};

console.log(createObj().prop); // 1234
console.log(createObj2().prop); // 1234
```

<br>
<br>

for knowing if a property exist in the object we should use **in** insted of **dot**

```js
let anObject = { left: 1, right: 2 };
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
```

To find out what properties an object has:

```js
let myCustomObj = {
	id: "256",
	name: "Bahador",
	loc: "Persia",
};

console.log(Object.keys(myCustomObj)); // [ 'id', 'name', 'loc' ]
```

There’s an Object.assign function that copies all properties from one object into another

```js
let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA);
// → {a: 1, b: 3, c: 4}
```

array doesn’t care what type each element is , it just stores values.

```js
//array doesn’t care what type each element is , it just stores values.
const mixedArray = [
	"Hello", // string
	42, // number
	true, // boolean
	{ name: "Amir" }, // object
	[1, 2, 3], // array
	null, // null
	undefined, // undefined
];

console.log(mixedArray); // [ 'Hello', 42, true, { name: 'Amir' }, [ 1, 2, 3 ], null, undefined ]
```

---

#### Mutability

We saw that object values can be modified. The types of values discussed in earlier chapters, such as numbers, strings, and Booleans, are all immutable— it is impossible to change values of those types. You can combine them and derive new values from them, but when you take a specific string value, that value will always remain the same. The text inside it cannot be changed. If you have a string that contains “cat”, it is not possible for other code to change a character in your string to make it spell “rat”.

```js
let str = "cat";
str = "rat";
```

Step by step:

"cat" is created in memory (immutable).

str points to "cat".

"rat" is created in memory (also immutable).

str is reassigned to point to "rat".

so
The original "cat" never changed.
It’s still "cat" forever.

Only the variable changed.

You cannot change the inside of a string.
You can only replace the whole value with a new string

"cat" will always stay "cat" for its entire lifetime.
No code can turn it into "rat".

##### So

##### ⭐ All primitive values in JavaScript are immutable.

string

number

boolean

null

undefined

symbol

bigint

<br>
<br>

Comparing different objects will return false, even if they have identical properties. There is no “deep” comparison operation built into Java-Script that compares objects by contents

```js
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };
console.log(object1 == object2); // → true
console.log(object1 == object3); // → false

object1.value = 15;
console.log(object2.value); // → 15 console.log(object3.value); // → 10
```

a **const** binding to an object can itself not be changed and will continue to point at the same object, the contents of that object might change

```js
const score = { visitors: 0, home: 0 }; // This is OK
score.visitors = 1;
// This isn't allowed
score = { visitors: 1, home: 1 };
```

#### The Lycanthrope’s Log

#### Array Loops

When a for loop uses the word of after its variable definition, it will loop over the elements of the value given after of. This works not only for arrays but also for strings and some other data structures. We’ll discuss how it works in Chapter 6.

```js
for (let i = 0; i < JOURNAL.length; i++) {
	let entry = JOURNAL[i];
	// Do something with entry
}

for (let entry of JOURNAL) {
	console.log(`${entry.events.length} events.`);
}
```

#### Further Arrayology

We saw push and pop, which add and remove elements at the end of an array, earlier in this chapter.
The corresponding methods for adding and removing things at the start of an array are called unshift and shift

```js
let todoList = [];
function remember(task) {
	todoList.push(task);
}
function getTask() {
	return todoList.shift();
}
function rememberUrgently(task) {
	todoList.unshift(task);
}
```

---

indexOf()
lastIndexOf()

```js
console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); // → 3
```

**Note**
Both indexOf and lastIndexOf take an optional second argument that indicates where to start searching.

```js
console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); // → 3
```

**Note**
lastIndexOf(value, fromIndex) works like this
It starts searching backward from the index you give it.
It stops when it finds the first match going backward

---

slice(2, 4)
The start index is inclusive and the end index is exclusive

```js
console.log([0, 1, 2, 3, 4].slice(2, 4)); // → [2, 3]
```

When the end index is not given, slice will take all of the elements after the start index. You can also omit the start index to copy the entire array.

```js
console.log([0, 1, 2, 3, 4].slice(2)); // → [2, 3, 4]
```

concat()

```js
let array1 = [1, 3, 4, 5];
console.log(array1.concat(66, 77));
```

**Note**
we can use both indexOf() and slice() on String and array with 1 important difference :
⭐ The key difference
✔️ String.indexOf()
Can search for substrings (multiple characters).

✔️ Array.indexOf()
Can search only for one element (one item), not a sequence.

```js
console.log("one two three".indexOf("ee")); // 11

[1, 2, 3, 2].indexOf([2, 3]); // ❌ always -1
```

---

The trim method removes whitespace

```js
console.log("  okay \n ".trim()); // → okay
```

padStart and takes the desired length and padding character as arguments.

```js
console.log(String("A").padStart(3, "0")); // 00A
console.log(String(6).padStart(3, "0")); // 006
```

.split() .join()

```js
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"] console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping
```

.repeat()

```js
console.log("LA".repeat(3)); // → LALALA
```

using [] for accessing specefic char at that index of string just like the arrays

```js
let string = "abc";
console.log(string[1]);
// → b
```

### rest parameter

```js
function max(...numbers) {
	let result = -Infinity;
	for (let number of numbers) {
		if (number > result) result = number;
	}
	return result;
}
console.log(max(4, 1, 9, -2));
// → 9

let numbers = [5, 1, 7];
console.log(max(...numbers));

// this will not work bc the input variable of function will be this [ [ 5, 1, 7 ] ]
// and not this  [ 5, 1, 7 ] so the for loop cant work on only 1 item
console.log(max(numbers));

// This ...rest parameter works even in array
let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);

// This ...rest parameter works even in curly brace objects
let coordinates = { x: 10, y: 0 };
console.log({ ...coordinates, y: 5, z: 1 });
```

#### The Math Object

Math.max (maximum), Math.min (minimum), and Math.sqrt (square root).

For example, it’s not unlikely you’ll want to name something max in one of your programs. Since JavaScript’s built-in max function is tucked safely inside the Math object, you don’t have to worry about overwriting it.
Many languages will stop you, or at least warn you, when you are defining a binding with a name that is already taken. JavaScript does this

for bindings you declared with let or const but—perversely—not for standard bindings nor for bindings declared with var or function.

Math also have these methods too:
cos (cosine), sin (sine), and tan (tangent)
Math.random => pseudorandom number between 0 (inclusive) and 1 (exclusive)
Math.PI = π (pi) 3.141592653589793

If we want a whole random number instead of a fractional one, we can use Math.floor (which rounds down to the nearest whole number) on
the result of Math.random.

```js
console.log(Math.floor(Math.random() * 10)); // → 2
```

There are also the functions Math.ceil (for “ceiling,” which rounds up to a whole number), Math.round (to the nearest whole number), and Math.abs, which takes the absolute value of a number, meaning it negates negative values but leaves positive ones as they are.

```js
Math.ceil; // (for “ceiling,” which rounds up to a whole number),
Math.abs; //meaning it negates negative values
```

---

#### Destructuring

for better readability
in js we can convert this

```js
function phi(table) {
	return (
		(table[3] * table[0] - table[2] * table[1]) /
		Math.sqrt(
			(table[2] + table[3]) *
				(table[0] + table[1]) *
				(table[1] + table[3]) *
				(table[0] + table[2])
		)
	);
}
```

to this:

```js
function phi([n00, n01, n10, n11]) {
	return (
		(n11 * n00 - n10 * n01) /
		Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10))
	);
}
```
