const {pgClient} = require('../pgdp');

const {performance} = require('perf_hooks');
const {getFactorialCycle, getFactorialRecoursion} = require('../../helpers/helper');
const DataBaseError = require('../../errors/error')

exports.findFactorial =  (type,number) => {
  switch (true){
    case type === 'cycle' :
      let timeLoop = performance.now();
      const factCycle = getFactorialCycle(number);
      timeLoop = performance.now() - timeLoop;
      return {fact: factCycle, time: timeLoop }
    case type === 'recursion' :
      let timeRec = performance.now();
      const factRec = getFactorialRecoursion(number);
      timeRec = performance.now() - timeRec;
      return {fact: factRec, time: timeRec }
  }
};

exports.getError = async () => {
  try {
    const res = await pgClient.query(`select * from person`);
    return { result: res.rows };
  } catch (e) {
    return {error:new DataBaseError(e.message)};
  }
};
