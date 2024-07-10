import playerTurnHandler from '../handlers/playerTurnHandler.js';

const createBoard = () => {
    //container
    const boardContainer = document.createElement('div');
    boardContainer.className = 'boardContainer';

    //cells
    let num = 0;
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = num;

        boardContainer.append(cell);

        // click event
        cell.addEventListener('click', (e) => {
            playerTurnHandler(e);
        });

        num += 1;
    }
    return boardContainer;
};

export default createBoard;
