import {IMAGES} from "./data";
import {renderList} from "./render.js";

const QUANTITY_ITEMS = 50;

const makePagination = (event) => {
    let target = event.target;
    let page = +target.textContent;
    renderList(IMAGES.slice(QUANTITY_ITEMS* (page-1), QUANTITY_ITEMS* (page-1) + QUANTITY_ITEMS));
};

export {makePagination, QUANTITY_ITEMS};