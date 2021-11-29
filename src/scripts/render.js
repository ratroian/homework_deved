const imagesContainer = document.querySelector('.images-list');
const imageTemplate = document.querySelector('#image-template').content;

const renderList = (items) => {
    imagesContainer.innerHTML = '';
    items.forEach(item => {
        const itemTemplate = imageTemplate.cloneNode(true);
        itemTemplate.querySelector('.image').src = item.thumbnailUrl;
        itemTemplate.querySelector('.image').dataset.id = item.id;
        imagesContainer.appendChild(itemTemplate)
    });
};

export {renderList, imagesContainer}