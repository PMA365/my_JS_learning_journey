// ------------------------------------------------------------
// 6. CHECK IF ARRAY IS SORTED
// ------------------------------------------------------------
// Write a recursive function isSorted(arr) that returns true if the array
// is sorted in ascending order.
// Example: isSorted([1, 2, 3, 4]) -> true

function isSorted(arr, index = 0) {
	// your code here
	if (index == arr.length) return true;
	if (arr[index] > arr[index + 1]) return false;

	return isSorted(arr, index + 1);
}
console.log(isSorted([1, 2, 3, 4]));

// ---
