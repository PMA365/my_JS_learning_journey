// EXERCISE 4: COUNTING CHARACTERS
// Task: Write a function countChar that takes a string and a character,
// and returns the number of times that character appears in the string.
// Also write a countBs function that counts uppercase 'B' characters.
let count = 0;
const countChar = (string, char) => {
	for (let i = 0; i <= string.length; i++) {
		if (string.charAt(i) == char) {
			count++;
		}
	}
	return count;
};
console.log(countChar("bahador a", "a"));
const countBs = (string) => {
	count = 0;
	for (let i = 0; i <= string.length; i++) {
		if (string.charAt(i) == "B") {
			count++;
		}
	}
	return count;
};
console.log(countBs("bahador B"));

// AI solution :
// damn man did'nt know that for (let c of string) kind of thing thats amazing
function countChar(string, char) {
	let count = 0;
	for (let c of string) {
		if (c === char) count++;
	}
	return count;
}
// yeah i know its better to use the countChar that already working xD my bad
function countBs(string) {
	return countChar(string, "B");
}
