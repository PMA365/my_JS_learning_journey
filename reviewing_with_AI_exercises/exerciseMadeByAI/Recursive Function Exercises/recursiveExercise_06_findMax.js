// ------------------------------------------------------------
// 4. MAX NUMBER IN ARRAY
// ------------------------------------------------------------
// Write a recursive function findMax(arr) that returns the largest number.
// Example: findMax([3, 9, 1, 7]) -> 9

function findMax(arr, max = arr[0], index = 1) {
	// your code here
	if (index == arr.length) {
		return max;
	}
	max = arr[index] >= max ? (max = arr[index]) : max;
	return findMax(arr, max, index + 1);
}
console.log(findMax([3, 9, 1, 7]));
