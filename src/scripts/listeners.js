import {body, showPopup} from './popup.js';
import {imagesContainer} from './render.js';

const pages = document.querySelector('.pages')

const onPopupEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
        messageDeleteHandler();
        body.removeEventListener('keydown', onPopupEscKeydown);
    }
};

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const messageDeleteHandler = () => {
    const newPopup = document.querySelector('.wrapper-full');
    newPopup.remove();
    window.removeEventListener('keydown', onPopupEscKeydown)
};

imagesContainer.addEventListener('click', showPopup);



export {onPopupEscKeydown, isEscEvent, messageDeleteHandler, pages}