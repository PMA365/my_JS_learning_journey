// CHAPTER 3: FUNCTIONS - ADDITIONAL EXERCISES

// Function Declaration vs Expression

// JavaScript has two ways to create functions: function declarations and function expressions.

// A function declaration is hoisted and can be used before it's defined in the code:

// function greet(name) {
//   console.log("Hello " + name);
// }

// greet("Alice"); // Works! Even though greet is defined below

// A function expression is not hoisted and must be defined before use:

// const square = function(x) { return x * x; };

// // square(5); // ReferenceError - square is not defined yet

// Write a program that demonstrates the difference. Create both a function declaration and a function expression, then try calling each one in different orders to show which works and which doesn't.

hoisted();
function hoisted() {
	console.log("hoisted printing");
}
expression();
const expression = function () {
	console.log("hoisted printing");
};
expression();
