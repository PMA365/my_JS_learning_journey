// EXERCISE 10: ARRAY MANIPULATION
// Task: Write a function that returns a new array containing only
// the even numbers from the given array.
function gatherEvenNumbers(inputArray) {
	let evenArray = [];
	for (let value of inputArray) {
		if (value % 2 == 0) {
			evenArray.push(value);
		}
	}
	return evenArray;
}
let customArray = [1, 3, 2, 5, 6];
console.log(gatherEvenNumbers(customArray));
