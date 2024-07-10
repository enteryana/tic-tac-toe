import dom from '../dom.js';
import createBoard from '../components/createBoard.js';

const loadHandler = () => {
    const boardDom = createBoard();
    dom.board.append(boardDom);
};

export default loadHandler;
