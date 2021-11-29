import '../css/style.css';
import {QUANTITY_ITEMS} from './pagination.js';
import {renderList} from './render.js';
import {getData, IMAGES} from './data.js';
import{makePagination} from './pagination.js';
import {pages} from './listeners'

getData().then(() => renderList(IMAGES.slice(0, QUANTITY_ITEMS)));
pages.addEventListener('click', makePagination)









