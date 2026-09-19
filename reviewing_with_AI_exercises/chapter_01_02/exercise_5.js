// EXERCISE 5: REPEAT
// Task: Write a function repeatString that takes a string and a number,
// and returns the string repeated that many times.

function repeatString(string, number) {
	let outputString = "";
	for (let i = 1; i <= number; i++) {
		outputString += string;
	}
	return outputString;
}

console.log(repeatString("bahador", 2));
