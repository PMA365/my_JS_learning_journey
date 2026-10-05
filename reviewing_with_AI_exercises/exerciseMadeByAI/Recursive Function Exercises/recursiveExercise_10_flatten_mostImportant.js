// ------------------------------------------------------------
// 9. NESTED ARRAY FLATTENING
// ------------------------------------------------------------
// Write a recursive function flatten(arr) that turns a nested array into one
// flat array.
// Example: flatten([1, [2, 3], [4, [5]]]) -> [1, 2, 3, 4, 5]

function flatten(arr, index = 0, outputArray = []) {
	// your code here
	// exit condition
	if (index == arr.length) {
		return outputArray;
	}
	// checking if the current index is an Array
	if (typeof arr[index] == "object") {
		flatten(arr[index], 0, outputArray);
		return flatten(arr, index + 1, outputArray);
	}
	// if(typeof arr[index] == "number")
	outputArray.push(arr[index]); // push 3 index 1
	return flatten(arr, index + 1, outputArray);
}
let arr = [1, [2, 3], [4, [5]]];
console.log(flatten(arr));
// console.log(typeof arr);

/*
 * What I learned:
 *
 *
 * - `return` for nested depth  ends the current call,
 *   so make sure for nested depth only use the flatten()
 *   with no return so the flatten() does the nested depth branch
 *   and after it does it job we use the return the `return flatten(arr, index + 1, outputArray);`
 *   so the recursive continue it job on its main branch till the end
 *
 * - Use `Array.isArray()` to identify nested arrays. `typeof` also returns
 *   "object" for values like `null`, so it is not a precise array check.
 */
