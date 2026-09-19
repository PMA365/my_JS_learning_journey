// EXERCISE 3: CHESSBOARD
// Task: Create an 8x8 grid of spaces and # characters (chess board)
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// chess size be variant
let chessBoardSize = 10;
for (let i = 1; i <= chessBoardSize; i++) {
	let rowString = "";
	for (let j = 1; j <= chessBoardSize; j++) {
		rowString += (i + j) % 2 == 0 ? " " : "#";
	}
	console.log(rowString);
}
