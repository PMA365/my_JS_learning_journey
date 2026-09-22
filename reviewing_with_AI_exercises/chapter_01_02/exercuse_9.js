// EXERCISE 9: OBJECT PROPERTIES
// Task: Write a function that calculates the sum of an array of numbers.
function totalSum(inputArray) {
	let total = 0;
	for (let i = 0; i < inputArray.length; i++) {
		total += inputArray[i];
	}
	return total;
}
let array = [1, 2, 3, 4];
console.log(totalSum(array));

// AI solution
function sum(numbers) {
	let total = 0;
	for (let n of numbers) {
		total += n;
	}
	return total;
}
