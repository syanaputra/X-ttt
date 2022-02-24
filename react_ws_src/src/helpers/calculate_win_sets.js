const calculate_win_sets = function (gameSize) {
	let winSets = [];

	// Calculate horizontal & vertical
	for(let y=0; y<gameSize; y++) {
		let winConditionHorizontal = [];
		let winConditionVertical = [];
		
		for(let x=0; x<gameSize; x++) {
			winConditionHorizontal.push(`c${((y * gameSize) + (x+1))}`);
			winConditionVertical.push(`c${((y+1) + (x * gameSize))}`);
		}

		winSets.push(winConditionHorizontal);
		winSets.push(winConditionVertical);
	}

	// Calculate the diagonals (2 of them)
	let diagonal1 = [];
	let diagonal2 = [];
	for(let i=0; i<gameSize; i++) {
		diagonal1.push(`c${((gameSize + 1) * i) + 1}`);
		diagonal2.push(`c${(gameSize * (i + 1)) - i}`);
	}
	
	winSets.push(diagonal1);
	winSets.push(diagonal2);

	return winSets;
}

export default calculate_win_sets