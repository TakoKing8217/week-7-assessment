// Step 2: Write Code
// 1) Sum Zero
const addToZero = (num) => {
  for (let i = 0; i < num.length; i++) {
    for (let j = 1 + i; j < num.length; j++) {
      if (num[i] + num[j] === 0) {
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

// Time = O(n)

function countLettersRoundTwo(str) {
  str = str.toLowerCase().replace(/([^a-z])+/g, "");
  console.log({ str });
  let letters = {};

  for (let i = 0; i < str.length; i++) {
    if (letters.hasOwnProperty(str[i])) {
      letters[str[i]]++;
    } else {
      letters[str[i]] = 0;
    }
  }
  return letters;
}
