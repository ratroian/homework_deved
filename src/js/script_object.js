console.log('---getCookingTime---');
const getCookingTime = (eggsAmount) => {
    let result;
    const timeValue = 5;
    const maxItemsValue = 5;
    const quantityCycle = Math.ceil(eggsAmount/maxItemsValue);
    result = timeValue * quantityCycle;
    
    return result;
};
console.log(getCookingTime(12))
console.log('---getNumber---');

const getNumber = (array) => {
    let result ;
    const isNoPairedValueArray = array.filter((item) => !(item % 2 === 0));
    const isPairedValueArray = array.filter((item) => item % 2 === 0);
    if (isPairedValueArray.length <= 1) {
        result = isPairedValueArray[0];
    } else {
        result = isNoPairedValueArray[0];
    };

    return result;
};
console.log(getNumber([1,1,1,2,3,3,3,3]));
console.log('---findTitle---');

const testArr3 = [{
    title: 'Some title'
    }, 
    {
    title: 'I like JS'
    },
    {
    user: 'This obj doesnt have key title js'
    }, 
    {
    title: 'Js - is the best!'
    }];

const findTitle = (array, string) => {
    let result;
    const requiredKey = 'title';
    const userString = string.toString().toLowerCase();
    const arrayFromKeys = array.filter(element => element.hasOwnProperty(requiredKey));
    result = arrayFromKeys.filter(element => element[requiredKey].toLowerCase().includes(userString));

    return result;
};
console.log(findTitle(testArr3, 'js'));
console.log('---countCharacters---');

const countCharacters = (string) => {
    const arrayFromString = string.split('');
    let result = {};
    arrayFromString.forEach(item => {
        result[item] = (arrayFromString.filter(element => element === item).length);
    })

    return result    
}
console.log(countCharacters('development by creating an account on GitHub'));
console.log('---getNextPalindrome---')

const getNextPalindrome = (number) => {
    const minPalindrome = 11;
    if (number > 10) {
    number++;
        while (true) {
            if (
            number.toString().split('').reverse().join('') == number) {
            return number;
            } else {
            number++;
            }
        }
    } else {
        return minPalindrome;
    };
}
console.log(getNextPalindrome(9));
console.log('---set---');

const set = (array) => {
    let userSet = [];
    array.forEach((item) => {
        !userSet.includes(item) ? userSet.push(item) : true;
    });
    userSet = userSet.reduce((accumulator, item, index) => {
        accumulator[index + 1] = item;
        return accumulator;
    }, {});
    userSet.add = (value) => {
        if (!Object.values(userSet).includes(value)) {
        userSet[value] = value;
        } else {
        return '${value} already in Set';
        }
    };
    userSet.has = (value) => {
        return Object.values(userSet).includes(value);
    };
    userSet.remove = (value) => {
        if (Object.values(userSet).includes(value)) {
        delete userSet[value];
        } else {
        return '${value} does not in Set';
        }
    };
    return userSet;
}

const newSet = set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
newSet.add(10);
console.log(newSet, newSet.has(10), newSet.remove(10), newSet);
