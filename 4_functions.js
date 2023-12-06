//* 1. Functions
// declare
// invoke/call ()

// old
function oldFunction() {
	// code logic
	console.log('Hello world!');
}

// new
const newFunction = () => {
	console.log('Bye world!');
};

//! Use arrow functions

//* 2. Passing arguments
const passArguments = (arg1, arg2) => {
	console.log((arg1 += arg2));
};

//! You can pass arguments into functions

//* 3. Returning values
const addTwoNumbers = (arg1, arg2) => {
	return (arg1 += arg2);
};
addTwoNumbers(2, 2); // 4

//! Use the `return` keyword, if you want something back

//* 4. Global vs. Local scope

let globalVariable = 'Everyone can see me!';

const whoCanSeeMe = () => {
	let localVariable = 'Only secret agents can read me!';
	console.log(localVariable);
	console.log(globalVariable);
};

// whoCanSeeMe();

//! Global: everyone can see it
//! Local: only certain functions can see it

//* 5. Same variable name with DIFFERENT scopes

let someVar = 'Global';

const whoseVariableIsIt = () => {
	let someVar = 'Local';

	return someVar;
};

whoseVariableIsIt(); // 'Local'

//!  Local > Global, if they share the same names

//* 6. Undefined values
// if theres no return inside a function, it will return undefined
const undefinedValue = () => {
	someVar += 'Hello';
};

console.log(undefinedValue()); // undefined

//! If there's no return or console.log, you will get `undefined`

//! 7. FIFO Challenge:
// When I worked in a restaurant, we cycled through shipments of food using FIFO...
// New items are placed in the back
// Old items are taken off the front

//! 7a. Create an array that represents a restaurant cold room. Name it whatever you want.
//! 7b. Create a function named `FIFO` that takes in 2 arguments `array` and `newItem`
//! 7c. Add the `newItem` to the end of the array
//! 7d. Remove the `oldItem`, and return it
//! 7e. Call the function to test if it works

const FIFO = (array, newItem) => {
	// new item is placed in the back
	array.push(newItem);
	// old item is taken off front
	let oldItem = array.shift();
	return oldItem;
};

const walkInCooler = ['🥑', '🥦', '🥩', '🧀'];

FIFO(walkInCooler, '🍗');
console.log(walkInCooler);