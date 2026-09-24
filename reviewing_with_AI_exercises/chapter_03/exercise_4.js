// Recursive Factorial

// The factorial of a non-negative integer n (written n!) is
// the product of all positive integers less than or equal to n. By convention, 0! = 1.

// Write a recursive function called factorial that takes a single non-negative integer parameter and returns its factorial.

// Test it on 5 (should return 120) and 0 (should return 1).

let total = 0;
function recursiveFactorial(inputNum) {
	if (n == 0) {
		return 1;
	}

	return inputNum * recursiveFactorial(inputNum - 1);
}
console.log(recursiveFactorial(3));
