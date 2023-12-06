//* 1. arrays [] => numbers, strings, objects...
let groceryCart = [];
// groceryCart = [1, 'hello', '😉'];
// zero-based indexing ...
// bracket notation => access

//* 2. nested arrays
// [[], [], []];
// groceryCart = [['fruits'], ['veggies'], ['dairy']];

groceryCart = [
  ['🍎', '🍌', '🍊'], // index 0 = fruits
  ['🥦', '🥕', '🥔'], // index 1 = veggies
  ['🧀', '🥛', '🧈']  // index 2 = dairy
  // ...
]

//* 3. separate into categories
// bracket notation
let fruits = groceryCart[0];
// let veggies = groceryCart[1];
// let dairy = groceryCart[2];

//* 5. pick 1 specific item
let broccoli = groceryCart[1][0];
let milk = groceryCart[2][1];
let potato = groceryCart[1][2];
// console.log(broccoli, milk, potato);

//** 3. ADD items
// someone stole our groceryCart
groceryCart = [];
// .push() => add to END of array
// .unshift() => add to START of array

// fruits
groceryCart.push(['🍎', '🍌', '🍊']);
// veggies
groceryCart.unshift(['🥦', '🥕', '🥔']);
// dairy
groceryCart.push(['🧀', '🥛', '🧈']);
// console.log(groceryCart);

//* 6. REMOVE items
// .pop()   => remove LAST item
// .shift() => remove FIRST item

groceryCart.pop();          // removes DAIRY
groceryCart.shift();      // removes VEGGIES
// console.log(groceryCart);   // ONLY FRUITS