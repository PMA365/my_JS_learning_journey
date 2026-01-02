const square = (x) => x * x;
square(2);

const roundTo = function (n, step) {
	let remainder = n % step;
	return n - remainder + (remainder < step / 2 ? 0 : step);
};
console.log(roundTo(13, 10));
// How they found this formula lets test some numbers ourself:
// 13 % 10 = 3
// means 13 is +3 more than our nearest step (10)
// also its less than the middle of the distance between 10 and 20 meaning <15
// so we should round it down
// if it was more than the middle of the distance between 10 and 20 meaning >15
// we should round it up to the next nearly step
// if(remainder < step/2 ? roundDown : roundUp)
// roundDown: n - remainder
// n = 17
// remainder = 17 % 10 = 7
// roundUp: n - remainder = nearest down step
// + step => next nearest step
// formula = n - remainder + ( remainder < step/2 ? 0 : step)
// n = 9 step=10
// remainder = 9
// 9>5 => n - remainder + step = 10

// Functions that don’t have a return statement at all,
//  such as makeNoise, similarly return undefined.
const makeNoise = function () {
	console.log("Pling!");
};
console.log(makeNoise()); // -> undefined

/////////////////////////////////////////////////
// Recursion Example
// puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3
// write a function that, given a number, tries to find a sequence of such additions

function findSolution(givenNumber) {
	stringValue = "";
	totalOperationDone = 0;
	function addOrMultiply(currentReachedNumber, solutionString) {
		totalOperationDone++;
		if (currentReachedNumber == givenNumber) {
			return solutionString;
		} else if (currentReachedNumber > givenNumber) {
			return null;
		} else {
			return (currentReachedNumber =
				addOrMultiply(currentReachedNumber + 5, `(${solutionString} +5)`) ??
				addOrMultiply(currentReachedNumber * 3, `(${solutionString} *3)`));
		}
	}
	result =
		addOrMultiply(1, "1") + `\n totalOperationDone =${totalOperationDone}`;
	return result;
}
console.log(findSolution(13));

///////////////////////
