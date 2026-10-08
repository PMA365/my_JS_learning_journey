// idk what is the real world usage of writing functions like this?
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

//

function repeat(n, action) {
	for (let i = 0; i < n; i++) {
		action(i);
	}
}
function unless(test, then) {
	if (!test) then();
}
repeat(3, (n) => {
	unless(n % 2 == 1, () => {
		console.log(n, "is even");
	});
});
// → 0 is even
// → 2 is even

["A", "B"].forEach((l) => console.log(l)); // → A

let SCRIPTS = [
	{
		name: "Coptic",
		ranges: [
			[994, 1008],
			[11392, 11508],
			[11513, 11520],
		],
		direction: "rtl",
		year: -200,
		living: false,
		link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
	},
	{
		name: "Coptic2",
		ranges: [
			[994, 1000],
			[11392, 11508],
			[11513, 11520],
		],
		direction: "rtl",
		year: -200,
		living: false,
		link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
	},
	{
		name: "Coptic3",
		ranges: [
			[700, 1000],
			[11392, 11508],
			[11513, 11520],
		],
		direction: "rtl",
		year: -200,
		living: false,
		link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
	},
];
// example of how the filter (standard array method) works
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

function reduce(array, combine, start) {
	let current = start;
	for (let element of array) {
		current = combine(current, element);
	}
	return current;
}
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0)); // → 10
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 20)); // → 30

// The standard array method reduce, which of course corresponds to this function,
//  has an added convenience. If your array contains at least one element, you are allowed to leave off the start argument. The method will take the first element of the array as its start value and start reducing at the second element.
// reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
// reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
console.log("real reduce");
// without starting value
console.log([1, 2, 3, 4].reduce((a, b) => a + b)); // → 10
//with starting value my tests hahaha
// in the begining the a is just our starting value 3 and the b should be the first value of the array means 2
console.log([1, 2, 3, 4].reduce((a, b) => a + b, 2)); // → 12
console.log(
	[1, 2, 3, 4].reduce((a, b) => {
		// in the begining the a is just our starting value 3 and the b should be the first value of the array means 1
		return a + b;
	}, 3)
); // → 13

function characterCount(script) {
	return script.ranges.reduce((count, [from, to]) => {
		console.log(count);
		return count + (to - from);
	}, 0);
}
console.log(
	SCRIPTS.reduce((a, b) => {
		return characterCount(a) < characterCount(b) ? b : a;
	})
);
// now I know how twice reduce works in this example

//Composability
console.log("Composability");

let biggest = null;
for (let script of SCRIPTS) {
	if (biggest == null || characterCount(biggest) < characterCount(script)) {
		biggest = script;
	}
}

console.log(biggest);

console.log("pipeline");

function average(array) {
	return array.reduce((a, b) => a + b) / array.length;
}
//TypeError: Reduce of empty array with no initial value
console.log(
	Math.round(average(SCRIPTS.filter((s) => s.living).map((s) => s.year)))
);
// → 1165
console.log(
	Math.round(average(SCRIPTS.filter((s) => !s.living).map((s) => s.year)))
); // → 204
