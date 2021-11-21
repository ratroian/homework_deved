const tickets = (persons) => {
    const positiveResult = 'Yes';
    const negativeResult = 'No';
    let result;
    let cash25 = 0;
    let cash50 = 0;
    if (persons[0] != 25) {
        result = negativeResult;
    }
    const cashCalc = (cash) => {
        switch (cash) {
            case (25):
                cash25++;
                result = positiveResult;
                break;
            case (50):
                cash50++;
                cash25--;
                result = positiveResult;
                break;
            case (100):
                if (cash50 > 0) {
                    cash50--;
                    cash25--;
                } else {
                    cash25 -=3;
                };
                result = positiveResult;
                break
            default :
                result = negativeResult;
        }
    };
    for (let i = 0; i < persons.length; i++) {
        if(cash50 < 0 || cash25 < 0) {
            result = negativeResult;
        } else {
            cashCalc(persons[i])
        }
    }
    return result;
}
console.log(tickets([25, 25, 25, 100, 25, 50, 25, 50]));

const getSum = (firstValue, secondValue) => {
    const firstValueArray = firstValue.split('');
    const secondValueArray = secondValue.split('');
    if (firstValueArray.length > secondValueArray.length) {
        while (secondValueArray.length !== firstValueArray.length) {
            secondValueArray.unshift('0');
        }
    } else {
        while (firstValueArray.length !== secondValueArray.length) {
            firstValueArray.unshift('0');
        }
    };
    let sumInIndex = 0;
    let temp = 0;
    const reverseFirstArray = firstValueArray.reverse();
    const reverseSecondArray = secondValueArray.reverse();
    const result = firstValueArray.map((value, index, array) => {
        sumInIndex = +reverseFirstArray[index] + +reverseSecondArray[index] + +temp;
        if (sumInIndex <= 9) {
            temp = 0;
        } else {
            const rank = String(sumInIndex).split('');
            temp = +rank[0];
            sumInIndex = +rank[1];
        }
        return sumInIndex;
    });
    if ((+reverseFirstArray[reverseFirstArray.length - 1] + +reverseSecondArray[reverseSecondArray.length - 1 ])>9) {
        result[result.length-1] = `1${result[result.length-1]}`;
    }

    return result.reverse().join('')
}
console.log(getSum('999999', '333333'));

const listOfPosts2 = [
    {
        id: 1,
        post: 'some post1',
        title: 'title 1',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            }
        ]
    },
    {
        id: 2,
        post: 'some post2',
        title: 'title 2',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            },
            {
                id: 1.3,
                comment: 'some comment3',
                title: 'title 3',
                author: 'Rimus'
            }
        ]
    },
    {
        id: 3,
        post: 'some post3',
        title: 'title 3',
        author: 'Rimus'
    },
    {
        id: 4,
        post: 'some post4',
        title: 'title 4',
        author: 'Uncle'
    }

]

const getQuantityPostsByAuthor = (listOfPosts, author) => {
    const requiredParameter = 'comments';
    let posts = 0;
    let comments = 0;
    for (let item of listOfPosts) {
        if (item.author === author) {
            posts++
        }
        if (Object.keys(item).includes(requiredParameter)) {
            item.comments.forEach(elem => {
                if (elem.author === author) {
                    comments++
                }
            })
        };
    };
    return `Posts ${posts}, comments ${comments}`
}
getQuantityPostsByAuthor(listOfPosts2, 'Uncle')

let sumObject = {
    getSum(min, max) {
        return min + max;
    }
};

const cachingDecorator = (func, hash) => {
    let cache = new Map();
    return function() {
        let key = hash(arguments); // (*)
        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = func.call(this, ...arguments);

        cache.set(key, result);
        return result;
    };
}

function hash(args) {
    return args[0] + ',' + args[1];
}

sumObject.getSum = cachingDecorator(sumObject.getSum, hash);

const a = sumObject.getSum(3, 5);
const b = sumObject.getSum(3, 5); // из кеша
console.log(a==b)