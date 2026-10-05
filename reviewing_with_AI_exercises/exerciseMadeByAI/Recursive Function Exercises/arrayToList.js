// ------------------------------------------------------------
// 12. ARRAY TO LIST (THE EXERCISE YOU'RE WORKING ON)
// ------------------------------------------------------------
// Build a linked list structure like this:
// {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// }
//
// Example: arrayToList([1, 2, 3])

function arrayToList(arr, index = 0, obj = {}) {
	// your code here

	if (index == arr.length) {
		obj.value = index;
		obj.rest = null;
		return obj;
	} else {
		obj.value = arr[index];
		obj.rest = arrayToList(arr, index + 1, obj.rest);
	}

	return obj;
}
console.log(arrayToList([1, 2, 3]));
