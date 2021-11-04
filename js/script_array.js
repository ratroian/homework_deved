console.log('---arrays task---');
const userArray = [2, 3, 5, 3];
const getMinElement = (array) => {
    let minElement = array[0];
    for (let i = 1; i <= array.length; i++) {
        if (array[i] < minElement) {
            minElement = array[i];
        }
    }
    console.log(minElement);
}

const getMaxElement = (array) => {
    let maxElement = array[0];
    for (let i = 1; i <= array.length; i++) {
        if (array[i] > maxElement) {
            maxElement = array[i];
        }
    }
    console.log(maxElement);
}

const getMinIndexElement = (array) => {
    let minElement = array[0];
    let minIndexElement = 0;
    for (let i = 1; i <= array.length; i++) {
        if (array[i] > minElement) {
            minIndexElement = i;
            minElement = array[i];

        }
    }
    console.log(minIndexElement);
}

const getMaxIndexElement = (array) => {
    let maxElement = array[0];
    let maxIndexElement = 0;
    for (let i = 1; i <= array.length; i++) {
        if (array[i] > maxElement) {
            maxIndexElement = i;
            maxElement = array[i];

        }
    }
    console.log(maxIndexElement);
}

const getSumNoPairIndex = (array) => {
    let sumPairIndex = 0;

    for (let i = 0; i <= array.length - 1; i++) {
        if (i % 2 !== 0) {
            sumPairIndex = sumPairIndex + array[i];
        }
    }
    console.log(`Summ ${sumPairIndex}`);
}

const getQuantityNoPairIndex = (array) => {
    let quantityPairIndex = 0;

    for (let i = 0; i <= array.length - 1; i++) {
        if (i % 2 !== 0) {
            quantityPairIndex = quantityPairIndex + 1;
        }
    }
    console.log(`quantity ${quantityPairIndex}`);
}

const mixArray = (array) => {
    const halfLength = userArray.length / 2;
    const div = halfLength + array.length % 2;
    for (let i = 0; i < div; i++) {
        let currentElement = array[i];
        array[i] = array[div + i];
        array[div + i] = currentElement
    }
    console.log(array)
}

const getBubbleSort = (array) => {
    for (let lengthIn = array.length; lengthIn > 0; lengthIn--) {
        for (let currentSwap = 0; currentSwap < lengthIn-1; currentSwap++) {
            if (array[currentSwap] > array[currentSwap + 1]) {
                let curentElement  = array[currentSwap];
                    array[currentSwap] = array[currentSwap + 1];
                    array[currentSwap + 1] = curentElement;
            }
        }
    }
    console.log(array);
}

const getSelectionSort = (array) => {
    let min;
    for (let outIterations = 0; outIterations < array.length - 1; outIterations++) {
        min = outIterations;
        for (let countInIterations = outIterations; countInIterations < array.length; countInIterations++) {
            if (array[countInIterations] < array[min] ){
                min = countInIterations;
            }
        }
        let temp = array[outIterations];
            array[outIterations] = array[min];
            array[min] = temp;
    }
    console.log(array);
};

const getInsertSort = (array) => {
    let current;
    let value;
    for (let i = 1; i < array.length; i++) {
        value = array[i];
        for (current = i - 1; current >= 0 && array[current] > value; j--) {
            array[current + 1] = array[current]
        }
        array[current + 1] = value;
    }
    console.log(array);
};

getMinElement(userArray);
getMaxElement(userArray);
getMinIndexElement(userArray);
getMaxIndexElement(userArray);
getSumNoPairIndex(userArray);
getQuantityNoPairIndex(userArray);
mixArray(userArray);
getBubbleSort(userArray);
getSelectionSort(userArray);
getInsertSort(userArray);