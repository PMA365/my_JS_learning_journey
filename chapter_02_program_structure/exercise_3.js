//Chessboard;
function createChessboard(gridSize) {
	for (let i = 1; i <= gridSize; i++) {
		let stringRow = "";
		if (i % 2 == 0) {
			// should started with space
			for (let j = 1; j <= gridSize; j++) {
				if (j % 2 == 0) {
					stringRow += "#";
				} else {
					stringRow += " ";
				}
			}
			console.log(stringRow);
		} else {
			// should started with #
			for (let j = 1; j <= gridSize; j++) {
				if (j % 2 == 0) {
					stringRow += " ";
				} else {
					stringRow += "#";
				}
			}
			console.log(stringRow);
		}
	}
}
createChessboard(8);
