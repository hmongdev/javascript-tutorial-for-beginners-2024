//* Random fractions
// Fractions are useful for creating random behavior
// Math.random() => random decimal between 0 (including) and 1 (excluding)

const randomFraction = () => {
  return Math.random();
};

// console.log(randomFraction());

//* Random Whole Numbers
// Math.floor() => rounds down
// Math.ceil() => rounds up
const randomFloorNumber = () => { 
  return Math.floor(Math.random() * 10); // 0 - 9
};

const randomCeilNumber = () => { 
  return Math.ceil(Math.random() * 10); // 1 - 10
};

//? console.log(randomCeilNumber());

//* Random Whole Numbers within a Range
const randomRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//* parseIn => reads a string, returns a number
// if the first character in the string is NOT a number, it returns NaN
const a = 'kxcvjoi43'; // NaN
const b = '001'        // 1
// console.log(parseInt(a));
// console.log(parseInt(b));

const convertStrToInt = (str) => {
  let result;
  return result = parseInt(str)
};

// console.log(convertStrToInt('123')); // 123

//* parseInt + Radix
// parseInt(str, radix)
// Radix => specifies the base of the number in our string
// Radix: has a base number between 2-36
// Radix of base 2: 01010101010
// Radix of base 3: 01201201201
// Radix of base 10: 0123456789

const binaryCode = parseInt('123', 2); // 1 or 0
const humanCode = parseInt('123', 10); // 123
console.log(`Computers read this:`, binaryCode); 
console.log(`Humans read this:`, humanCode);

