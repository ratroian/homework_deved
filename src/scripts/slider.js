const imageItem = 'image__item';
const buttonActive = 'active';
const prevImage = 'prev';
const showImage = 'current';
const nextImage = 'next';
const nextDir = 'next-image';
const prevDir = 'prev-image';

export default class Slider {
    constructor(interval) {
        this.interval = interval;

        this.preventButton = document.querySelector('#prev'),
        this.nextButton = document.querySelector('#next'),
        this.playButton = document.querySelector('#play'),
        this.pauseButton = document.querySelector('#pause'),
        this.images = document.querySelectorAll('.image__item'),

        this.amountPhotos = this.images.length;
        this.nextButton.addEventListener('click', this.getNext);
        this.preventButton.addEventListener('click', this.getPrev);
        this.pauseButton.addEventListener('click', this.handlePause);
        this.playButton.addEventListener('click', this.clickPlay);
        this.goSlider();
    }

    goSlider = () => {
        this.clickPlay();
    };

    startShow = () => {
        this.idTimeout = setTimeout(() => {
            this.getNext();
            this.startShow();
        }, this.interval);
    };

    stopShow = () => {
        clearTimeout(this.idTimeout);
        this.pauseButtonToggle();
        delete this.idTimeout;
    };

    playButtonToggle = () => {
        this.playButton.classList.add(buttonActive);
        this.pauseButton.classList.remove(buttonActive);
    };

    pauseButtonToggle = () => {
        this.pauseButton.classList.add(buttonActive);
        this.playButton.classList.remove(buttonActive);
    };

    handlePause = () => {
        if (!this.idTimeout) return;
        this.stopShow();
    };

    clearClassList = () => {
        this.images.forEach((item) => {
            item.classList.value = imageItem;
        });
    };

    findShowImage = () => (
        Array.from(this.images)
            .findIndex((item) => item.classList.contains(showImage))
    );

    getImages = (prev, current, next, direction) => {
        this.images[prev].classList.add(prevImage);
        this.images[current].classList.add(showImage);
        this.images[current].classList.add(direction);
        this.images[next].classList.add(nextImage);
    };

    getPrevIndex = (index) => {
        if (index - 1 < 0) {
            return this.amountPhotos - 1;
        } else {
            return index - 1
        }
    };

    getNextIndex = (index) => {
        if (index + 1 === this.amountPhotos) {
            return 0;
        } else {
            return index + 1
        }
    };

    getPrev = (event) => {
        if (event) this.stopShow();
        const next = this.findShowImage();
        const current = this.getNextIndex(next);
        const prev = this.getPrevIndex(current);
        this.clearClassList();
        this.getImages(prev, current, next, prevDir);
    };

    getNext = (event) => {
        if (event) this.stopShow();
        const prev = this.findShowImage();
        const current = this.getNextIndex(prev);
        const next = this.getPrevIndex(current);
        this.clearClassList();
        this.getImages(prev, current, next, nextDir);
    };

    clickPlay = () => {
        if (this.idTimeout) return;
        this.startShow();
        this.playButtonToggle();
    };
}
