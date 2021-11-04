console.log('---conditional operators task---')

const getMathResult = (firstValue, secondValue) => {
    let result;
    if (firstValue % 2 === 0) {
        result = firstValue*secondValue;
    } else {
        result = firstValue+secondValue;
    };
    console.log(result)
};

const getQuarterPoint = (x, y) => {
    let quarterPoint;
    switch (true) {
        case (x > 0 && y > 0):
            quarterPoint = '1 quarter';
            break;
        case (x < 0 && y > 0):
            quarterPoint = '2 quarter';
            break;
        case (x < 0 && y < 0):
            quarterPoint = '3 quarter';
            break;
        case (x > 0 && y < 0):
            quarterPoint = '4 quarter';
            break;
    }
    console.log(quarterPoint);
};

const getSumm = (firstValue, secondValue, thirdValue) => {
    let result = 0;
    (firstValue > 0) ? result = firstValue + result : result;
    (secondValue > 0) ? result = result + secondValue : result;
    (thirdValue > 0) ? result = result + thirdValue : result;

    console.log(result);
}

const calculateNumbers = (firstValue, secondValue, thirdValue) => {
    const firstExample = firstValue*secondValue*thirdValue;
    const secondExample = firstValue+secondValue+thirdValue;
    let result;
    if (firstExample > secondExample) {
        result = firstExample + 3;
    } else {
        result = secondExample + 3;
    };
    console.log(result)
};

const getRating = (rating) => {
    const maxRatingF = 19;
    const maxRatingE = 39;
    const maxRatingD = 59;
    const maxRatingC = 74;
    const maxRatingB = 89;
    const maxRatingA = 100;
    switch (true) {
        case (rating <= maxRatingF && rating >= 0):
            console.log('Оценка F');
            break;
        case (rating > maxRatingF && rating <= maxRatingE):
            console.log('Оценка E');
            break;
        case (rating > maxRatingE && rating <= maxRatingD):
            console.log('Оценка D');
            break;
        case (rating > maxRatingD && rating <= maxRatingC):
            console.log('Оценка C');
            break;
        case (rating > maxRatingC && rating <= maxRatingB):
            console.log('Оценка B');
            break;
        case (rating > maxRatingB && rating <= maxRatingA):
            console.log('Оценка A');
            break;
        default: 
        console.log('Error')
    };
};

getMathResult(3, 4);
getQuarterPoint(3, 6);
getSumm(5,-5,5);
calculateNumbers(3,3,0)
getRating(55);
