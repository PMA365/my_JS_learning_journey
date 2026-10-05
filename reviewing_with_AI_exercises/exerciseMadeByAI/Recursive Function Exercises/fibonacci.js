// ------------------------------------------------------------
// 11. FIBONACCI
// ------------------------------------------------------------
// Write a recursive function fibonacci(n) that returns the nth Fibonacci
// number.
// Example: fibonacci(6) -> 8
// Fibonacci sequence is a sequence in which each element is the sum of the two elements that precede it.
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 , ...
function fibonacci(target, index = 2, prev1 = 0, prev2 = 1, currentNum = 0) {
	// your code here

	currentNum = prev2 + prev1;
	if (target == 1) {
		return 1;
	}
	if (target == currentNum) {
		return index;
	}

	return fibonacci(target, index + 1, (prev1 = prev2), (prev2 = currentNum));
}
console.log(fibonacci(8)); // 8
