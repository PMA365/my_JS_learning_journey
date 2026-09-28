// ====================================================================
// EXERCISE 1: SUM OF A RANGE
// ====================================================================

// Write a range function that takes two arguments, start and end, and
// returns an array containing all the numbers from start up to and
// including end.

// Write a sum function that takes an array of numbers and returns
// the sum of these numbers.

// Run this example and verify it returns 55:

//   console.log(sum(range(1, 10)));  // → 55

// As a bonus, modify range to take an optional third argument "step"
// that indicates the "step" value used when building the array.
// If no step is given, elements go up by one (old behavior).
// The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].

// Make sure this also works with negative step values so that
// range(5, 2, -1) produces [5, 4, 3, 2].

function range(x, y ) {
	let outputArray = [];
	for (let i = x; i <= y; i++) {
		outputArray.push(i);
	}
	return outputArray;
}

function sum(inputArray) {
	let total = 0;
	for (n of inputArray) {
		total += n;
	}
	return total;
}
console.log(sum(range(1, 10)));
