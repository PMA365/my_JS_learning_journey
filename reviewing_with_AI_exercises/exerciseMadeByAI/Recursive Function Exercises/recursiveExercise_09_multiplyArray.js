// ------------------------------------------------------------
// 8. MULTIPLY NUMBERS IN ARRAY
// ------------------------------------------------------------
// Write a recursive function multiplyArray(arr) that multiplies all numbers.
// Example: multiplyArray([1, 2, 3, 4]) -> 24

function multiplyArray(arr, index = 0) {
	// your code here
	if (index == arr.length) {
		return 1;
	}
	return arr[index] * multiplyArray(arr, index + 1);
}
console.log(multiplyArray([1, 2, 3, 4]));
