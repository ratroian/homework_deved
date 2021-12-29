import '../styles/main.css';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const getCookingTime = (eggsAmount: number): number => {
    const timeValue = 5;
    const maxItemsValue = 5;
    const quantityCycle: number = Math.ceil(eggsAmount / maxItemsValue);

    return timeValue * quantityCycle;
};

const getNumber = (array: Array<number>): number => {
    let result: number;
    const isNoPairedValueArray: Array<number> = array.filter((item) => !(item % 2 === 0));
    const isPairedValueArray: Array<number> = array.filter((item) => item % 2 === 0);
    if (isPairedValueArray.length <= 1) {
        [result] = isPairedValueArray;
    } else {
        [result] = isNoPairedValueArray;
    }

    return result;
};
type TObjectTitle = {
    title: string
};

const testArr3 = [{
    title: 'Some title',
},
{
    title: 'I like JS',
},
{
    user: 'This obj doesnt have key title js',
},
{
    title: 'Js - is the best!',
}];

const findTitle = (array: Array<TObjectTitle>, string: string): Array<TObjectTitle> => {
    string = string.toLowerCase().trim();
    const result = array.reduce((acc, { title = '' }) => (title.toLowerCase().trim().includes(string) ? [...acc, { title }] : acc), []);
    return result;
};

type TCountChar = {
    [key: string]: number
};

type TCountEmpty = {
    message: string
};

const countCharacters = (string: string): TCountChar => {
    const arrayFromString = string.split('');
    const result = {};
    arrayFromString.forEach((item) => {
        result[item] = (arrayFromString.filter((element) => element === item).length);
    });

    return result;
};

const getNextPalindrome = (number: number): number => {
    if (number < 11) return 11;
    number += 1;
    const reverseNumber = Number([String(number)].reverse().join(''));
    if (number === reverseNumber) return reverseNumber;
    return getNextPalindrome(number);
};
