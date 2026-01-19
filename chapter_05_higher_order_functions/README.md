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

---

There is a built-in array method, forEach, that provides something like a **for/of** loop as a higher-order function.

```js
["A", "B"].forEach((l) => console.log(l)); // → A
// → B
```

---

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
```

The example defined the function only to show what it does internally. From now on, we’ll
use it like this instead :

```js
console.log(filter(SCRIPTS, (script) => script.living)); // → [{name: "Adlam", ...}, ...]
```

Note how the filter function, rather than deleting elements from
the existing array, builds up a new array with only the elements that pass the test.
This function is **pure** ,It does not modify the array it is given

#### Transforming with map

The map method transforms an array by applying a function to all of its elements and building a **new array** from the returned values. The new array will have the same **length as the input array**, but its content will have been mapped to a new form by the function.

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

Like forEach and filter, map is a standard array method.

#### Summarizing with reduce

reduce (sometimes also called fold)

example of how reduce works :

```js
function reduce(array, combine, start) {
	let current = start;
	for (let element of array) {
		current = combine(current, element);
	}
	return current;
}
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0)); // → 10

// the real reduce array method
// The standard array method reduce, which of course corresponds to this function, has an added convenience. If your array contains at least one element, you are allowed to leave off the start argument.
console.log([1, 2, 3, 4].reduce((a, b) => a + b)); // → 10
```

The standard array method reduce, which of course corresponds to this function, has an added convenience. If your array contains at least one element, you are allowed to leave off the start argument. The method will take the first element of the array as its start value and start reducing at the second element.

```js
console.log([1, 2, 3, 4].reduce((a, b) => a + b)); // → 10
```

use reduce (twice)
idk how this work! haha
need to work on it when someday i can access internet

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
function characterCount(script) {
	return script.ranges.reduce((count, [from, to]) => {
		return count + (to - from);
	}, 0);
}
console.log(
	SCRIPTS.reduce((a, b) => {
		return characterCount(a) < characterCount(b) ? b : a;
	})
);
// → {name: "Han", ...}
```

#### Composability

```js
let biggest = null;
for (let script of SCRIPTS) {
	if (biggest == null || characterCount(biggest) < characterCount(script)) {
		biggest = script;
	}
}
console.log(biggest);
// → {name: "Han", ...}
```

idk why biggest == null used here ?
bc at the beginning thats null and for setting value to it
we need to do it in the for loop if we dont use that here
the characterCount(biggest) will throw TypeError: Cannot read properties of null (reading 'ranges')

```js
function average(array) {
	return array.reduce((a, b) => a + b) / array.length;
}
console.log(
	Math.round(average(SCRIPTS.filter((s) => s.living).map((s) => s.year)))
);
// → 1165
console.log(
	Math.round(average(SCRIPTS.filter((s) => !s.living).map((s) => s.year)))
); // → 204
```

```js
let total = 0,
	count = 0;
for (let script of SCRIPTS) {
	if (script.living) {
		total += script.year;
		count += 1;
	}
}
console.log(Math.round(total / count)); // → 1165
```

However, it is harder to see what was being computed and how. And because intermediate results aren’t represented as coherent values, it’d be a lot more work to extract something like average into a separate function.

You can usually afford the readable approach, but if you’re processing huge arrays and doing so many times, the less abstract style might be worth the extra speed.

---

#### Strings and Character Codes
