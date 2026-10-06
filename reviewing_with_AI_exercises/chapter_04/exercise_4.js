// --------------------------------------------------------------------
// EXERCISE 4: DEEP COMPARISON
// ====================================================================

// Write a function deepEqual that takes two values and returns true
// only if they are the same value or are objects with the same
// properties, where the values of the properties are equal when
// compared with a recursive call to deepEqual.

// To find out whether values should be compared directly (using ===)
// or have their properties compared, use the typeof operator. If it
// produces "object" for both values, do a deep comparison.

// But take one silly exception into account: because of a historical
// accident, typeof null also produces "object".

// The Object.keys function will be useful when you need to go over
// the properties of objects to compare them.
const obj1 = { name: "Alice", age: 25, role: "admin" };
const obj2 = { name: "Alice", age: 25, role: "admin" };

obj3 = Object.entries(obj2);

console.log(Object.entries(obj2));
function deepEqual(obj1, obj2) {
	Object.entries(obj1);
	Object.entries(obj2);
	let index = 0;
	for (let [key, value] in Object.entries(obj1)) {
		if (key != Object.entries(obj2)[index]) {
			return false;
		}
		if (value) index++;
	}
	deepEqual(obj1, obj2);
}
