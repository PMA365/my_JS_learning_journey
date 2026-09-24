// Pure Functions

// A pure function is a function that:
// 1. Always returns the same result given the same arguments
// 2. Has no side effects (doesn't modify global state, doesn't print, doesn't read from I/O)

// Consider these two functions:

// function addOne(n) {
//   return n + 1;
// }

// function doubleAndAddOne(n) {
//   return n * 2 + 1;
// }

// Write a pure function called multiplyBy(factor) that returns a new function. The returned function should take a number and multiply it by the factor. For example:

// const triple = multiplyBy(3);
// triple(5); // → 15

function multiplyBy(factor) {
	return (newFun = function (number) {
		return factor * number;
	});
}
const triple = multiplyBy(3);
console.log(triple(5)); // → 15

// Write another pure function called maximum that takes an array of numbers and returns the largest one. Do not use Math.max - implement it yourself using a loop.
function maximum(inputArray) {
	let max = 0;
	for (let num of inputArray) {
		if (num > max) {
			max = num;
		}
	}
	return max;
}
let exampleArray = [1, 2, 4, 5, 15];
console.log(maximum(exampleArray));
