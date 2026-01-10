// Deep Comparison Objects

let myCustomObj = {
	id: 256,
	name: "Bahador",
	loc: "Persia",
	obj: {
		objName: "Amir",
		objID: 222,
		obj: {
			objName: "Amir",
			objID: 223,
		},
	},
	test: null,
};

let myCustomObj2 = {
	name: "Bahador",
	loc: "Persia",
	id: 256,
	obj: {
		objName: "Amir",
		objID: 222,
		obj: {
			objName: "Amir",
			objID: 223,
		},
	},
};
// let bKeys = Object.keys(myCustomObj2);
// for (let element of Object.keys(myCustomObj)) {
// 	console.log(element);
// 	if (element == "loc") {
// 		return;
// 	}
// }

function myFunction() {}

const deepEqual = (a, b) => {
	if (a === null || b === null) {
		return "null detected ";
	} else if (a.length !== undefined || b.length !== undefined) {
		return "array detected plz import real Object";
	} else if (
		(typeof a).toString() !== "object" ||
		(typeof b).toString() !== "object"
	) {
		return "plz import real Object";
	} else if (Object.keys(a).lenght != Object.keys(b).lenght) {
		return "Not equel";
	}
	let isEquel = true;
	const checkObjectValues = (a1, b1) => {
		let bKeys = Object.keys(b1);
		for (let element of Object.keys(a1)) {
			if (bKeys.indexOf(element) == -1) {
				isEquel = false;
				return "Not equel";
			} else if (
				(typeof a1[element]).toString() !== "object" &&
				a1[element] != b1[element]
			) {
				isEquel = false;
				return "Not equel";
			} else if ((typeof a1[element]).toString() == "object") {
				checkObjectValues(a1[element], b1[element]);
			}
		}
		return isEquel;
	};

	// recursive value content check
	return checkObjectValues(a, b);
};
console.log(deepEqual(myCustomObj, myCustomObj2));
