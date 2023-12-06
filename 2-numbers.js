//* Numbers 🔢

// 1. Operators: Add, Substract, Multiply, Divide, Remainder (Modulo)
let add = 2 + 2;
let subtract = 2 - 2;
let multiply = 2 * 2;

let divide = 5 / 2; // 2.5
let modulo = 5 % 2; // 1

// 2. Increment, Decrement 
// i = i + 1;
let myBankAccount = 0;
myBankAccount = myBankAccount + 1; // 1
myBankAccount++; // 1

// console.log(myBankAccount); // 2

// 3. Augmented Assignment
myBankAccount = 0;
myBankAccount += 10;
myBankAccount *= 5;
myBankAccount /= 2;
myBankAccount -= 30;

// 4. Concatenation
let sentence = 'I am walking ' + 'to the park.';
// console.log(sentence);

// 5. Methods: .length
let greeting = 'Hello worldkjashdf;kasdklfja;lsdkfjl;askdjfl;aksdjf;laksjdf;lasjdf;laskjdf!'; //12
let greetingLength = greeting.length; // ???
console.log(greetingLength);

// how does it know how to count?
// zero-based indexing

// console.log(greeting[2]); // 'Hel'

// strings are immutable => cannot be changed
let j = greeting[0] = 'J';
greeting = 'Jello world'
console.log(greeting);