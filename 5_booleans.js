//* Booleans
// true or false

let paternityTest = false;

const areYouTheFather = (test) => {
  if (test) {
    console.log(`You are the father! 😭`);
  } else if (!test){
    console.log(`You are not the father! 😇🙏`);
  }
}

areYouTheFather(paternityTest); // 'You are not the father!'

//* Equality Operator ==
// type coercion/conversion
(3 == 3); // true
(3 == '3'); // true, with type conversion

//* Strict Equality Operator ===
// NO type conversion
(3 === 3); // true
(3 === '3'); // false, with NO type conversion

//* Inequality Operator !==

let currentHour = 12;

const lunchTime = (time) => {
  if (time == 12) {
    console.log('It\'s lunch time! 😋');
  } else {
    console.log('Not lunch time 😞');
  }
}

lunchTime(currentHour); // 'It's lunch time!'

//* Comparison operators: Great than, Less than, Equal to
// >
// >=
// <
// <=

//* Logical AND, OR, NOT

// And Operator &&
const wakeUp = (day, time) => {
  if (weekDay && morning) {
    console.log('Wake up 😳');
  } else {
    console.log('Sleep in... 😴');
  }
}

// Or Operator ||
// Not Operator !
const eatMeal = (hungry, craving) => {
  // if you're NOT hungry AND NOT craving a food, you don't eat
  if (!hungry && !craving) {
    console.log('I\'m not hungry.');
    // if you're hungry OR craving a food, you can eat
  } else if (hungry || craving) {
    console.log('Sure I\'ll have some.');
  } else {
    console.log('I\'M SUPER HUNGRY!');
  }
};

//! Bowling Strikes

const strikeNames = [
  'Strike',
  'Double',
  'Turkey',
  'Hambone',
  'Yahtzee',
  'Six Pack',
  'Front Seven',
  'Front Eight',
  'Front Nine',
  'Front Ten',
  'One Day From Retirement',
  'Thanksgiving Turkey'
];

const bowlingStrikes = (strikes) => {
  if (strikes === 1) {
    return strikeNames[0];
  } else if (strikes === 2) {
    return strikeNames[1];
  }
  else if (strikes === 3) {
    return strikeNames[2];
  }
  else if (strikes === 4) {
    return strikeNames[3];
  }
  else if (strikes === 5) {
    return strikeNames[4];
  }
  else if (strikes === 6) {
    return strikeNames[5];
  }
  else if (strikes === 7) {
    return strikeNames[6];
  }
  else if (strikes === 8) {
    return strikeNames[7];
  }
  else if (strikes === 9) {
    return strikeNames[8];
  }
  else if (strikes === 10) {
    return strikeNames[9];
  }
  else if (strikes === 11) {
    return strikeNames[10];
  }
  else if (strikes === 12) {
    return strikeNames[11];
  }
}

bowlingStrikes(3); // 'Turkey'
bowlingStrikes(7); // 'Front Seven'
bowlingStrikes(12); // 'Thanksgiving Turkey'