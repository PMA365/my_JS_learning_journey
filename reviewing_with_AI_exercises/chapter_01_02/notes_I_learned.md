# JavaScript Loops: `for...of` vs `for...in`

## The for...of loop in JavaScript (introduced in ES6) is a modern, clean way to iterate over iterable objects—such as arrays, strings, Maps, Sets, and more.

## 1. `for...of` Loop (Iterates over Values)

Used to iterate over iterable objects like Arrays, Strings, Maps, or Sets.

```javascript
const numbers = [10, 20, 30];

for (let n of numbers) {
	console.log(n);
}

// Output:
// 10
// 20
// 30
```

## 2. for...in Loop (Iterates over Keys/Property Names)

Used to iterate through the enumerable properties (keys) of a plain JavaScript object.

```javascript
const user = {
	name: "Alice",
	age: 25,
	role: "Developer",
};

for (let key in user) {
	console.log(key, ":", user[key]);
}

// Output:
// name : Alice
// age : 25
// role : Developer
```
