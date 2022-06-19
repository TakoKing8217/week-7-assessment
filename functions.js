// Step 2: Write Code
// 1) Sum Zero

// O(n^2) because it has two nested for loops. 

const addToZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1 + i; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return true;
      }
    }
  }
  return false;
};

console.log(addToZero([]), "should be false");
console.log(addToZero([1]), "should be false");
console.log(addToZero([1, 2, 3]), "should be false");
console.log(addToZero([1, 2, 3, -2]), "should be true");

// 2) Unique Character

// O(n) because it will scale 1:1 consistently for however long the string is. 

const hasUniqueChars = (str) => {
  let arr = [];
  let strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    let theLetterInQuestion = strArr[i];
    if (arr.includes(theLetterInQuestion)) {
      return false;
    } else {
      arr.push(theLetterInQuestion);
    }
  }
  return true;
};

console.log(hasUniqueChars("Monday"), "should be true");
console.log(hasUniqueChars("Moonday"), "should be false");
console.log(hasUniqueChars("Moma"), "should be false");

// (I interpreted this problem to consider "M" and "m" to be different characters, but if this is not the case, the following function would alleviate the situation.)
// const hasUniqueChars = (str) => {
//   let arr = [];
//   let strArr = str.split("");
//   for (let i = 0; i < strArr.length; i++) {
//     let theLetterInQuestion = strArr[i].toLowerCase();
//     if (arr.includes(theLetterInQuestion)) {
//       return false;
//     } else {
//       arr.push(theLetterInQuestion);
//     }
//   }
//   return true;
// };

// 3) Pangram Sentence

// O(log n) I'm very unsure about this one. Since the longer the string is, the more likely there will be each letter of the alphabet is, it will be. But at the same time, it could be O(1) because the match function might just Zap the array. I will try to check on this. This one's runtime is strange. 

const isPanagram = (sentence) => {
  return (sentence.match(/([a-z])(?!.*\1)/g) || []).length === 26;
};

console.log(isPanagram("The quick brown fox jumps over the lazy dog!"));
console.log(isPanagram("The quick brown fox jumps over the tired dog!"));
console.log(isPanagram("!"));
console.log(
  isPanagram(
    "Nathan broke cautious dental flowers by growing jelly monster petunias so as to be Lazarus by fixing the queen's victory!"
  )
);

// 4) Longest Word

// O(n) because the array will loop once for each item in the array, thus increasing at a 1:1 rate.

let findLongestWord = (arr) => {
  let longestLength = 0;
  for (let i = 0; i < arr.length; i++) {
    let wordLength = arr[i].split("").length;
    if (wordLength > longestLength) {
      longestLength = wordLength;
    }
  }
  return longestLength;
};

console.log(findLongestWord(["hi", "hello"]), "should be 5");
console.log(findLongestWord(["fifteen", "hello"]), "should be 7");
console.log(
  findLongestWord([
    "fifteen",
    "hi",
    "hello",
    "afganistan",
    "orange",
    "refrigerator",
  ]),
  "should be 12"
);
console.log(findLongestWord(["hi", "I"]), "should be 1");

