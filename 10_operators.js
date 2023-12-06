//* Conditional Ternary Operator
// one-line if/else statement
// (condition) ? 'trueCode' : 'falseCode'

//! isGreaterThan
const isGreaterThan = (a, b) => {
  return (a > b) ? 'a is greater than b' : 'a is less than b';
};

//? console.log(isGreaterThan(10, 5));

//* Multiple Ternary Operator (Chaining)
// multiple lines if/else statements
// (firstCond ? trueCode : secondCond ? true code : falseCode)
// the false code of our firstCondition becomes our second ternary

//! isGreaterThanOrEqual
const isGreaterThanOrEqual = (a, b) => {
  return (a === b) ? 'a === b' // true code
    : (a > b) ? 'a > b' // false code => another ternary
    : 'b > a' // false code
};

//? console.log(isGreaterThanOrEqual(2, 1)); // a > b
//? console.log(isGreaterThanOrEqual(1, 1)); // a === b
//? console.log(isGreaterThanOrEqual(1, 2)); // b > a

//! Recursion to Countdown
const countDown = (num) => {
  if (num < 1) {
    return []
  } else {
    const countDownArray = countDown(num - 1); //recursion: as num decreases, values in array increase
    countDownArray.push(num); // push happens last AFTER recursion
    // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    // countDownArray = [];
    return countDownArray;
  }
}

console.log(countDown(10));
// why is it counting up?
// how do we fix this? => push => unshift

//! Recursion to Range
// 1. define a function named recursiveRange
// 2. accepts 2 paramaters `start` and `end`
// 3. start will always be <= end
// 4. only recursion is allowed, no loops can be used

const recursionToRange = (start, end) => {
  if (end < start) {
    return [];
  } else {
    const rangeArr = recursionToRange(start, end - 1);
    rangeArr.push(end);
    return rangeArr;
  }
};

console.log(recursionToRange(1, 10));