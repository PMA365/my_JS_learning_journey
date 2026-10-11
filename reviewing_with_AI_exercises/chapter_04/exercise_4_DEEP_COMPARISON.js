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
const obj1 = {
	name: "Alice",
	age: 25,
	role: { name: "Alice", age: 25, role: "admin" },
};
const obj2 = {
	name: "Alice",
	age: 25,
	role: { name: "Alice", age: 25, role: "admin" },
};

function deepEqual(obj1, obj2) {
	let equal = true;
	for (const [key, value] of Object.entries(obj1)) {
		if (!obj2.hasOwnProperty(key)) {
			return (equal = false);
		}
		if (typeof obj1[key] == "object") {
			// nested object detected
			// need to check recursive
			equal = deepEqual(obj1[key], obj2[key]);
		} // if it was'nt nested object we just compare its value wit !=
		else if (value != obj2[key]) {
			return (equal = false);
		}
	}
	return equal;
}

console.log(deepEqual(obj1, obj2));
