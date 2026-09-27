// Higher-Order: map

// Write a function called myMap that takes an array and a function as arguments. It should return a new array containing the results of applying the function to each element of the original array.

// Do not use the built-in Array.map method - implement it yourself using a loop.

function myMap(inputArray, inputFunction) {
	let outputArray = [];
	for (let member of inputArray) {
		outputArray.push(inputFunction(member));
	}
	return outputArray;
}

const numbers = [1, 2];

const double = (num) => num * 2;

console.log(myMap(numbers, double));
