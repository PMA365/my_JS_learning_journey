// EXERCISE 2: FIZZBUZZ
// Task: Print numbers 1-100, but:
// - Divisible by 3: print "Fizz"
// - Divisible by 5: print "Buzz"
// - Divisible by both 3 and 5: print "FizzBuzz"

for (i = 1; i <= 100; i++) {
	if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
	else if (i % 5 == 0) console.log("Buzz");
	else if (i % 3 == 0) console.log("Fizz");
	else console.log(i);
}

// AI solution :
Solution: for (let i = 1; i <= 100; i++) {
	if (i % 15 === 0) console.log("FizzBuzz");
	else if (i % 3 === 0) console.log("Fizz");
	else if (i % 5 === 0) console.log("Buzz");
	else console.log(i);
}
// remembers me the math in school 3x5 = 15 ک م م
