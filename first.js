var number = 1;

function addNumber(a, b) {
	return a + b;
}
let result = addNumber();
console.log(1 + 1 == 2 && 10 * 10 > 50); // true
console.log("---------------- || ----------------");
// 🧠 Precedence order (highest → lowest among the operators used)
// * (multiplication)
// + (addition)
// > and == (comparison operators — same level)
// && (logical AND)
// ||

// JavaScript has exactly 7 falsy values:

// false

// 0 (and -0)

// "" (empty string)

// null

// undefined

// NaN

// whenever JavaScript needs to convert a value to Boolean (like in an if statement, or when evaluating logical operators), these 6 falsy values like : 0 and -0 and "" and NaN and null and undefined  are always treated as falsy, meaning they convert to false.
console.log(false || "yoo"); // return right bc left is false
console.log(undefined || "yoo"); // return right bc left is false bc undefined is consider as false by js
console.log(null || "yoo"); // return right bc left is false bc null is consider as false by js
console.log(NaN || "yoo"); // return right bc left is false bc NaN is consider as false by js
console.log(0 || "yoo"); // return right bc left is false bc 0 is consider as false by js
console.log(-0 || "yoo"); // return right bc left is false bc -0 is consider as false by js
console.log("" || "yoo"); // return right bc left is false bc "" is consider as false by js
console.log(true && "Bahador"); // return right bc left is ture
console.log((true && false) || "hi"); //hi
console.log("---------------- && -----------------");
console.log(true && "hello"); // "hello" (left is truthy → return right)
console.log(false && "hello"); // false (left is falsy → return left)
console.log(null && "hello"); // false (left is falsy → return left)
console.log(NaN && "hello"); // false (left is falsy → return left)
console.log(undefined && "hello"); // false (left is falsy → return left)
console.log(0 && "hello"); // false (left is falsy → return left)
console.log(-0 && "hello"); // false (left is falsy → return left)
console.log("" && "hello"); // false (left is falsy → return left)
console.log("hi" && "hello"); // "hello" (left truthy → return right)
console.log(5 && 42); // 42 (left truthy → return right)
console.log("--------------- ?? -----------------");
// only prints right variable value when the left is undefined or null nothing else matter
console.log(undefined && "hello"); // false (left is undefined → return left)
console.log(null && "hello"); // "hello" (left is null → return right)
console.log(0 && "hello"); // (left isnt  null/undefined → return left)
console.log(-0 && "hello"); //(left isnt  null/undefined → return left)
console.log(NaN && "hello"); // (left isnt  null/undefined → return left)
console.log(false && "hello"); //(left isnt  null/undefined → return left)

console.log(
	"-------------these operator usage in real world example --------------"
);
console.log("-------------for defining default value --------------");

function getUserName(user) {
	// just for knowing what value is in the left side of || operator we use typeof here:
	console.log(typeof user?.name); // user = { name: "Alice" } => String
	// user = "Amin" => undefined
	//return (user && user.name) || "Guest";
	return user?.name || "Guest"; // more readable
}
function getUserName2(user) {
	return user?.name ?? "Guest";
}
// If you don’t want to allow 0, false, or "" → use ||.
// If you do want to allow them → use ??.

console.log(getUserName({ name: "Alice" })); // "Alice"
console.log(getUserName("Amin")); // "Guest"

console.log(getUserName2(null)); // "Guest"
console.log(getUserName2(undefined)); // "Guest"
console.log(getUserName2("Bahador")); // "Guest"
console.log(getUserName2({ name: "" })); // nothing got printed only new empty line
console.log(getUserName2({ name: 0 })); // 0

// also if we want to know the given variable is null/undefined we should use ?? bc with || we cant catch 0 or Nan or false or "" values
let value1 = null;
let value2 = undefined;
console.log(value1 ?? "Null/undefined value detected"); // "" ✅ (kept)
console.log(value2 ?? "Null/undefined value detected"); // "" ✅ (kept)
function userInput(data) {
	return data ?? "User Input data is Null/Undefined";
}
