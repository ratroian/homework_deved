
const imagesContainer = document.querySelector('.images-list');
const imageTemplate = document.querySelector('#image-template').content;
const popupTemplate = document.querySelector('#popup-template').content;
const fullImage = popupTemplate.querySelector('.image-full');
const titleImage = popupTemplate.querySelector('.title')
const body = document.querySelector('body');
const pages = document.querySelector('.pages')
const API = 'https://jsonplaceholder.typicode.com/photos?_limit=250';
const quantityItems = 50;
let IMAGES = [];
let popupElement;

const getData = () => {
    return fetch(API)
        .then((response) => {
            if (response.ok) {
                return response;
            }
            throw new Error(`${response.status} — ${response.statusText}`);
        })
        .then((response) => response.json())
        .then((posts) => {
            IMAGES = [...posts]
            console.log(IMAGES)
            return IMAGES
        })
        .catch((error) => console.log(error));
};

const renderList = (items) => {
    imagesContainer.innerHTML = '';
    items.forEach(item => {
        const itemTemplate = imageTemplate.cloneNode(true);
        itemTemplate.querySelector('.image').src = item.thumbnailUrl;
        itemTemplate.querySelector('.image').dataset.id = item.id;
        imagesContainer.appendChild(itemTemplate)
    });
};

getData().then(() => renderList(IMAGES.slice(0, quantityItems)));

const onPopupEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
        messageDeleteHandler();
        body.removeEventListener('keydown', onPopupEscKeydown);
    }
};

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const makePagination = (event) => {
    let target = event.target;
    let page = +target.textContent
    renderList(IMAGES.slice(quantityItems* (page-1), quantityItems* (page-1) + quantityItems))
};

const messageDeleteHandler = () => {
    const newPopup = document.querySelector('.wrapper-full');
    newPopup.remove();
    window.removeEventListener('keydown', onPopupEscKeydown)
};

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

imagesContainer.addEventListener('click', showPopup);

pages.addEventListener('click', makePagination)
