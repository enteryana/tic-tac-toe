import dom from '../dom.js';
import data from '../data.js';
import selectWinner from '../utils/selectWinner.js';

const playerTurnHandler = (e) => {
    // separate cell
    const cellEl = e.target;
    const id = cellEl.id;

    // check if cell is marked or the game is end
    if (cellEl.innerText || dom.playerTurn.innerHTML.includes('won')) {
        return;
    }

    // mark the cell
    cellEl.classList.add(data.turn);
    cellEl.innerHTML = data.turn;

    // update
    data.playBoard[id] = data.turn;

    // is there a winner or a tie
    const winResult = selectWinner(
        data.playBoard,
        data.winCombinations,
        data.turn,
    );

    if (winResult !== null) {
        dom.playerTurn.innerHTML = winResult;
        return;
    }

    //switch current player
    data.turn = data.turn === 'O' ? 'X' : 'O';

    // update dom
    dom.playerTurn.innerHTML = `Now <b>${data.turn}</b>'s turn`;
};

export default playerTurnHandler;
