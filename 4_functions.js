//* Functions
// declare
// invoke/call

// old
function oldFunction() {
  console.log('Hello world!');
}

// new
const newFunction = () => {
  console.log('Bye world!');
};

//* Passing arguments
const passArguments = (arg1, arg2) => {
  console.log(arg1 += arg2);
};
// function3(1, 1); // 2

//* Returning values
const addTwoNumbers = (arg1, arg2) => {
  return arg1 += arg2;
}
// addTwoNumbers(2, 2); // 4

//* Global vs. Local scope

let globalVariable = 'Everyone can see me!';

const whoCanSeeMe = () => {
  let localVariable = 'Only secret agents can read me!';
  console.log(localVariable);
};

// console.log(globalVariable); // undefined
// console.log(localVariable); // undefined
// console.log(whoCanSeeMe());

//* Same variable name with DIFFERENT scopes
// local scope > global scope

let someVar = 'Thing1';

const whoseVariableIsIt = () => {
  let someVar = 'Thing2';
  
  return someVar;
};

whoseVariableIsIt(); // 'Thing2'

//* Undefined values
// if theres no return inside a function, it will return undefined
// returns are optional, but recommended
const undefinedValue = () => {
  someVar += 'Hello';
};

undefinedValue(); // undefined

//! FIFO Practice
// When I worked in a restaurant, we cycled through shipments of food using FIFO...
// New items are placed in the back
// Old items are taken off the front

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