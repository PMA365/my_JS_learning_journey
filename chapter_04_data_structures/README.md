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
