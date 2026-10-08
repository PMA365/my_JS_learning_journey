// Bean Counting
const countBs = (inputString) => {
	let countB = 0;
	for (let i = inputString.length - 1; i >= 0; i--) {
		if (inputString[i] == "B") {
			countB++;
		}
	}
	return countB;
};
console.log(countBs("B B B b b h G"));

const countChar = (inputString, serachingChar) => {
	let countCustomChar = 0;
	for (let i = inputString.length - 1; i >= 0; i--) {
		if (inputString[i] == serachingChar) {
			countCustomChar++;
		}
	}
	return countCustomChar;
};
console.log(countChar("B B B b b h G", "h"));
