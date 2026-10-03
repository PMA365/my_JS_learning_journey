function reverseString(str, index = 0) {
	index += 1;
	if (index > str.length) {
		return "";
	}
	return str[str.length - index] + reverseString(str, index);
}
console.log(reverseString("freeCodeCamp"));
