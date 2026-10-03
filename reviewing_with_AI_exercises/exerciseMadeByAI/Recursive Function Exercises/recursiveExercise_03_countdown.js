// ------------------------------------------------------------
// 1. COUNTDOWN
// ------------------------------------------------------------
// Write a function countDown(n) that logs numbers from n down to 1.
// Example: countDown(5) -> 5 4 3 2 1

function countDown(n) {
	// your code here
	if (n == 0) {
		return;
	}
	console.log(n);
	countDown(n - 1);
}
countDown(5);
