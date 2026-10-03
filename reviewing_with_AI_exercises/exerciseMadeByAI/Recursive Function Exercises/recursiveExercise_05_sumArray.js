// ------------------------------------------------------------
// 3. SUM OF ARRAY
// ------------------------------------------------------------
// Write a recursive function sumArray(arr) that adds all numbers in an array.
// Example: sumArray([1, 2, 3, 4]) -> 10

function sumArray(arr, sum = 0, index = 0) {
	// your code here
	if (index == arr.length) {
		return sum;
	}
	sum += arr[index];
	return sumArray(arr, sum, index + 1);
}
console.log(sumArray([1, 2, 3, 4])); // 10
