// ------------------------------------------------------------
// 10. BINARY SEARCH
// ------------------------------------------------------------
// Write a recursive function binarySearch(arr, target) that returns the index
// of the target or -1 if not found.
// Example: binarySearch([1, 3, 5, 7, 9], 7) -> 3

function binarySearch(arr, target, index = 0) {
	// your code here
	if (index === arr.length) {
		return -1;
	}
	if (arr[index] == target) {
		return index;
	}
	return binarySearch(arr, target, index + 1);
}
console.log(binarySearch([1, 3, 5, 7, 9], 7)); // 3
console.log(binarySearch([1, 3, 5, 7, 9], 8)); // -1
