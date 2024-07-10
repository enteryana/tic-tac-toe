const data = {
    // player turn
    turn: 'O',

    // play board
    // 9 slots for 3x3 grid
    // element "", "O" or "X"
    // start with empty slots ""

    playBoard: ['', '', '', '', '', '', '', '', ''],

    winCombinations: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // rows
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // columns
        [0, 4, 8],
        [2, 4, 6], // diagonals
    ],
};

export default data;
