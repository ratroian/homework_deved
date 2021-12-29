import '../css/style.css';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { QUANTITY_ITEMS, makePagination } from './pagination';
import { renderList } from './render';
import { getData, IMAGES } from './data';
import { pages } from './popup';

getData().then(() => renderList(IMAGES.slice(0, QUANTITY_ITEMS)));

pages.addEventListener('click', makePagination);
