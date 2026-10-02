// ============================================================
// BEGINNER RECURSION PRACTICE
// ============================================================
// This file is designed to help you practice recursion with small,
// beginner-friendly problems. Try solving them one by one.
//
// IMPORTANT RECURSION IDEA:
// 1. Identify the base case (when the function stops)
// 2. Identify the smaller problem
// 3. Make the recursive call move toward the base case
// ============================================================

// ------------------------------------------------------------
// 1. COUNTDOWN
// ------------------------------------------------------------
// Write a function countDown(n) that logs numbers from n down to 1.
// Example: countDown(5) -> 5 4 3 2 1

function countDown(n) {
  // your code here
}

// ------------------------------------------------------------
// 2. FACTORIAL
// ------------------------------------------------------------
// Write a recursive function factorial(n) that returns n!.
// Example: factorial(5) -> 120

function factorial(n) {
  // your code here
}

// ------------------------------------------------------------
// 3. SUM OF ARRAY
// ------------------------------------------------------------
// Write a recursive function sumArray(arr) that adds all numbers in an array.
// Example: sumArray([1, 2, 3, 4]) -> 10

function sumArray(arr) {
  // your code here
}

// ------------------------------------------------------------
// 4. MAX NUMBER IN ARRAY
// ------------------------------------------------------------
// Write a recursive function findMax(arr) that returns the largest number.
// Example: findMax([3, 9, 1, 7]) -> 9

function findMax(arr) {
  // your code here
}

// ------------------------------------------------------------
// 5. REVERSE STRING
// ------------------------------------------------------------
// Write a recursive function reverseString(str) that reverses a string.
// Example: reverseString("hello") -> "olleh"

function reverseString(str) {
  // your code here
}

// ------------------------------------------------------------
// 6. CHECK IF ARRAY IS SORTED
// ------------------------------------------------------------
// Write a recursive function isSorted(arr) that returns true if the array
// is sorted in ascending order.
// Example: isSorted([1, 2, 3, 4]) -> true

function isSorted(arr) {
  // your code here
}

// ------------------------------------------------------------
// 7. PALINDROME CHECK
// ------------------------------------------------------------
// Write a recursive function isPalindrome(str) that checks if a string reads
// the same forward and backward.
// Example: isPalindrome("racecar") -> true

function isPalindrome(str) {
  // your code here
}

// ------------------------------------------------------------
// 8. MULTIPLY NUMBERS IN ARRAY
// ------------------------------------------------------------
// Write a recursive function multiplyArray(arr) that multiplies all numbers.
// Example: multiplyArray([1, 2, 3, 4]) -> 24

function multiplyArray(arr) {
  // your code here
}

// ------------------------------------------------------------
// 9. NESTED ARRAY FLATTENING
// ------------------------------------------------------------
// Write a recursive function flatten(arr) that turns a nested array into one
// flat array.
// Example: flatten([1, [2, 3], [4, [5]]]) -> [1, 2, 3, 4, 5]

function flatten(arr) {
  // your code here
}

// ------------------------------------------------------------
// 10. BINARY SEARCH
// ------------------------------------------------------------
// Write a recursive function binarySearch(arr, target) that returns the index
// of the target or -1 if not found.
// Example: binarySearch([1, 3, 5, 7, 9], 7) -> 3

function binarySearch(arr, target) {
  // your code here
}

// ------------------------------------------------------------
// 11. FIBONACCI
// ------------------------------------------------------------
// Write a recursive function fibonacci(n) that returns the nth Fibonacci
// number.
// Example: fibonacci(6) -> 8

function fibonacci(n) {
  // your code here
}

// ------------------------------------------------------------
// 12. ARRAY TO LIST (THE EXERCISE YOU'RE WORKING ON)
// ------------------------------------------------------------
// Build a linked list structure like this:
// {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// }
//
// Example: arrayToList([1, 2, 3])

function arrayToList(arr) {
  // your code here
}

// ------------------------------------------------------------
// QUICK TESTS
// ------------------------------------------------------------
// Uncomment and run these after you write the functions.

// console.log(countDown(5));
// console.log(factorial(5));
// console.log(sumArray([1, 2, 3, 4]));
// console.log(findMax([3, 9, 1, 7]));
// console.log(reverseString("hello"));
// console.log(isSorted([1, 2, 3, 4]));
// console.log(isPalindrome("racecar"));
// console.log(multiplyArray([1, 2, 3, 4]));
// console.log(flatten([1, [2, 3], [4, [5]]]));
// console.log(binarySearch([1, 3, 5, 7, 9], 7));
// console.log(fibonacci(6));
// console.log(arrayToList([1, 2, 3]));

// ------------------------------------------------------------
// HINTS:
// - For simple recursive functions, decide what the base case is first.
// - The recursive call should always be on a smaller problem.
// - For arrays, usually use index or slice.
// - For strings, usually use substring or the first/last character.
// - For nested structures, check whether the current value is an array.
// ------------------------------------------------------------
