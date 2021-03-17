// ******* FREQUENCY COUNTERS *******
// NESTED LOOPS SOLUTION
function sameLoops(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

sameLoops([1, 2, 2], [1, 4, 4]);

// REFACTORED
function same(arr1, arr2) {
  //if length of arr1 and arr2 is not the same - return false
  if (arr1.length !== arr2.length) {
    return false;
  }
  // create 2 objects
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // loop over arr1 and add to the 1st object values as keys and their count as values.
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  // do the same for arr2
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // compare 2 objects:
  // loop over the keys of the 1st object. If the key doesn't exist in ob2 – return false.
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      console.log(key);
      return false;
    }
    // in the same loop, if obj1[key] !== obj2[key] return false – so compare the count of keys. if doesn't correspond - return false
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
  }
  // return true at the end of the function
  console.log(frequencyCounter1, frequencyCounter2);
  return true;
}

same([1, 2, 3], [1, 4, 9]);

// Write a function called sameFrequency. Given 2 positive integers, find out if the two numbers have the same frequency of digits.
// Sample input:
// sameFrequency(182, 281) // true
// sameFrequency(34, 14) // false
// sameFrequency(222, 22) // false

function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}

// Anagram function: check if a string is an anagram of another string

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    //if letter exists, increment, othrwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter, or letter is 0 then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
