export const imagesContainer = <HTMLElement>document.querySelector('.images-list');
const imageTemplate = document.querySelector<HTMLTemplateElement>('#image-template').content;

export const renderList = (items) => {
    imagesContainer.innerHTML = '';
    items.forEach((item) => {
        const itemTemplate = <HTMLTemplateElement>imageTemplate.cloneNode(true);
        (<HTMLImageElement>itemTemplate.querySelector('.image')).src = item.thumbnailUrl;
        (<HTMLImageElement>itemTemplate.querySelector('.image')).dataset.id = item.id;
        imagesContainer.appendChild(itemTemplate);
    });
};
