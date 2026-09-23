// Default Parameters

// Before ES6, JavaScript functions couldn't have default parameter values.
//  If you called a function with too few arguments,
//  the missing parameters would be undefined.

// function oldPower(base, exponent) {
//   if (exponent === undefined) exponent = 1;
//   let result = 1;
//   for (let i = 0; i < exponent; i++) {
//     result *= base;
//   }
//   return result;
// }

// ES6 introduced default parameters:

// function power(base, exponent = 1) {
//   let result = 1;
//   for (let i = 0; i < exponent; i++) {
//     result *= base;
//   }
//   return result;
// }

// // Both return 8
// console.log(oldPower(2, 3));
// console.log(power(2, 3));

// Write a function called sum that takes three numbers and returns their sum.
// The third parameter should default to 0 if not provided, so sum(1, 2) returns 3 and sum(1, 2, 3) returns 6.

function sum(a, b, c = 0) {
	return a + b + c;
}
console.log(sum(1, 3));
console.log(sum(1, 3, 4));
