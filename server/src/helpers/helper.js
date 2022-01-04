const getFactorialCycle = (number) => {
    let fact = 1;
    for(let i = 2; i <= number; i++) {
      fact = fact * i
    }
   return fact;
  };

const getFactorialRecoursion  = (number, currentValue = 1, fact = 1) => {
    return currentValue >= number ? fact : findFactorialRecoursion(number, ++currentValue, fact = fact * currentValue)
  }

module.exports = {getFactorialCycle, getFactorialRecoursion}
