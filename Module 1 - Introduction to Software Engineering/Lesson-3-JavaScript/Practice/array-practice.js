/*

const myArray = ["Spiderman 3", "Titanic", "Terminator","Die Hard","Brave Heart"];

  const first= myArray[0];
  const last= myArray[myArray.length -1];

  console.log(first);
  console.log(last);

  const myLuckyNumbers = [5, 3, 2, 11, 29];
  myLuckyNumbers[myLuckyNumbers.length -1] = Math.floor(myLuckyNumbers[myLuckyNumbers.length -1] / 3);
  console.log(myLuckyNumbers[myLuckyNumbers.length -1] );

  myLuckyNumbers[1] = myLuckyNumbers[1] *3;
  console.log(myLuckyNumbers[1]);

  console.log(typeof myArray);

  myArray.push("Hulk");
  console.log(myArray.indexOf("Die Hard"));

  const multiArray = [[1,2,3], [4,5,6], ["7","8","9"]];

  console.log(multiArray[1]);

*/



// Declare an empty array

const emptyArray =[];
// Declare an array with all the data types you can think of within it
const arrayData = ["Cristian",25,true,98.56,["Array",58,false]];

// Make a list of classmates names first names in an array
const classmatesArray = ["David","Konatee","Tashika","Cristian"];
// Get the length of that previous array
console.log(classmatesArray.length);

// Check the type of the previous array
console.log(typeof classmatesArray);

// Check if the previous array is an array
console.log(Array.isArray(classmatesArray));

// Using indexing, grab your name from that previous array
console.log(classmatesArray.indexOf("Cristian"));
console.log(classmatesArray[classmatesArray.length - 1]);

// Use the following variable to get the student at the index from the array of students
let index = 2; 
console.log(classmatesArray[index]);

// Update the array to have each element as a students first and last name : 'firstName lastName'

classmatesArray[0] = "David Curtis";
classmatesArray[1] = "Konatee Morris";
classmatesArray[2] = "Tashika Pierre";
classmatesArray[3] = "Cristian Barahona";
console.log(classmatesArray);