import {IMAGES} from './data';
import {messageDeleteHandler, onPopupEscKeydown} from "./listeners";

const popupTemplate = document.querySelector('#popup-template').content;
const body = document.querySelector('body');
let popupElement;

const createPopup = (event) => {
    let target = event.target;
    const idItem = +target.dataset.id;
    const urlImage = IMAGES.find((item) => item.id === idItem);
    popupElement.querySelector('.image-full').src = urlImage.url;

    return popupElement
};

const showPopup = (image) => {
    let target = image.target;
    if (target.classList.contains('images-list')) {
        return;
    }
    popupElement = popupTemplate.cloneNode(true);
    createPopup(image);
    body.appendChild(popupElement);
    const newPopup = document.querySelector('.wrapper-full');
    newPopup.addEventListener('click', messageDeleteHandler);
    window.addEventListener('keydown', onPopupEscKeydown);
};

export {body, showPopup}