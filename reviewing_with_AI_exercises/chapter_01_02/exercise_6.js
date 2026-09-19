// EXERCISE 6: CHARACTER COUNT V2
// Task: Rewrite countChar to use the repeatString function
// countChar that takes a string and a character,
// and returns the number of times that character appears in the string
// (or write a recursive version).
// Also: Write a function min that takes two numbers and returns
// the smaller one.

let count = 0;
let charIndex = 0;
function countChar(char, string) {
	if (charIndex == string.length) return count;
	if (string.charAt(charIndex) == char) count++;
	charIndex++;
	return countChar(char, string);
}
console.log(countChar("a", "bahadoran"));

function smallerIs(a, b) {
	return a < b ? a : b;
}
console.log(smallerIs(50, 40));
