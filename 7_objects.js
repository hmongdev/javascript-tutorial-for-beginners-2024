//* Objects
// similar to arrays
// access thru `properties`

const objectName = {
  prop1: "val1",
  prop2: "val2",
}

//! create an object of your car
const myCar = {
  year: 2007,
  make: "Nissan",
  model: 'Altima',
};

//* Accessing Objects
//* 1. Dot notation      = when you know the name of the property

//! Access your car's make and model
const myCarMake = myCar.make;
const myCarModel = myCar.model;

//* 2. Bracket notation  = when the property name has a space
//! Create an object of the Avengers
//! Properties should be the Superhero Name
//! Values should be their real identity

const theAvengers = {
  "Iron Man": "Tony Stark",
  "The Hulk": "Bruce Banner",
  "The Mighty Thor": "Thor Odinson",
  "Captain America": "Steve Rogers",
  "Hawkeye": "Clint Barton",
  "Black Widow": "Natasha Romanov"
};

const captainAmericaIdentity = theAvengers["Captain America"];
console.log(captainAmericaIdentity); // "Steve Rogers"

//* Accessing Objects Thru Variables
const firstAvenger = "Captain America";
const firstAvengerRealIdentity = theAvengers[firstAvenger]; // "Steve Rogers"

console.log(firstAvengerRealIdentity);

//* Updating Properties
// Dot or bracket notation to update properties
myCar.year = 2023;
myCar.make = 'Tesla';
myCar.model = 'S';

console.log(myCar);

//* Add New Properties
// Dot notation 
myCar.fuelType = 'Electric'; 
// Bracket notation
myCar["fuelType"] = 'Electric'; 

//* Delete properties
// Dot notation
// Bracket notation
// delete obj.prop
// delete obj["prop"]

delete myCar.fuelType; 
delete myCar["fuelType"]; 
console.log(myCar);

//* Object Lookups
// Objects can be thought of as a key: value pairs =>
// Dictionaries (word, definition)
// Phonebook (name, phone number)

//! 1. Create a function called alphabetLookup that accepts a `letter` arg
//! 2. Initialize a let variable called `animal`
//! 3. Create an obj called `alphabetToAnimal` with the first 4 letters of the alphabet as `keys` and animals as `values`
//! 4. Return the animal associated with the letter
//! 5. Call the function with the 'a' argument

const alphabetLookup = (letter) => {
  let animal;
  
  const alphabetToAnimal = {
    a: '🐊',
    b: '🐻',
    c: '🐱',
    d: '🐶',
  }
  
  animal = alphabetToAnimal[letter];
  return animal;
};

const alligator = alphabetLookup('a'); // '🐊'
console.log(alligator)

//* Check for Existing Properties
// .hasOwnProperty() => returns true or false
// create a function that takes in 2 args (obj, prop)
// check to see if prop exists in obj
// if so, return the value of that property

const objPropExist = (obj, prop) => { 
  const propExists = obj.hasOwnProperty(prop);
  return propExists;
};

// console.log(objPropExist(myCar, 'year')); // true

//! Check if your car has a fuel type
//! 0. Add a `fuelType` property to your car
//! 1. create a function that takes in 2 args (obj, prop)
//! 2. check to see if prop exists in obj
//! 3. if true, return the value of that property
//! 4. otherwise, return 'No fuel type'

myCar.fuelType = 'Electric';

const checkFuelType = (obj, prop) => {
  const fuelTypeExists = obj.hasOwnProperty(prop); // boolean
  const fuelType = obj[prop]; // value

  if (fuelTypeExists) {
    return fuelType;
  } else {
    return 'No fuel type';
  }
};

console.log(checkFuelType(myCar, 'fuelType')); // 'Electric'

//* Accessing Nested Objects
// Combo of dot and bracket notation to access nested objects
const myHouse = {
  "myBedroom": {
    "closet": {
      "box1": "MtG Cards",
      "Super Secret Lockbox": "Nuclear Codes"
    },
    "bedroom": {
      "desk": "M2 Mac Mini"
    }
  }
};

const topSecret = myHouse.myBedroom.closet["Super Secret Lockbox"];

//* Accessing Nested Arrays
const myVideoGames = [
  {
    type: "FPS",
    list: [
      "Valorant",
      "Overwatch 2",
      "Counter-Strike"
    ]
  },
  {
    type: "Open-World",
    list: [
      "Skyrim",
      "Elden Ring",
      "LoZ: Skyward Sword"
    ]
  }
];

//! access and save `Elden Ring` to const `eldenRing`
const eldenRing = myVideoGames[1].list[1]; // 'Elden Ring'
// console.log(eldenRing);

//! Challenge
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  // Access target album in record collection
  const album = records[id];
  // Update the album
  if (!value){
    delete album[prop];
  } else if (prop !== "tracks") {
    album[prop] = value;
  } else {
    album["tracks"] = album["tracks"] || [];
    album["tracks"].push(value);
  }
  // Return the full collection
  return records;
}