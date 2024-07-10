import dom from '../dom.js';
import resetHandler from '../handlers/resetHandler.js';

const resetEvent = () => {
    dom.resetBtn.addEventListener('click', resetHandler);
};

export default resetEvent;
