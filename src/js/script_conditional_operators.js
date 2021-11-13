console.log('---conditional operators task---')

const getMathResult = (firstValue, secondValue) => {
    let result;
    if (firstValue % 2 === 0) {
        result = firstValue*secondValue;
    } else {
        result = firstValue+secondValue;
    };
    return result;
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
    return quarterPoint;
};

const getSumm = (firstValue, secondValue, thirdValue) => {
    let result = 0;
    (firstValue > 0) ? result = firstValue + result : result;
    (secondValue > 0) ? result = result + secondValue : result;
    (thirdValue > 0) ? result = result + thirdValue : result;

    return result;
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

    return result;
};

const getRating = (rating) => {
    let studentRating;
    const maxRatingF = 19;
    const maxRatingE = 39;
    const maxRatingD = 59;
    const maxRatingC = 74;
    const maxRatingB = 89;
    const maxRatingA = 100;
    switch (true) {
        case (rating <= maxRatingF && rating >= 0):
            studentRating = 'Оценка F';
            break;
        case (rating > maxRatingF && rating <= maxRatingE):
            studentRating = 'Оценка E';
            break;
        case (rating > maxRatingE && rating <= maxRatingD):
            studentRating = 'Оценка D';
            break;
        case (rating > maxRatingD && rating <= maxRatingC):
            studentRating = 'Оценка C';
            break;
        case (rating > maxRatingC && rating <= maxRatingB):
            studentRating = 'Оценка B';
            break;
        case (rating > maxRatingB && rating <= maxRatingA):
            studentRating = 'Оценка A';
            break;
        default: 
        studentRating = 'Error';
    };
    
    return studentRating;
};

getMathResult(3, 4);
getQuarterPoint(3, 6);
getSumm(5,-5,5);
calculateNumbers(3,3,0)
getRating(55);
