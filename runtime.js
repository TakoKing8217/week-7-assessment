/*
the function doublerAppend scales better because it uses push instead of unshift. Unshift rewrites every single element's id#, where push just adds it to the end. 

*/

const perf = require("execution-time")();

function doublerAppend(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }
}

function doublerInsert(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }
}

function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// How long does it take to double every number in a given array?
let appendArr = [];
let insertArr = [];
// Try it with first function
perf.start(); // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();

insertArr.push("tiny", resultsInsert.preciseWords);
appendArr.push("tiny", resultsAppend.preciseWords);

// Try it with first function
perf.start(); // Starts timer
doublerAppend(smallArray);
resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(smallArray);
resultsInsert = perf.stop();

insertArr.push("small", resultsInsert.preciseWords);
appendArr.push("small", resultsAppend.preciseWords);

// Try it with first function
perf.start(); // Starts timer
doublerAppend(mediumArray);
resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(mediumArray);
resultsInsert = perf.stop();

insertArr.push("medium", resultsInsert.preciseWords);
appendArr.push("medium", resultsAppend.preciseWords);

// Try it with first function
perf.start(); // Starts timer
doublerAppend(largeArray);
resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(largeArray);
resultsInsert = perf.stop();

insertArr.push("large", resultsInsert.preciseWords);
appendArr.push("large", resultsAppend.preciseWords);

// Try it with first function
perf.start(); // Starts timer
doublerAppend(extraLargeArray);
resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
resultsInsert = perf.stop();

insertArr.push("extraLarge", resultsInsert.preciseWords);
appendArr.push("extraLarge", resultsAppend.preciseWords);

console.log({ insertArr }, { appendArr });

// μs === microsecond === 0.000001
// ms
