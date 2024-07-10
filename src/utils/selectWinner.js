const selectWinner = (playBoard, winCombinations, playerTurn) => {
    // Loop and check if there is a winner
    for (const combination of winCombinations) {
        const [a, b, c] = combination;
        if (
            playBoard[a] &&
            playBoard[a] === playBoard[b] &&
            playBoard[a] === playBoard[c]
        ) {
            return `The <span>${playerTurn}</span> win! Cheers 🥂!`;
        }
    }

    // Check if all cells are filled
    const isDraw = playBoard.every((cell) => cell !== '');
    if (isDraw) {
        return `The game ended in a tie!`;
    }

    // If no winner or draw, return null
    return null;
};

export default selectWinner;
