//FizzBuzz;

for (let i = 1; i < 100; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
		console.log("FizzBuzz");
	} else if (i % 3 == 0) {
		console.log("Fizz");
	} else if (i % 5 == 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}
console.log("-------- second approach better performance       --------");
console.log("-------- the first solution calculate %, 4 times   --------");
console.log("-------- but this solution calculate % only 2 times --------");
let divisibleBy3 = false;
let divisibleBy5 = false;
for (let i = 1; i < 100; i++) {
	divisibleBy3 = i % 3 == 0;
	divisibleBy5 = i % 5 == 0;

	if (divisibleBy3 && divisibleBy5) {
		console.log("FizzBuzz");
	} else if (divisibleBy3) {
		console.log("Fizz");
	} else if (divisibleBy5) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}
