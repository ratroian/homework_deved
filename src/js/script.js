
const imagesContainer = document.querySelector('.images-list');
const imageTemplate = document.querySelector('#image-template').content;
const popupTemplate = document.querySelector('#popup-template').content;
const fullImage = popupTemplate.querySelector('.image-full');
const titleImage = popupTemplate.querySelector('.title')
const body = document.querySelector('body');
const pages = document.querySelector('.pages')
const API = 'https://jsonplaceholder.typicode.com/photos?_limit=250';
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
        // .then()
        .catch((error) => console.log(error));
}


const renderList = (items) => {
    imagesContainer.innerHTML = '';
    items.forEach(item => {
        const itemTemplate = imageTemplate.cloneNode(true);
        itemTemplate.querySelector('.image').src = item.thumbnailUrl;
        itemTemplate.querySelector('.image').dataset.id = item.id;
        // console.log(itemT.querySelector('.image'))
        // itemT.querySelector('.image-full').src = item.url;
        imagesContainer.appendChild(itemTemplate)
    })
}

const quantutyItems = 50;

getData().then(() => renderList(IMAGES.slice(0, quantutyItems)));

const getPagination = (event) => {
    let target = event.target;
    let page = +target.textContent
    renderList(IMAGES.slice(quantutyItems* (page-1), quantutyItems* (page-1) + quantutyItems))
}

pages.addEventListener('click', getPagination)

const showPopup = (event) => {
    let target = event.target;
    const idItem = +target.dataset.id;
    const url = IMAGES.find((item) => item.id === idItem)
    console.log(url)
    // console.log(target.dataset.id)
    popupElement = popupTemplate.cloneNode(true);
    popupElement.querySelector('.image-full').src = url.url;
    //
    body.appendChild(popupElement);

    // body.addEventListener('click', messageDeleteHandler, {once: true});

    // body.addEventListener('keydown', onPopupEscKeydown);
};

imagesContainer.addEventListener('click', showPopup)

// const messageDeleteHandler = () => {
//     popupElement.remove();
// };

// const onPopupEscKeydown = (evt) => {
//     if (isEscEvent(evt)) {
//         messageDeleteHandler();
//         body.removeEventListener('keydown', onPopupEscKeydown);
//     }
// };

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';