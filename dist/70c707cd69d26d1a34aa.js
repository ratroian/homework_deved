function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import '../styles/main.css';
var imagesContainer = document.querySelector('.images-list');
var imageTemplate = document.querySelector('#image-template').content;
var popupTemplate = document.querySelector('#popup-template').content; // const fullImage = popupTemplate.querySelector('.image-full');
// const titleImage = popupTemplate.querySelector('.title')

var body = document.querySelector('body');
var pages = document.querySelector('.pages');
var API = 'https://jsonplaceholder.typicode.com/photos?_limit=250';
var quantityItems = 50;
var IMAGES = [];
var popupElement;

var getData = function getData() {
  return fetch(API).then(function (response) {
    if (response.ok) {
      return response;
    }

    throw new Error("".concat(response.status, " \u2014 ").concat(response.statusText));
  }).then(function (response) {
    return response.json();
  }).then(function (posts) {
    IMAGES = _toConsumableArray(posts);
    console.log(IMAGES);
    return IMAGES;
  })["catch"](function (error) {
    return console.log(error);
  });
};

var renderList = function renderList(items) {
  imagesContainer.innerHTML = '';
  items.forEach(function (item) {
    var itemTemplate = imageTemplate.cloneNode(true);
    itemTemplate.querySelector('.image').src = item.thumbnailUrl;
    itemTemplate.querySelector('.image').dataset.id = item.id;
    imagesContainer.appendChild(itemTemplate);
  });
};

getData().then(function () {
  return renderList(IMAGES.slice(0, quantityItems));
});

var onPopupEscKeydown = function onPopupEscKeydown(evt) {
  if (isEscEvent(evt)) {
    messageDeleteHandler();
    body.removeEventListener('keydown', onPopupEscKeydown);
  }
};

var isEscEvent = function isEscEvent(evt) {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

var makePagination = function makePagination(event) {
  var target = event.target;
  var page = +target.textContent;
  console.log(target.textContent);

  if (Number(page)) {
    renderList(IMAGES.slice(quantityItems * (page - 1), quantityItems * (page - 1) + quantityItems));
  } else if (target.textContent == 'forward') {
    renderList(IMAGES.slice(quantityItems * (+target.textContent + 1), quantityItems * (+target.textContent + 1) + quantityItems));
    console.log('13434');
  } else if (target == '<') {
    renderList(IMAGES.slice(quantityItems * page, quantityItems * (page - 1) + quantityItems));
  }
};

var messageDeleteHandler = function messageDeleteHandler() {
  var newPopup = document.querySelector('.wrapper-full');
  newPopup.remove();
  window.removeEventListener('keydown', onPopupEscKeydown);
};

var createPopup = function createPopup(event) {
  var target = event.target;
  var idItem = +target.dataset.id;
  var urlImage = IMAGES.find(function (item) {
    return item.id === idItem;
  });
  popupElement.querySelector('.image-full').src = urlImage.url;
  return popupElement;
};

var showPopup = function showPopup(image) {
  var target = image.target;

  if (target.classList.contains('images-list')) {
    return;
  }

  popupElement = popupTemplate.cloneNode(true);
  createPopup(image);
  body.appendChild(popupElement);
  var newPopup = document.querySelector('.wrapper-full');
  newPopup.addEventListener('click', messageDeleteHandler);
  window.addEventListener('keydown', onPopupEscKeydown);
};

imagesContainer.addEventListener('click', showPopup);
pages.addEventListener('click', makePagination);