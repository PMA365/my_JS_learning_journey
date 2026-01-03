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
score = { visitors: 1, home: 1 }; // TypeError: Assignment to constant variable.
