// --------------------------------------------------------------------
// EXERCISE 2: REVERSE AN ARRAY
// ====================================================================

// Arrays have a reverse method that changes the array by inverting
// the order in which its elements appear.

// For this exercise, write two functions:

// 1. reverseArray: takes an array as its argument and produces a
//    new array that has the same elements in inverse order.

// 2. reverseArrayInPlace: modifies the array given as its argument
//    by reversing its elements (like the built-in reverse method).

// Neither may use the standard reverse method.

// Consider: which variant (new array vs in-place) is useful in more
// situations? Which one runs faster?

function reverseArray(inputArray) {
	let newArray = [];
	let index = inputArray.length;
	for (let n of inputArray) {
		newArray[(index -= 1)] = n;
	}
	return newArray;
}

function reverseArrayInPlace(inputArray) {
	let endPointer = inputArray.length;
	let memorize = 0;
	for (let [index, value] of inputArray.entries()) {
		if (index == Math.round(inputArray.length / 2)) {
			break;
		}
		memorize = inputArray[(endPointer -= 1)];
		inputArray[endPointer] = value;
		inputArray[index] = memorize;
	}
	return inputArray;
}

console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArrayInPlace([1, 2, 3, 4]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
// console.log(Math.round(5 / 2));

function calculateProcessTime(inputFunction) {
	return function (...args) {
		console.time("Operation Took");
		const result = inputFunction(...args);
		console.timeEnd("Operation Took");
		return result;
	};
}
const timedReverse = calculateProcessTime(reverseArray);
const timedReverseInPlace = calculateProcessTime(reverseArrayInPlace);
const result1 = timedReverse([1, 2, 3, 4]); //Operation Took: 0.032ms
const result2 = timedReverseInPlace([1, 2, 3, 4]); //Operation Took: 0.134ms
const massiveArray = Array.from({ length: 10000000 }, (_, index) => index);

console.log(`Array created with ${massiveArray.length} items!`);
const result3 = timedReverse(massiveArray); //Operation Took: 1.984s
const result4 = timedReverseInPlace(massiveArray); //Operation Took: 128.611ms

// SUMMERY :
// the reverseArrayInPlace is more than x6 times faster in big array data
// Operation Took: 1.984s
// Operation Took: 128.611ms
// but on small samples its lil slower

// In computer science, we talk about this using Trade-offs:
// On small data (like 1,000 items): The "overhead" (the extra code, the math checks, the iterators) takes up a higher percentage of the time, making the in-place approach slightly slower or unpredictable.
// On big data (like 10,000,000 items): The heavy lifting—allocating memory, creating new arrays, and forcing your computer's memory manager to clean up the mess later—becomes the massive bottleneck. By avoiding that memory allocation and cutting the loop in half, your optimized approach shines.
