// ------------------------------------------------------------
// 7. PALINDROME CHECK
// ------------------------------------------------------------
// Write a recursive function isPalindrome(str) that checks if a string reads
// the same forward and backward.
// Example: isPalindrome("racecar") -> true

function isPalindrome(str, index = 0) {
	// your code here
	if (index == Math.round(str.length / 2)) {
		return true;
	}
	if (str[index] != str[str.length - index - 1]) {
		return false;
	}

	return isPalindrome(str, index + 1);
}
// console.log(isPalindrome("racegcar")); // 8 length
console.log(isPalindrome("racecar")); // 8 length
console.log(isPalindrome("racegcar")); // 8 length
// 7
