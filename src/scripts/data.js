const API = 'https://jsonplaceholder.typicode.com/photos?_limit=250';
let IMAGES = [];

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
            return IMAGES
        })
        .catch((error) => console.log(error));
};

export {getData, IMAGES}