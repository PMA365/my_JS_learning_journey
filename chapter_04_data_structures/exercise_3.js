const arrayToList = (inputArray) => {
	let list = {};
	let i = 0;
	let rest = {};
	for (let i = inputArray.lenght - 1; i >= 0; i--) {
		list.rest = {};
		rest = { value: inputArray[i], rest: null };
	}
};
arrayToList([1, 2, 3]);
