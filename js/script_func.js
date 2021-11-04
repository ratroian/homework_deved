console.log('---function task---');

const getDay = (day) => {
    let dayName;
    switch (day) {
        case 1: 
            dayName = 'Понедельник'; 
            break;
        case 2: 
            dayName = 'Вторник'; 
            break;
        case 3: 
            dayName = 'Среда'; 
            break;
        case 4: 
            dayName = 'Четверг'; 
            break;
        case 5: 
            dayName = 'Пятница'; 
            break;
        case 6: 
            dayName = 'Суббота'; 
            break;
        case 7: 
            dayName = 'Воскресенье'; 
            break;
        default: 'Неверные данные'
    }
    console.log(dayName);
};

const getDistance = (firstPointX, firstPointY, secondPointX, secondPointY) => {
    const firstPoint = [firstPointX, firstPointY];
    const secondPoint = [secondPointX, secondPointY];

    let distance = Math.sqrt(Math.pow(firstPoint[1] - firstPoint[0], 2) + Math.pow(secondPoint[1] - secondPoint[0], 2));
    console.log(distance)
};

const getNumberToText = (num) => {
    let str = '';
    const arrNum = num.toString().split('');
    const arrNumRes = [];
    for (let i = 0; i < arrNum.length; i++) {
        arrNumRes.push(arrNum[i]);
    }
    if (arrNum.length == 3) {
        if (arrNumRes[1] == '1') {
            str = (getHundreds(arrNumRes[0]) + ' '+ teens(arrNumRes[2]));
        } else {
            str = (getHundreds(arrNumRes[0]) + ' '+ getDecades(arrNumRes[1]) + ' ' + getUnits(arrNumRes[2]));
        }
    } else if (arrNum.length == 2) {
        if (arrNumRes[0] == '1') {
            str = (teens(arrNumRes[1]));
        } else {
            str = (getDecades(arrNumRes[0]) + ' ' + getUnits(arrNumRes[1]));
        }
    } else if (arrNum.length == 1) {
        if (arrNumRes[0] == '0') {
            str = 'ноль';
        } else {
            str = (getUnits(arrNumRes[0]));
        }
    } else {
        str = 'Что-то пошло не так!';
    }
    console.log(str);
};

const getHundreds = (num) => {
    switch (num) {
        case '1':
            return 'сто';
        case '2':
            return 'двести';
        case '3':
            return 'триста';
        case '4':
            return 'четыреста';
        case '5':
            return 'пятьсот';
        case '6':
            return 'шестьсот';
        case '7':
            return 'семьсот';
        case '8':
            return 'восемьсот';
        case '9':
            return 'девятьсот';
        default:
            return 'Что-то пошло не так';
    };
};

const getDecades = (num) => {
    switch(num) {
        case '0':
            return '';
        case '1':
            return 'десять';
        case '2':
            return 'двадцать';
        case '3':
            return 'тридцать';
        case '4':
            return 'сорок';
        case '5':
            return 'пятьдесят';
        case '6':
            return 'шестьдесят';
        case '7':
            return 'семьдесят';
        case '8':
            return 'восемьдесят';
        case '9':
            return 'девяносто';
        default:
            return 'Что-то пошло не так';
    };
};

const getUnits = (num, fem) => {
    switch (num) {
        case '0':
            return '';
        case '1':
            return fem ? 'одна' : 'один';
        case '2':
            return fem ? 'две' : 'два';
        case '3':
            return 'три';
        case '4':
            return 'четыре';
        case '5':
            return 'пять';
        case '6':
            return 'шесть';
        case '7':
            return 'семь';
        case '8':
            return 'восемь';
        case '9':
            return 'девять';
        default:
            return 'Что-то пошло не так';
    };
};

const getTeens = (num) => {
    let str = '';
    switch (num) {
        case '1':
            str = 'один';
            break;
        case '2':
            str = 'две';
            break;
        case '3':
            str = 'три';
            break;
        case '4':
            str = 'четыр';
            break;
        case '5':
            str = 'пят';
            break;
        case '6':
            str = 'шест';
            break;
        case '7':
            str = 'сем';
            break;
        case '8':
            str = 'восем';
            break;
        case '9':
            str = 'девят';
            break;
        default:
            str = 'Что-то пошло не так';
    };
    return str + 'надцать';
};

getDay(5);
getDistance(-1, 3, 6, 2);
getNumberToText(123);

console.log('---end home work---');

// const userArrayCW = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const chunks = 2;

// const getChunksOfArray = (array, chunks) => {
//     const chunksQuantity = Math.ceil(array.length / chunks);
//     const newArray = new Array(chunksQuantity);
//     for (let i = 0; i < chunksQuantity; i++) {
//         newArray[i] = [];
//         console.log(newArray[i])
//     };
//     let additionalCount = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (i !== 0 && i % chunks === 0) {
//             additionalCount++;
//         }
//         newArray[additionalCount].push(array[i]);
//     };
//     console.log (newArray);
// };

// getChunksOfArray(userArrayCW, chunks)