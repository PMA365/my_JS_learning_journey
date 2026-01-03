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