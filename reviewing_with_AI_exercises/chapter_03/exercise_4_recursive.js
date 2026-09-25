// Recursive Factorial

// The factorial of a non-negative integer n (written n!) is
// the product of all positive integers less than or equal to n. By convention, 0! = 1.

// Write a recursive function called factorial that takes a single non-negative integer parameter and returns its factorial.

// Test it on 5 (should return 120) and 0 (should return 1).

// let total = 1;
// function recursiveFactorial(inputNum) {
// 	if (inputNum == 0) {
// 		return total;
// 	}
// 	total = inputNum * total;
// 	return recursiveFactorial(inputNum - 1);
// }
// console.log(recursiveFactorial(5));

// Note:
// it works but it has one important BUG :
// In recursion, we try to avoid relying on external variables (total)
// because it makes our functions unpredictable if they are called more than once.
// console.log(recursiveFactorial(5)); // Output: 120 (Correct!)
// console.log(recursiveFactorial(5)); // Output: 14400 (Incorrect! Because 'total' is now 120 and kept multiplying)

// I fixed that
// function recursiveFactorial(inputNum, total = 1) {
// 	if (inputNum == 0) {
// 		return total;
// 	}
// 	total = inputNum * total;
// 	return recursiveFactorial(inputNum - 1, total);
// }
// console.log(recursiveFactorial(5));

// The best solution AI said is this :
function recursiveFactorial(inputNum) {
	if (inputNum == 0 || inputNum == 1) {
		//the || inputNum == 1     makes function stops one step earlier and doesn't go more down
		// just a lil performance
		return 1;
	}

	return inputNum * recursiveFactorial(inputNum - 1);
}
console.log(recursiveFactorial(3));

// How this works and create for example 3x2x1  when the recursiveFactorial() only return 1
// The secret is that recursion happens in two phases:

// Going down (building the stack)

// Coming back up (doing the math)

// Let's trace recursiveFactorial(3) step-by-step to see how 3 * 2 * 1 actually happens.

// Phase 1: Going Down (Making the Calls)
// When you call recursiveFactorial(3), JavaScript pauses execution at each step because it has to wait for the next function to finish before it can do the multiplication.

// Step 1: recursiveFactorial(3) runs.

// It tries to return: 3 * recursiveFactorial(2)

// Wait! It has to pause and figure out what recursiveFactorial(2) is first.

// Step 2: recursiveFactorial(2) runs.

// It tries to return: 2 * recursiveFactorial(1)

// Wait! It pauses and has to figure out recursiveFactorial(1).

// Step 3: recursiveFactorial(1) runs.

// It hits the base case (inputNum === 1) and returns 1.

// Phase 2: Coming Back Up (The Unwinding)
// Now that we hit the bottom and got our 1, the paused functions can finally finish their math, working their way back up:

// Back to Step 2: recursiveFactorial(1) gave back 1.

// So, recursiveFactorial(2) can now finish: 2 * 1 = 2.

// It returns 2 up to the previous caller.

// Back to Step 1: recursiveFactorial(2) gave back 2.

// So, recursiveFactorial(3) can finally finish: 3 * 2 = 6.

// It returns 6 as the final answer.
