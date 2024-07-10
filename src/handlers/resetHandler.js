import dom from '../dom.js';
import data from '../data.js';

const resetHandler = () => {
    // clear all cells
    const cellElements = document.querySelectorAll('.cell');
    cellElements.forEach((cellEl) => {
        cellEl.innerHTML = '';
        cellEl.classList = 'cell';
    });

    // reset data player turn
    data.playBoard = Array(9).fill('');
    data.turn = 'X';
    dom.playerTurn.innerHTML = `It's <span>X</span>'s turn`;
};

export default resetHandler;
