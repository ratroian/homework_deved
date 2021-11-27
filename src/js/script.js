
const imagesContainer = document.querySelector('.images-list');
const imageTemplate = document.querySelector('#image-template').content;
const popupTemplate = document.querySelector('#popup-template').content;
const body = document.querySelector('body')
const API = 'https://jsonplaceholder.typicode.com/photos?_limit=250';
let IMAGES = [];
let popupElement;
const obj = {
    a: 1,
    b: 2
}
console.log(obj.a)

// const renderItems = (items) => {
//     const listFragment = document.createDocumentFragment();
//
//     items.forEach(item => {
//         const itemT = imageTemplate.cloneNode(true);
//         itemT.querySelector('.image').src = item.url;
//         itemT.querySelector('.title').textContent = item.title;
//         imagesContainer.appendChild(listFragment)
//     })
// }

const getData = () => {
    fetch(API)
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
        .then((items) => {
    // const listFragment = document.createDocumentFragment();

    items.forEach(item => {
        // console.log(item.title)
        const itemT = imageTemplate.cloneNode(true);
        itemT.querySelector('.image').src = item.thumbnailUrl;
        console.log(itemT.querySelector('.image'))
        // itemT.querySelector('.image-full').src = item.url;
        imagesContainer.appendChild(itemT)
    })
})
        .catch((error) => console.log(error));
}

console.log(getData());
console.log(IMAGES);


const showMessageSuccess = () => {
    popupElement = popupTemplate.cloneNode(true);

    body.appendChild(popupElement);

    body.addEventListener('click', messageDeleteHandler, {once: true});

    body.addEventListener('keydown', onPopupEscKeydown);
};

const messageDeleteHandler = () => {
    popupElement.remove();
};

const onPopupEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
        messageDeleteHandler();
        body.removeEventListener('keydown', onPopupEscKeydown);
    }
};

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';