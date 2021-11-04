console.log('---cicles task---');

const getSummOfRange = (minValue, maxValue) => {
    let summ = 0;
    let quantity = 0;
    for (let i = minValue; i <= maxValue; i++) {
        if ((i % 2) === 0) {
            summ = summ + i;
            quantity = quantity + 1;
        }
    };
    console.log(quantity,'quantity');
    console.log(summ,'summ');
};

const getElementaryNumber = (number) => {
    for (let i = 0; i <= number; i++) {
        if ((number % i) !== 0 && (number % 2) !== 0) {
            console.log(`${number} простое число`)
        } else if ((number % i) === 0 && (number % 2) === 0) {
            console.log(`${number} НЕ простое число`)
        };
    };
};

const getSquareRoot = (value) => {
    let provisionalMeaning = 1;
    while (provisionalMeaning*provisionalMeaning <= value) {
        provisionalMeaning++;
    };
    console.log(provisionalMeaning-1);
};

const getFactorial= (value) => {
    let provisionalMeaning = 1;
    if (value > 1) {
        for (let i = 2; i <= value; i++) {
            provisionalMeaning = provisionalMeaning * i;
        }
    }
    console.log(provisionalMeaning);
}

const getSumNumbers = (value) => {
    let summ = 0;
    if (value === Infinity) {
        summ = Infinity
    } else {
    while (value > 0) {
        summ = summ + value % 10;
        value = Math.floor(value/10);
        }
    }
    console.log(summ);
}

const getReversedValue = (value) => {
    let result = 0;
    while (value) {
        result = result * 10 + value % 10;
        value = Math.floor(value / 10);
    }

    console.log(result);
}

getSummOfRange(1, 99);
getElementaryNumber(1);
getSquareRoot(4);
getFactorial(4);
getSumNumbers(555);
getReversedValue(443);