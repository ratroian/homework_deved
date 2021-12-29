import { IMAGES } from './data';
import { renderList } from './render';

export const QUANTITY_ITEMS = 10;

export const makePagination = (event): void => {
    const { target } = event;
    const page = +target.textContent;
    renderList(IMAGES.slice(QUANTITY_ITEMS * (page - 1), QUANTITY_ITEMS * (page - 1) + QUANTITY_ITEMS));
};
