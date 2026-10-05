// ------------------------------------------------------------
// 9. NESTED ARRAY FLATTENING
// ------------------------------------------------------------
// Write a recursive function flatten(arr) that turns a nested array into one
// flat array.
// Example: flatten([1, [2, 3], [4, [5]]]) -> [1, 2, 3, 4, 5]

function flatten(arr, index = 0, outputArray = []) {
	// your code here
	// exit condition
	if (typeof arr == "object" && index == arr.length) {
		return outputArray;
	}
	if (typeof arr[index] == "object") {
		return flatten(arr[index], 0, outputArray);
  }
  // if(typeof arr[index] == "number")
	outputArray.push(arr[index]); // push 3 index 1
	return flatten(arr, index + 1, outputArray);
}
let arr = [1, [2, 3], [4, [5]]];
console.log(flatten(arr));
// console.log(typeof arr);
