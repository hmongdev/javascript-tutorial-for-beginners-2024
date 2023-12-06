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

// oldFunction(); // Hello world!
// newFunction(); // Bye world!

//! Create functions by declaring
//! Call function by invoking it ()

//* 2. Passing arguments
const passArguments = (arg1, arg2) => {
	console.log((arg1 += arg2));
};

// passArguments(2, 2); // 4
// passArguments(15, 35); // 50

//! You can pass (arguments) into functions


//* 3. Returning values
const addTwoNumbers = (arg1, arg2) => {
	return (arg1 += arg2);
};

// console.log(addTwoNumbers(2, 2)); // 4

//! Use the `return` keyword, if you want something back

//* 4. Global vs. Local scope
let globalVariable = 'Everyone can see me!';

const whoCanSeeMe = () => {
	let localVariable = 'Only this function can see me!';
	console.log(globalVariable);
};

// whoCanSeeMe();

//! Global: everyone can see it
//! Local: only certain functions can see it

//* 5. SAME variable names with DIFFERENT scopes
let someVar = 'Global';

const whoseVariableIsIt = () => {
	let someVar = 'Local';

	return someVar;
};

// console.log(whoseVariableIsIt()); // ??

//!  Local > Global, if they share the same names

//* 6. Undefined values
// if theres no return inside a function, it will return undefined
const undefinedValue = () => {
	someVar += 'Hello';
};

console.log(undefinedValue()); // undefined

//! If there's no return or console.log, you will get `undefined`

//! 7. FIFO Challenge:
// I used to work in a restaurant, we cycled through shipments of food using FIFO...
// New items are placed in the back
// Old items are taken off the front

//! 7a. Create an array that represents a restaurant cold room. Name it whatever you want.
//! 7b. Create a function named `FIFO` that takes in 2 arguments `array` and `newItem`
//! 7c. Add the `newItem` to the end of the array
//! 7d. Remove the `oldItem`, and return it
//! 7e. Call the function to test if it works

const walkInCooler = [];

const FIFO = (array, newItem) => {
	array.push(newItem);
	let oldItem = array.unshift();
	return oldItem;
};

FIFO(walkInCooler, '🥩');
FIFO(walkInCooler, '🍎');
FIFO(walkInCooler, '🥦');
FIFO(walkInCooler, '🍜');

console.log(walkInCooler);