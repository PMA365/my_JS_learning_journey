const arrayToList = (inputArray) => {
	let isOldObjectTurn = true;
	let oldObject = {};
	let newObject = {};
	for (let i = inputArray.length - 1; i >= 0; i--) {
		if (isOldObjectTurn) {
			if (i == inputArray.length - 1) {
				oldObject.value = inputArray[i];
				oldObject.rest = null;
			} else {
				oldObject.value = inputArray[i];
				oldObject.rest = newObject;
				newObject = {};
			}
			isOldObjectTurn = false;
		} else {
			newObject.value = inputArray[i];
			newObject.rest = oldObject;
			oldObject = {};
			isOldObjectTurn = true;
		}
	}
	return isOldObjectTurn ? newObject : oldObject;
};
let newList = arrayToList([1, 2, 3]);
console.log(newList);

const listToArray = (inputList) => {
	let array = [];
	const checkCurrentObjectRest = (inputObject) => {
		array[inputObject.value - 1] = inputObject.value;
		return inputObject.rest ? checkCurrentObjectRest(inputObject.rest) : array;
	};
	return checkCurrentObjectRest(inputList);
};
console.log(listToArray(newList));

const prepend = (inputElement, inputList) => {
	let newList = {};
	newList.value = inputElement;
	newList.rest = inputList;
	return newList;
};
console.log(prepend(0, newList));

const nth = (inputElementNumber, inputList) => {
	const searchingForTheElement = (inputList) => {
		if (inputElementNumber + 1 == inputList.value) {
			return inputList;
			//finished
		} else if (inputList.rest == null) {
			return undefined;
		} else {
			return searchingForTheElement(inputList.rest);
		}
	};
	return searchingForTheElement(inputList);
};
console.log(nth(1, newList));
