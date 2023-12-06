//* Numbers 🔢

// 1. Operators: Add, Substract, Multiply, Divide, Remainder (Modulo)
let add = 2 + 2;
let subtract = 2 - 2;
let multiply = 2 * 2;

let divide = 5 / 2; // 2.5
let modulo = 5 % 2; // 1

// 2. Increment, Decrement 
// i = i + 1
// i++
let myBankAccount = 0;
myBankAccount = myBankAccount + 1; // 1
myBankAccount++; // 1

// console.log(myBankAccount); // 2
myBankAccount = myBankAccount - 1; // -1
myBankAccount--; // -1

// 3. Augmented Assignment
myBankAccount += 10; // 10
myBankAccount *= 5; // 50
myBankAccount /= 2; // 25
myBankAccount -= 30; // -5

// console.log(myBankAccount); // -5

// 4. Concatenation
let sentence = 'I am walking' + ' to the park.';
// console.log(sentence);


// 5. Methods: .length
let greeting = 'Hello world!'; // 12
console.log(greeting.length); // 12

// how does it know how to count?
// zero-based indexing

console.log(greeting[0]); // 'H'

greeting[0] = 'J';
console.log(greeting);

//! Strings are Immutable => cannot be changed