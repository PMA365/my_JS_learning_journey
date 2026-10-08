let descriptions = {
	work: "Went to work",
	"touched tree": "Touched a tree",
};

// for accessing descriptions touched tree bc it has space we cant use dot so we should use
// [] for this
console.log(descriptions["touched tree"]);

const createObj = () => ({
	prop: "1234",
});

const createObj2 = () => {
	return {
		prop: "1234",
	};
};

console.log(createObj().prop);
console.log(createObj2().prop);

let myCustomObj = {
	id: "256",
	name: "Bahador",
	loc: "Persia",
};

console.log(Object.keys(myCustomObj)); // [ 'id', 'name', 'loc' ]

let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA);
// → {a: 1, b: 3, c: 4}

//array doesn’t care what type each element is , it just stores values.
const mixedArray = [
	"Hello", // string
	42, // number
	true, // boolean
	{ name: "Amir" }, // object
	[1, 2, 3], // array
	null, // null
	undefined, // undefined
];

console.log(mixedArray); // [ 'Hello', 42, true, { name: 'Amir' }, [ 1, 2, 3 ], null, undefined ]

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };
console.log(object1 == object2); // → true
console.log(object1 == object3); // → false

object1.value = 15;
console.log(object2.value); // → 15 console.log(object3.value); // → 10

//
const score = { visitors: 0, home: 0 }; // This is OK
score.visitors = 1;
console.log(score); // { visitors: 1, home: 0 }
// This isn't allowed
//score = { visitors: 1, home: 1 }; // TypeError: Assignment to constant variable.

// push pop they do their things on the end of array
let animalNameArray = ["cow", "donkey", "lion", "chicken", "dog"];

animalNameArray.push("cat"); // adds one or more elements to the end of an array if the input is not being empty
console.log(animalNameArray); // [ 'cow', 'donkey', 'lion', 'chicken', 'dog', 'cat' ]
console.log(animalNameArray.pop()); // cat
console.log(animalNameArray); // [ 'cow', 'donkey', 'lion', 'chicken', 'dog' ]

//shift unshift they do their things on the  beginning of array
console.log(animalNameArray.shift()); // removes the first element and return it/undefined
console.log(animalNameArray); // [ 'donkey', 'lion', 'chicken', 'dog' ]
animalNameArray.unshift(); //  inserts element(s) at the beginning of the array if the input not being empty
console.log(animalNameArray); // [ 'donkey', 'lion', 'chicken', 'dog' ]
animalNameArray.unshift("monkey", "cow");
console.log(animalNameArray); // [ 'monkey', 'cow', 'donkey', 'lion', 'chicken', 'dog' ]

// indexOf , lastIndexOf
// Both indexOf and lastIndexOf take an optional second argument
//  that indicates where to start searching.
// indexOf
// Starts searching forward
// From the given index → toward the end of the array
console.log([1, 2, 3, 2, 1].indexOf(2, 2)); // → 1
console.log([1, 2, 3, 2, 1].indexOf(2, 2)); // → 3
// !important lastIndexOf(value, fromIndex) works like this
// !important It starts searching backward from the index you give it.
// It stops when it finds the first match going backward
console.log([1, 2, 3, 2, 1, 5, 6, 2].lastIndexOf(2, 4)); // → 3

//slice()
console.log([0, 1, 2, 3, 4].slice(2, 4)); // → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2)); // → [2, 3, 4]

let array1 = [1, 3, 4, 5];
// these 2 work the same
console.log(array1.concat(66, 77)); // [ 1, 3, 4, 5, 66, 77 ]
console.log(array1.concat([66, 77])); // [ 1, 3, 4, 5, 66, 77 ]

console.log("coconuts".slice(4, 7)); // → nut
console.log("coconut".indexOf("u")); // → 5

console.log(String("A").padStart(3, "0")); // 00A
console.log(String(6).padStart(3, "0")); // 006

// ...rest parameter
function max(...numbers) {
	let result = -Infinity;
	console.log(numbers);
	for (let number of numbers) {
		if (number > result) result = number;
	}
	return result;
}
console.log(max(4, 1, 9, -2));
// → 9

let numbers = [5, 1, 7];
console.log(max(...numbers)); // 7
// this will not work bc the input variable of function will be this [ [ 5, 1, 7 ] ]
// and not this  [ 5, 1, 7 ] so the for loop cant work on only 1 item
console.log(max(numbers));
//
// This ...rest parameter works even in array
let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);

// This ...rest parameter works even in curly brace objects
let coordinates = { x: 10, y: 0 };
console.log({ ...coordinates, y: 5, z: 1 });

console.log(Math.PI); // 3.141592653589793
