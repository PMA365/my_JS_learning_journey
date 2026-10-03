// 2.Write a program that returns the number of times a character appears in string.
// Your program should receive a string and the character.
// It should then return number of times the character appears in the string.

function countCharacter(str, char, count = 0, index = 0) {
	if (index > str.length - 1) {
		return count;
	}

	if (str[index] == char) {
		count += 1;
	}

	return countCharacter(str, char, count, index + 1);
}

console.log("char is appeared " + countCharacter("aaa", "a") + " times");
let count = 2;

// little Note to remember
//evaluates means judge the value of sth
console.log(count + 1); // 3 this evaluates to 3, but does not change the value of count
console.log(count); // 2
//
console.log(count++); // 2 this evaluates to 2, but then increments count to 3
console.log(count); // 3
//
console.log((count += 1)); // 4
console.log(count); // 4
//
console.log(++count); // 5
console.log(count); // 5
