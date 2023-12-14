// Turn the following string into all lowercase letters
const noCaps = 'This Should Not Have Capital Letters!'
console.log(noCaps.toLowerCase());

// Turn the following string into all uppercase letters
const loud = "i'm very loud!";
console.log(loud.toUpperCase());

// Join the prior two variables together.
 console.log(noCaps.concat(loud));

// Turn the following string into an array of names
const stringOfNames = 'Ally Becca Carlos Drake Edgar Felicity Greta Hector';
let splitStringToArr = stringOfNames.split(' ');
console.log(splitStringToArr);

// Make your own mad-libs using a template literal
let day = "thursday";
let climate = "warm";
let sport = "soccer";
let year = 2009;


console.log(`Today is ${day} and is getting colder outside.
I prefer ${climate} weeather since i can go out with family and friends.
My favorite sport is ${sport}, I have played it since ${year}`);


// Given the name Tony Stark, get his initials
const ironMan = "Tony Stark"
const initials = ironMan.slice(0,1) +ironMan.slice(5,6);
console.log(initials);

// Given the string "Hey now, you're an all-star!" get the string, "all-star" and save it to a new variable
const string = "Hey now, you're an all-star!"
const allStarts = string.slice(19,27); 
console.log(allStarts);

// Using the string "How are you?" extract the question mark.
const string1 = "How are you?" 
const newString = string1.slice(0,11);
console.log(newString);

// Given the following variables, add them together to get 15 
const ten = '10';
const five = '5';

console.log(parseInt(ten)+parseInt(five));

// Given the following sentence, turn it into an array.

const sentence = 'Welcome to the jungle!'; 
const splitStringToArr2 = sentence.split(' ');
console.log(splitStringToArr2);
