# JavaScript Loops: `for...of` vs `for...in`

The for...of loop in JavaScript (introduced in ES6) is a modern, clean way to iterate over iterable objects—such as arrays, strings, Maps, Sets, and more.

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

### Note :

if we wanted to access the index of Iteration on the array and string we should do this :
If you wrote for (let [index, value] of customArray), JavaScript tries to destructure the individual numbers (1, 3, etc.) into two variables. Since a single number doesn't have two sub-items to unpack, it throws a type error.

```
for (let [index, value] of myArray.entries()) { /* ... */ }
const text = "hi";

for (let [index, char] of Array.from(text).entries()) {
    console.log(index, char);
}
```

but maps don't need that :
Maps do not need .entries() to get both pieces of data!

Maps are unique because they are already built of key-value pairs natively.
and they will destructure into two variables :))

```
const myMap = new Map([
    ["name", "Alice"],
    ["age", 25]
]);

// No .entries() needed here!
for (let [key, value] of myMap) {
    console.log(key, value);
}
```
