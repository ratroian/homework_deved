import axios from 'axios';

const API = 'https://jsonplaceholder.typicode.com/photos?_limit=80';
// eslint-disable-next-line import/no-mutable-exports
export let IMAGES = [];

type TPhoto = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
};

export const getData = async (): Promise<Array<TPhoto>> => {
    const response = await axios.get(API);
    IMAGES = response.data;
    return IMAGES;
};
