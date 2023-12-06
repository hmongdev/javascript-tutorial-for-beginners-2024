//* Switch Statements
// match ONE value against many CASES

// Case, Result, Break

const switchStatements = (value) => {
  let result = '';
  switch (value) {
    case "some_case":
      result = "some_result";
      break;
    case "another_case":
      result = "another_result";
      break;  
    default:
      result = "default_result";
      break;
  }
  return result;
}

const findFruitEmoji = (fruit) => {
  let fruitEmoji;
  
  switch (fruit) {
    case 'apple':
      fruitEmoji = '🍎';
      break;
    case 'orange':
      fruitEmoji = '🍊';
      break;
    case 'pear':
      fruitEmoji = '🍐';
      break;
    case 'banana':
      fruitEmoji = '🍌';
      break;
    case 'grape':
      fruitEmoji = '🍇';
      break;
    default:
      fruitEmoji = '🤷';
      break;
  }
  return fruitEmoji
};

console.log(findFruitEmoji('apple')); // '🍎'
console.log(findFruitEmoji('pear')); // '🍐'
console.log(findFruitEmoji('bonkers')); // '🤷'

//* Identical Options
// if 'break' is omitted from a switch statement
// the following case statements are executed
// until a break is encountered

const identicalOptions = (key) => {
  let result;
  switch (key) {
    case case1:
    case case2:
    case case3:
      result = '1, 2, or 3';
    break;
    case case4:
    case case5:
      result = '4 or 5';
    break;
    case case6:
      result = '6';
    break;
  }
};

const wizardKnowledge = (level) => { 
  let knowledge;  
  switch (level) {
    case 1:
    case 2:
    case 3:
      knowledge = 'Apprentice 🦸‍♂️';
      break;
    case 4:
    case 5:
      knowledge = 'Skilled 🦹';
      break;
    case 6:
    case 7:
      knowledge = 'Expert 🧙‍♂️';
      break;
  }
  return knowledge;
};

console.log(wizardKnowledge(1)); // 'Apprentice 🦸‍♂️'
console.log(wizardKnowledge(5)); // 'Skilled 🦹'
console.log(wizardKnowledge(6)); // 'Expert 🧙‍♂️'

//! Blackjack

// initialize the count
let count = 0;
// function that counts cards
const countingCards = (card) => {
  // switch statement => count logic
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      break;
  }
  // check what the count is
    if (count <= 0)  {
      return `${count} + Hold`
    } else {
      return `${count} + Bet`
    }
};

console.log(countingCards(8));   // 0 + Hold
console.log(countingCards(2));   // 1 + Bet
console.log(countingCards(6));   // 2 + Bet
console.log(countingCards(3));   // 3 + Bet
console.log(countingCards(5));   // 4 + Bet
console.log(countingCards('J')); // 3 + Bet
console.log(countingCards(10));  // 2 + Bet
console.log(countingCards('K')); // 1 + Bet
console.log(countingCards('A')); // 0 + Hold