// Recursion
// finding given number is odd/even without using % any with only -

const isEven = (inputNumber) => {
	// if the input Number Is negative we first convert it to positive to prevent infinite minus 2 recursion
	if (inputNumber < 0) {
		inputNumber = -inputNumber;
	}
	const minusTwoRepeatedly = (currentCalculatedNumber) => {
		if (currentCalculatedNumber == 0) {
			return true;
		} else if (currentCalculatedNumber == 1) {
			return false;
		}
		return minusTwoRepeatedly(currentCalculatedNumber - 2);
	};
	return minusTwoRepeatedly(inputNumber);
};
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
