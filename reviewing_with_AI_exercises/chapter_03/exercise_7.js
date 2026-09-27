// Write a function called myFilter that takes an array and a predicate function as arguments. It should return a new array containing only the elements for which the predicate returns true.

// Do not use the built-in Array.filter method - implement it yourself using a loop.

// Example:

// const numbers = [1, 2, 3, 4, 5];
// const evens = myFilter(numbers, n => n % 2 === 0);
// evens should be [2, 4]

function myFilter(inputArray, inputFunction) {
	let outputArray = [];
	for (let member of inputArray) {
		if (inputFunction(member)) {
			outputArray.push(member);
		}
	}
	return outputArray;
}
const numbers = [1, 2, 3, 4, 5];
const isEven = (n) => n % 2 === 0;
console.log(myFilter(numbers, isEven));
