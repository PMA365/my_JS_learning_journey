#### HIGHER-ORDER FUNCTIONS

functions are just values, we can pass our action as a function value.

```js
function repeat(n, action) {
	for (let i = 0; i < n; i++) {
		action(i);
	}
}
repeat(3, console.log);
// → 0
// → 1
// → 2
```

We don’t have to pass a predefined function to repeat. Often, it is easier to create a function value on the spot instead.

```js
function repeat(n, action) {
	for (let i = 0; i < n; i++) {
		action(i);
	}
}

let labels = [];
repeat(5, (i) => {
	labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]
```

**Higher-Order Functions** =
Functions that operate on other functions, either by taking them as arguments or by returning them

we can have functions that create new functions.

```js
function greaterThan(n) {
	return (m) => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
```

We can also have functions that change other functions.

```js
function noisy(f) {
	return (...args) => {
		console.log("calling with", args);
		let result = f(...args);
		console.log("called with", args, ", returned", result);
		return result;
	};
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1
```

There is a built-in array method, forEach, that provides something like a for/of loop as a higher-order function.

```js
["A", "B"].forEach((l) => console.log(l)); // → A
// → B
```

#### Filtering Arrays

```js
function filter(array, test) {
	let passed = [];
	for (let element of array) {
		if (test(element)) {
			passed.push(element);
		}
	}
	return passed;
}

console.log(filter(SCRIPTS, (script) => script.living)); // → [{name: "Adlam", ...}, ...]
```

#### Transforming with map

The map method transforms an array by applying a function to all of its elements and building a new array from the returned values. The new array will have the same length as the input array, but its content will have been mapped to a new form by the function.

```js
let SCRIPTS = {
	name: "Coptic",
	ranges: [
		[994, 1008],
		[11392, 11508],
		[11513, 11520],
	],
	direction: "ltr",
	year: -200,
	living: false,
	link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
};
function filter(array, test) {
	let passed = [];
	for (let element of array) {
		if (test(element)) {
			passed.push(element);
		}
	}
	return passed;
}

function map(array, transform) {
	let mapped = [];
	for (let element of array) {
		mapped.push(transform(element));
	}
	return mapped;
}
let rtlScripts = SCRIPTS.filter((s) => s.direction == "rtl");
console.log(map(rtlScripts, (s) => s.name));
// → ["Adlam", "Arabic", "Imperial Aramaic", ...]
```

#### Summarizing with reduce

```js
function reduce(array, combine, start) {
	let current = start;
	for (let element of array) {
		current = combine(current, element);
	}
	return current;
}
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0)); // → 10

console.log([1, 2, 3, 4].reduce((a, b) => a + b)); // → 10
```

The standard array method reduce, which of course corresponds to this function, has an added convenience. If your array contains at least one element, you are allowed to leave off the start argument. The method will take the first element of the array as its start value and start reducing at the second element.

```js
console.log([1, 2, 3, 4].reduce((a, b) => a + b)); // → 10
```
