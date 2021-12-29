import { IMAGES } from './data';
import { imagesContainer } from './render';

const body = <HTMLElement>document.querySelector('body');

export const pages = <HTMLElement>document.querySelector('.pages');

const isEscEvent = (evt): boolean => evt.key === 'Escape' || evt.key === 'Esc';

const messageDeleteHandler = () => {
    const newPopup = document.querySelector<HTMLElement>('.wrapper-full');
    newPopup.remove();
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    window.removeEventListener('keydown', onPopupEscKeydown);
};

const onPopupEscKeydown = (evt): void => {
    if (isEscEvent(evt)) {
        messageDeleteHandler();
        body.removeEventListener('keydown', onPopupEscKeydown);
    }
};

const popupTemplate = document.querySelector<HTMLTemplateElement>('#popup-template').content;

let popupElement;

type TObjectData = {
    albumId: number
    id: number
    thumbnailUrl: string
    title: string
    url: string
};

const createPopup = (event): TObjectData => {
    const { target } = event;
    const idItem: number = +target.dataset.id;
    const urlImage: TObjectData = IMAGES.find((item) => item.id === idItem);
    (<HTMLImageElement>popupElement.querySelector('.image-full')).src = urlImage.url;

    return popupElement;
};

export const showPopup = (image): void => {
    const { target } = image;
    if (target.classList.contains('images-list')) {
        return;
    }
    popupElement = <HTMLTemplateElement>popupTemplate.cloneNode(true);
    createPopup(image);
    body.appendChild(popupElement);
    const newPopup = document.querySelector<HTMLElement>('.wrapper-full');
    newPopup.addEventListener('click', messageDeleteHandler);
    window.addEventListener('keydown', onPopupEscKeydown);
};

imagesContainer.addEventListener('click', showPopup);
