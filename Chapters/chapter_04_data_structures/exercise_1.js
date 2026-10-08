const range = (start, end, step = 1) => {
	let array = [];

	if (step < 0) step = step * -1;
	// !Amazing note:
	// if we right i < (end += 1) in for loop end condition every time it check if it
	// should end the for loop unfotunetly it add another +1 to the end
	// so the for loop end condition will never happen!
	// for (let i = start, j = 0; i < (end += 1); j++, i++) {
	// 	array[j] = i;
	// }
	for (
		let i = start, j = 0;
		start > end ? i >= end : i <= end;
		j++, start > end ? (i -= step) : (i += step)
	) {
		array[j] = i;
	}
	return array;
};
const sum = (inputArray) => {
	let total = 0;
	for (let element of inputArray) {
		total += element;
	}
	return total;
};
console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
