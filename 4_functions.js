//* 1. Functions
// blocks of code that are designed to do something
// we MUST tell it what to do!!!
// invoking/calling the function
// () operator

//* How to write functions
// 1. function keyword
// 2. name
// 3. ()
// 4. { code_stuff_example }

//* 2 ways to write functions:
// old vs. new

//* old
function oldFunction() {
	// code block
}

//* new
// 1. const keyword
// 2. name
// 3. = () =>
// 4. { code_stuff_example }

// new: ES6 (2015)
const arrowFunction = () => {
	// code block
};

//* 2. Passing arguments
// Idea that you can pass `inputs` into functions and receive an `output`
// Arguments are inputs; things that you give a function
// Put arguments inside the parentheses

const passArguments = (arg1, arg2) => {
	console.log(arg1 + arg2);
};

const arguments = passArguments('Passing', ' arguments!'); // 'Passing arguments!'
console.log(arguments);

//* 3. Returning values
// console.log vs. return
// return keyword

const addTwoNumbers = (arg1, arg2) => {
	return (arg1 += arg2);
};

const sum = addTwoNumbers(2, 2); // 4
console.log('Sum should be 4:', sum);

//! Use the `return` keyword, if you want an `output` back

//* 4. Global vs. Local scope
// ❓: Who has access (see) variables
// Global: scope is the idea that everyone can see
// Local:  scope is the idea that SPECIFIC code can see (i.e., function)
let globalVariable = 'Everyone can see me!';

const whoCanSeeMe = () => {
	let localVariable = 'Only the function can see me!';
	console.log(localVariable);
};

whoCanSeeMe();

//! Global Scope: refers to code that anyone has access
//! Local  Scope: refers to SPECIFIC bits of code that can be accessed (function)

//* 5. Undefined values
// undefined (data type)
// undefined = auto-assigned to (1) recently declared variables
// (2) when there are 🚫 arguments, 🚫 return, and 🚫 console.log

//* (1) recently declared variable
let someVar;
console.log('someVar is undefined:', someVar); // 'undefined'

//* (2) function with no arguments, return, console.log
const undefinedValue = () => {
	let someVar;
	someVar += 'Hello';
};

const undefined = undefinedValue();
console.log('Function is undefined:', undefined); // undefined

//! undefined is a data type
//! you get `undefined` when ...
//! (1) recently declare a variable
//! (2) function with no arguments, return, console.log

//! 6. FIFO Challenge:
// Restaurants rotate their food shipments using FIFO
// FIFO = First In, First Out

// New items are placed in the back
// Old items are taken off the front

//! 1. Create an array that represents a restaurant cold room. Name it whatever you want.
//! 2. Create a function named `FIFO` that takes in 2 arguments `array` and `newItem`
//! 3. Add the `newItem` to the end of the array
//! 4. Remove the `oldItem`, and return it
//! 5. Call the function to test if it works
const walkInCooler = ['🥑', '🥦', '🥩', '🧀'];

const FIFO = (array, newItem) => {
	// new item is placed in the back
	array.push(newItem);
	// old item is taken off front
	let oldItem = array.shift();
	return oldItem;
};

FIFO(walkInCooler, '🍗');
console.log(walkInCooler);
