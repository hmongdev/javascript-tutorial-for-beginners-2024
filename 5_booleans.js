//* Booleans
// data type: true or false
// conditions

/*

  if (condition) { 
    return true
  } else {
  return false
  }
  
*/

//* 1. Conditionals (if...else)
let paternityTest = false;

const areYouTheFather = (test) => {
  if (test) {
    return `You are the father! 😭`;
  } else if (!test){
    return (`You are not the father! 😇🙏`);
  } else {
    return ('Neither true nor false')
  }
}

let paternityResults = areYouTheFather(paternityTest); // 'You are not the father!'
console.log(paternityResults);

//* 2a. Equality Operator ==
// type coercion/conversion
(3 == 3); // true
(3 == '3'); // true, with type conversion

//* 2b. Strict Equality Operator ===
// NO type conversion
(3 === 3); // true
(3 === '3'); // false, with NO type conversion

//* 2c. Inequality Operator !==

let currentHour = 12;

const lunchTime = (time) => {
	if (time == 12) {
		return "It's lunch time! 😋";
	} else {
		return 'Not lunch time 😞';
	}
};

lunchTime(currentHour); // 'It's lunch time!'

//* 2d. Comparison operators: Great than, Less than, Equal to
// >
// >=
// <
// <=

//* 3. Logical AND, OR, NOT operators

//* 3a. And Operator &&
//* 3b. Or Operator ||

let weekday = true;
let morning = true;

const wakeUp = (day, time) => {
	if (day && time) {
		return 'Wake up 😳';
	} else {
		return 'Sleep in... 😴';
	}
};

//* 3c. Not Operator !
const eatMeal = (hungry, craving) => {
	// if you're NOT hungry AND NOT craving a food, you don't eat
	if (!hungry && !craving) {
		return "I'm not hungry.";
		// if you're hungry OR craving a food, you can eat
	} else if (hungry || craving) {
		return "Sure I'll have some.";
	} else {
		return "I'M SUPER HUNGRY!";
	}
};

//! 4. Booleans - Challenge: Bowling Strikes
// In the game of bowling, there are 10 pins you have to knock down, using a bowling ball
// Knocking down all 10 pins is called a 'strike'
// Each consecutive strike you get, is called a different name

//! 1. Create a function `bowlingStrikes` that takes in `strikes`
//! 2. Inside the function, create an if...else conditional for each bowling strike name (12 total)
//! 3. Must use zero-based indexing to return the strike names

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