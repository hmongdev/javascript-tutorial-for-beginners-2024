//* Arrays

//* 1. Arrays are Objects!
//* Obj can store / collect different types of data inside(strings, numbers, etc.)
//* Arrays are represented with [] square brackets
//* Zero-based indexing (ZBI)

let groceryCart = [];
groceryCart = [1, 'hello', '😉'];

// bracket notation => access
// console.log(groceryCart[0]); // 1
// console.log(groceryCart[1]); // 'hello'
// console.log(groceryCart[2]); // '😉'

//! Arrays are objects
//! Arrays use ZBI [0]...

//* 2. Nested Arrays
// Arrays inside outer array: [[], [], []];
// groceryCart = [ ['fruits'], ['veggies'], ['dairy'] ];

groceryCart = [
	['🍎', '🍌', '🍊'], // index 0 = fruits
	['🥦', '🥕', '🥔'], // index 1 = veggies
	['🧀', '🥛', '🧈'], // index 2 = dairy
];

//* 3. Separate into Categories
let fruits = groceryCart[0];
let veggies = groceryCart[1];
let dairy = groceryCart[2];

//* 4. Select 1 SPECIFIC item
let broccoli = groceryCart[1][0];
// console.log(broccoli);

//! Arrays - Challenge 1: Milk and Potato
//* 1. Create two let variables: `milk` and `potato`
//* 2. Access the groceryCart, using ZBI, so that each variable
//*    contains the correct emoji: '🥛' and '🥔'

//* Solution:
let milk = groceryCart[2][1];
let potato = groceryCart[1][2];

// console.log(milk, potato);

//* 5. ADD items
//* .push() => add to END of array
//* .unshift() => add to START of array

//! Arrays - Challenge 2: Adding Groceries
//* A feisty penguin 🐧🔪 has robbed our groceryCart!! 🛒
//* We've lost ALL our items 😭😭😭

//* 1. Create an empty array, `groceryCart`
//* 2. Create 3 different arrays for `fruits`, `veggies`, and `dairy`;
//* 3. Add 3 items into each array
//* 4. Finally, add each array to your groceryCart

//* MUST use .push() or.unshift() to add them to the `groceryCart` array

//! At the end, you should have 3 nested arrays inside your groceryCart

//* SOLUTION
// empty groceryCart
groceryCart = [];

// empty arrays
fruits = [];
veggies = [];
dairy = [];

// add items into each array
fruits.push('🍎', '🥛', '🍌');
veggies.push('🌶️', '🥕', '🥬');
dairy.push('🧀', '🥛', '🧈');

// add each array into groceryCart
groceryCart.push(fruits);
groceryCart.push(veggies);
groceryCart.unshift(dairy);

// 3 nested arrays inside groceryCart
// console.log(groceryCart);

//* 6. REMOVE items
//* .pop()   => remove LAST item
//* .shift() => remove FIRST item

groceryCart.pop();
groceryCart.shift();
groceryCart.pop();
// console.log(groceryCart);

//! Arrays - Challenge 3: Removing Bugs

//* The feisty penguin 🐧 has returned with his bug-dies!
//* This time, he's sabotaging our garden!
//* Using .pop() and .unshift(), capture all 6 bugs and place them into their own `jar`

//! NOTE: Jars are provided for you.
//! You cannot remove any vegetables or fruits from your garden, only bugs

let ourGarden = [
	['🐞', '🍎', '🥕', '🐜'],
	['🦟', '🍓', '🪲'],
	['🥦', '🍆', '🪳'],
	['🕷️', '🥬'],
];

// Jars
let ladyBugJar = [];
let antJar = [];
let flyJar = [];
let greenBeetleJar = [];
let mosquitoJar = [];
let spiderJar = [];

//* SOLUTION
ladyBugJar = ourGarden[0].shift();
antJar = ourGarden[0].pop();
flyJar = ourGarden[1].shift();
greenBeetleJar = ourGarden[1].pop();
mosquitoJar = ourGarden[2].pop();
spiderJar = ourGarden[3].shift();

console.log('Is our garden FREE of bugs???:', ourGarden);
