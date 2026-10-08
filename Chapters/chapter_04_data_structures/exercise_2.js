const reverseArray = (inputArray) => {
	let newArray = [];
	let i = inputArray.length - 1;
	for (let element of inputArray) {
		newArray[i--] = element;
	}
	return newArray;
};
const reverseArrayInPlace = (inputArray) => {
	let newArray = [];
	let i = inputArray.length - 1;
	for (let element of inputArray) {
		newArray[i--] = element;
	}
	inputArray = newArray;
};
let array = [1, 2, 3, 4, 5];
console.log(reverseArray(array));
console.log(array);
