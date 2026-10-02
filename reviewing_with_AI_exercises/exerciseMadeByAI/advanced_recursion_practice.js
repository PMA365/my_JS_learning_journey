// ============================================================
// ADVANCED / PRO-LEVEL RECURSION PRACTICE
// ============================================================
// These are harder recursive problems meant to train your thinking.
// Try to solve them only after mastering the beginner file.
//
// Recursion pattern to keep in mind:
// - reduce the problem size
// - handle the base case
// - combine the current result with the recursive result
// ============================================================

// ------------------------------------------------------------
// 1. POWER
// ------------------------------------------------------------
// Write a recursive function power(base, exponent) that returns base^exponent.
// Example: power(2, 5) -> 32

function power(base, exponent) {
  // your code here
}

// ------------------------------------------------------------
// 2. SUM DIGITS
// ------------------------------------------------------------
// Write a recursive function sumDigits(num) that adds all digits of a number.
// Example: sumDigits(1234) -> 10

function sumDigits(num) {
  // your code here
}

// ------------------------------------------------------------
// 3. COUNT VOWELS
// ------------------------------------------------------------
// Write a recursive function countVowels(str) that counts vowels in a string.
// Example: countVowels("hello world") -> 3

function countVowels(str) {
  // your code here
}

// ------------------------------------------------------------
// 4. REMOVE DUPLICATES
// ------------------------------------------------------------
// Write a recursive function removeDuplicates(arr) that removes duplicate values.
// Example: removeDuplicates([1, 2, 2, 3, 3, 4]) -> [1, 2, 3, 4]

function removeDuplicates(arr) {
  // your code here
}

// ------------------------------------------------------------
// 5. NESTED OBJECT TRAVERSAL
// ------------------------------------------------------------
// Write a recursive function collectValues(obj) that returns all values from
// a nested object into a flat array.
// Example:
// const obj = { a: 1, b: { c: 2, d: { e: 3 } }, f: 4 }
// collectValues(obj) -> [1, 2, 3, 4]

function collectValues(obj) {
  // your code here
}

// ------------------------------------------------------------
// 6. TREE NODE SUM
// ------------------------------------------------------------
// A tree node looks like:
// { value: 5, children: [ ... ] }
// Write a recursive function treeSum(node) that adds all values in the tree.

function treeSum(node) {
  // your code here
}

// ------------------------------------------------------------
// 7. DEPTH OF TREE
// ------------------------------------------------------------
// Write a recursive function treeDepth(node) that returns the maximum depth.
// Example: a root with one child and that child with one child => 3

function treeDepth(node) {
  // your code here
}

// ------------------------------------------------------------
// 8. MERGE SORT IDEA
// ------------------------------------------------------------
// Write a recursive function mergeSort(arr) that sorts the array.
// This is a classic recursive algorithm.

function mergeSort(arr) {
  // your code here
}

// ------------------------------------------------------------
// 9. PERMUTATIONS
// ------------------------------------------------------------
// Write a recursive function permutations(str) that returns all possible
// rearrangements of the string's characters.
// Example: permutations("ab") -> ["ab", "ba"]

function permutations(str) {
  // your code here
}

// ------------------------------------------------------------
// 10. COMBINATIONS
// ------------------------------------------------------------
// Write a recursive function combinations(arr, size) that returns all
// combinations of a given length.
// Example: combinations([1, 2, 3], 2) -> [[1,2], [1,3], [2,3]]

function combinations(arr, size) {
  // your code here
}

// ------------------------------------------------------------
// 11. ALL PARENTHESES COMBINATIONS
// ------------------------------------------------------------
// Write a recursive function generateParentheses(n) that returns all valid
// parenthesis strings with n pairs.
// Example: generateParentheses(2) -> ["(())", "()()"]

function generateParentheses(n) {
  // your code here
}

// ------------------------------------------------------------
// 12. FLOOR DIVISION
// ------------------------------------------------------------
// Write a recursive function floorDivide(a, b) that divides a by b using only
// subtraction and recursion.
// Example: floorDivide(10, 3) -> 3

function floorDivide(a, b) {
  // your code here
}

// ------------------------------------------------------------
// QUICK TESTS
// ------------------------------------------------------------
// Uncomment after solving the functions.

// console.log(power(2, 5));
// console.log(sumDigits(1234));
// console.log(countVowels("hello world"));
// console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));
// console.log(collectValues({ a: 1, b: { c: 2, d: { e: 3 } }, f: 4 }));
// console.log(treeSum({ value: 1, children: [{ value: 2 }, { value: 3, children: [{ value: 4 }] }] }));
// console.log(treeDepth({ value: 1, children: [{ value: 2, children: [{ value: 3 }] }] }));
// console.log(mergeSort([5, 2, 9, 1, 7, 3]));
// console.log(permutations("ab"));
// console.log(combinations([1, 2, 3], 2));
// console.log(generateParentheses(3));
// console.log(floorDivide(10, 3));

// ------------------------------------------------------------
// TIPS FOR ADVANCED RECURSION
// ------------------------------------------------------------
// - Use helper functions when state is needed.
// - Track indexes, remaining items, or used characters.
// - For tree problems, recurse on child nodes.
// - For permutation/combinator problems, think in terms of choices.
// - The recursive branch should reduce complexity each time.
// ------------------------------------------------------------
