// EXERCISE 7: TYPE COERCION OBSERVATIONS
// Task: Predict the output of these expressions and explain why:
// 1. "5" - 3
// 2. "5" + 3
// 3. 8 * null
// 4. "5" == 5
// 5. "5" === 5

//1/ will be 2 bc the "5" will be converted to the number
//2/ will be 8 bc the "5" will be converted to the number
//Note: I was wrong it will be 53 bc it concat it :))
//3/ 8 * null = null  I think every think x null will be null
//Note: no i was wrong it will be 0
//Note: bc When you use an arithmetic operator like multiplication (*),
//Note: JavaScript expects both sides to be numbers.
//Note: If one of them is not a number, JavaScript automatically converts (coerces) it behind the scenes before doing the math.

//4/ "5" == 5  will be True
//5/ "5" === 5 will be False bc the type of the "5" will be string
// (=== does not do type coercion)

console.log("5" - 3);
