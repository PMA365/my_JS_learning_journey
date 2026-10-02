// --------------------------------------------------------------------
// EXERCISE 3: A LIST
// ====================================================================

// A list is a nested set of objects with the first object holding a
// reference to the second, the second to the third, and so on.

//   let list = {
//     value: 1,
//     rest: {
//       value: 2,
//       rest: {
//         value: 3,
//         rest: null
//       }
//     }
//   };

// Write a function arrayToList that builds up a list structure like
// the one shown when given [1, 2, 3] as its argument.

// Also write a listToArray function that produces an array from a
// list.

// Add the helper functions:

// - prepend: takes an element and a list and creates a new list
//   that adds the element to the front of the input list
// - nth: takes a list and a number and returns the element at the
//   given position (zero referring to the first element) or undefined
//   when there is no such element

// If you haven't already, also write a recursive version of nth.

function arrayToList(inputArray, index = 0) {
	// restObject.rest = {};

	// end condition
	if (index == inputArray.length) {
		return null;
	}

	return {
		value: inputArray[index],
		rest: arrayToList(inputArray, index + 1),
	};
}
console.log(arrayToList([1, 2, 3]));

//   let list = {
//     value: 1,
//     rest: {
//       value: 2,
//       rest: {
//         value: 3,
//         rest: null
//       }
//     }
//   };

// chon khooroojimoon object bashe to khode function recursive ham baiad 
// Object return konim. 
// inja chi hey mire paain va oomgh peida mikone?
// rest
// pas dar akharin marhale, rest = null,
//  va inja recursion stop mishe va return mishe
//  va be marhale ghabl bar migarde
//  va value = 3 ro return mikone 
// va be marhale ghabl bar migarde va value = 2 
// ro return mikone va be marhale ghabl bar migarde va value = 1
//  ro return mikone va akharin object ro return mikone. 
