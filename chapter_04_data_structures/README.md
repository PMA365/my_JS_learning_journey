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