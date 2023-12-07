//* Numbers 🔢
// Data type in JavaScript
// Used with operators ( ➕, ➖ , ✕ , ➗ , % )

//* 1. Operators: Add, Substract, Multiply, Divide, Remainder (Modulo)
let sum = 2 + 2;
let difference = 2 - 2;
let product = 2 * 2;

let quotient = 3 / 2; // 1.5
let modulo = 3 % 2; // 1

//! Numbers are used with operators to do math
//! Modulo returns the remainder

//* 2. Increment, Decrement
// increment = i++ (add 1)
// decrement = i-- (minus 1) 

let myBankAccount = 0; // broke 😭
myBankAccount++; //      (add 1)
myBankAccount--; // 	 (minus 1)

//! i++ (add 1)
//! i-- (minus 1)

//* 3. Augmented Assignment
// AA can perform math AND assign result to a variable
// +=, -=, *=, /=
// add 10, multiply by 5, divide by 2, and subtract 30

myBankAccount += 10;
myBankAccount *= 5;
myBankAccount /= 2;
myBankAccount -= 30;

myBankAccount = ((myBankAccount + 10) * 5) / 2 - 30;

//! Performs (1) math AND (2) assigns result to a variable

//* 4. Concatenation
let greeting = 'Hello';
let noun = 'my name';
let verb = 'is';
let subject = 'HmongDev.';

let sentence = greeting + noun + verb + subject;
console.log(sentence);

//! Concatenation to combine strings together to create a new string

//* 5. .length method
let exampleStr = 'Hello world';
// How many characters are inside this string? 🤔

console.log(exampleStr.length);

// how does JavaScript know how to count using .length?
// zero-based indexing = variableName[indexNumber]

console.log(exampleStr[0]); // 'H'

//! .length will always tell you how MUCH/MANY items are inside { stuff }

//* 6. Strings are IMMUTABLE
//! Once a string is created, it cannot be changed
//! UNLESS you create an entirely new value

greeting = 'Hello';
greeting[0] = 'J'; // 'Jello'
console.log(greeting);

greeting = 'Jello';

//! Once a string created, it cannot be changed (immutable)