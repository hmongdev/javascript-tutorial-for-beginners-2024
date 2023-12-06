//* While loops
// code that runs multiple times by itself while a condition is true


//? while (condition) { // i < 5
//?   ourArray.push(i);
//?   i++;
//? }

const whileArray = [];
let i = 1;

//! Count from 1 to 5
while (i <= 5) {
  whileArray.push(i);
  i++;
}
console.log(whileArray);

//* For Loop
// runs a specific number of times
// for (a; b; c)
// a start
// b condition
// c change by how much

//? for (let i = 0; i < number; i++){
//?   Array.push(i);
//? }

//! Using for loop, count from 1 to 5
const forArray = [];
for (let i = 1; i <= 5; i++){
  forArray.push(i);
}
console.log(forArray);

//! Using for loop, loop ODD numbers only (1 - 10)
const oddArray = [];
for (let i = 1; i <= 10; i+= 2){
  oddArray.push(i);
}

//! Using for loop, loop EVEN numbers backwards from (10 - 0)
const evenArray = [];
for (let i = 10; i >= 0; i -= 2){
  evenArray.push(i);
}
console.log(evenArray);

//* Looping through Array
const loopArray = [1, 2, 3, 4, 5]
for (let i = 0; i < loopArray.length; i++) {
  console.log(loopArray[i]);
}

//! Loop through an Array [1, 2, 3, 4, 5]
//! create a `sum` variable
//! Add all the elements of the array to a new array
//! total should be 15
let total = 0;

for (let i = 0; i < loopArray.length; i++) {
  total += loopArray[i];
}

console.log(`Total is ${total}`);

//* Looping Nested Arrays
const nestedArray = [[1, 2, 3], [4, 5,], [6, 7, 8]];

const multiplyAll = (array) => {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
};

//* Replace Loops with Recursion
// recursion is the idea that you can use a function to call itself
// eliminates the need for a loop
const sumArray = [1, 2, 3, 4, 5]; // 15
const recursionSum = (arr, num) => {
  if (num <= 0) {
    return 0;
  } else {
    // recursion
  return recursionSum(arr, num - 1) + arr[num - 1];
  }
}

console.log(recursionSum(sumArray, 5)); // 15

//! Profile Lookup
// nested array
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

lookUpProfile("Akira", "likes");