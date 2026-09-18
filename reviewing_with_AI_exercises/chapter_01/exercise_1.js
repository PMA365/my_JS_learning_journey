// EXERCISE 1: LOOPING A TRIANGLE
// Task: Write a loop that makes seven calls to console.log to output:
// #
// ##
// ###
// ####
// #####
// ######
// #######
// Note: console.log() always prints in new lane :)))))

for (i = 1; i <= 7; i++) {
	let stringMain = "";
	for (j = 0; j < i; j++) {
		stringMain += "#";
	}
	console.log(stringMain);
}
// AI Solution:
for (let line = "#"; line.length <= 7; line += "#") {
	console.log(line);
}
// God damn xD
