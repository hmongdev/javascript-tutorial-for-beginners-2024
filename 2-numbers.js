//* Numbers 🔢

// 1. Operators: Add, Substract, Multiply, Divide, Remainder
let sum = 2 + 2;
let difference = 2 - 2;
let product = 2 * 2;
let quotient = 2 / 2;
let remainder = 5 % 2;

// 2. Increment, Decrement 
// Bank Account
let myBankAccount = 0;
// i = i + 1;
myBankAccount = myBankAccount + 1; // 1
myBankAccount++;
console.log('My Bank Account:', myBankAccount); // 1

// 3. Augmented Assignment
myBankAccount = 0;
myBankAccount += 10;
myBankAccount *= 5;
myBankAccount /= 2;
myBankAccount -= 30;

console.log('My Bank Account:', myBankAccount);

// 4. Concatenation
// Building a sentence
let sentence = 'I am walking ' + 'to the park.';
console.log(sentence);

let subject = 'I am';
let verb = 'walking';
let object = 'to the park.';

sentence = subject += verb += object;
console.log(sentence);

// 5. Methods: .length()
// method()
// bracket notation
let greeting = 'Hello world!';
let greetingLength = greeting.length; // 8
console.log(greetingLength);

let h = greeting[0];
console.log(h); // H

greeting[0] = 'J';
console.log(greeting); // strings are immutable