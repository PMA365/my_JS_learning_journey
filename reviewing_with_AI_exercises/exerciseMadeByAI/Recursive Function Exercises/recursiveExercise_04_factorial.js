// ------------------------------------------------------------
// 2. FACTORIAL
// ------------------------------------------------------------
// Write a recursive function factorial(n) that returns n!.
// Example: factorial(5) -> 120

function factorial(n) {
	// your code here
	if (n == 0 || n == 1) {
		return 1;
	}

	return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
