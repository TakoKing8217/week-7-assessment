/*
The function doublerAppend scales better than doublerInsert because doublerAppend uses push instead of unshift. As doublerAppend scaled, it gets way way longer, but doublerAppend is pretty much shorter as the arrays get longer comparitively. Unshift rewrites every single element's id#, where push just adds it to the end, which doesn't rewried every single element's "address".

// μs === microsecond === 0.000001 seconds
// ms === millisecond === 0.001 seconds

Below are the times for each function as scaled: 

                  insertArr         appendArr:
    'tiny'        '25.875 μs',      '70.125 μs',
    'small'       '12.625 μs',      '11.458 μs',
    'medium'      '154.209 μs',     '48.5 μs',
    'large'       '9.529583 ms',    '421.916 μs',
    'extraLarge'  '773.461833 ms'   '2.142416 ms'
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












// The whole section below was me testing out functions in functions.js. I'm still confused, but that's okay. 

// const isPanagram = (sentence) => {
//   return (sentence.match(/([a-z])(?!.*\1)/g) || []).length === 26;
// };

// perf.start();
// isPanagram("The quick brown fox jumps over the lazy dog!");
// resultsAppend = perf.stop();
// console.log("full correct thing", resultsAppend.preciseWords);
// perf.start();
// isPanagram("The quick brown fox jumps over the tired dog!");
// resultsAppend = perf.stop();
// console.log("long incorrect thing", resultsAppend.preciseWords);
// perf.start();
// isPanagram(
//   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
// );
// resultsAppend = perf.stop();
// console.log("tiny wrong", resultsAppend.preciseWords);
// perf.start();
// isPanagram(
//   "Nathan broke cautious dental flowers by growing jelly monster petunias so as to be Lazarus by fixing the queen's victory!Nathan broke cautious dental flowers by growing jelly monster petunias so as to be Lazarus by fixing the queen's victoryNathan broke cautious dental flowers by growing jelly monster petunias so as to be Lazarus by fixing the queen's victoryNathan broke cautious dental flowers by growing jelly monster petunias so as to be Lazarus by fixing the queen's victoryNathan broke cautious dental flowers by growing jelly monster petunias so as to be Lazarus by fixing the queen's victoryNathan broke cautious dental flowers by growing jelly monster petunias so as to be Lazarus by fixing the queen's victoryNathan broke cautious dental flowers by growing jelly monster petunias so as to be Lazarus by fixing the queen's victoryNathan broke cautious dental flowers by growing jelly monster petunias so as to be Lazarus by fixing the queen's victoryNathan broke cautious dental flowers by growing jelly monster petunias so as to be Lazarus by fixing the queen's victoryNathan broke cautious dental flowers by growing jelly monster petunias so as to be Lazarus by fixing the queen's victoryNathan broke cautious dental flowers by growing jelly monster petunias so as to be Lazarus by fixing the queen's victoryNathan broke cautiousthe queen's victoryNathan broke cautious dental flowers by growing jelly monster petunias so as to be Lazarus by fixing the queen's victoryNathan broke cautious dental flowers by growing jelly monster petental flowers by growing jelly monster petunias so as to be Lazarus by fixing the queen's victoryNathan broke cautious dental flowers by growing jelly monster petunias so as to be Lazarus by fixing the queen's victoryNathan broke cautious dental flowers by growing jelly monster petunias so as to be Lazarus by fixing the queen's victory"
// );
// resultsAppend = perf.stop();
// console.log("large true", resultsAppend.preciseWords);
