// Given the following list:
// Change the element at index zero to equal itself times 10 
let numArr = [1,2,3,4,5];
numArr[0] *= 10;
console.log(numArr[0]);

// Add an additional element to the prior array
numArr.push(6);
console.log(numArr);
// In one line, remove the last element from the prior array and set that element to a variable called 'removedItem'
const lastElement = numArr.pop();
console.log(lastElement);
// Check if the prior array contains the number 1
const containsNumber = numArr.indexOf(1);

//   If it does, log true, if it doesn't, log false
if(containsNumber === -1){
    console.log("False");
}else{
    console.log("True");
}

// Remove the first element from the prior array and set that element to a variable called 'removedFirstItem'
const removedFirstItem = numArr.shift();
console.log(removedFirstItem);

// Add that item back
numArr.unshift(removedFirstItem);
console.log(numArr);

// Given the following array, sort it using an array method
let sortThis = ["dairy", "banana", "cherry", "apple", "eel"];
sortThis.sort();
console.log(sortThis);

// Now reverse the prior array
sortThis.reverse();
console.log(sortThis);

// Write a string stating your favorite 3 foods. 
//  Ex: 'My favorite foods are za, pineapple, hawaiian-pizza'

const favoriteFoods = "My favorite foods are pizza, burger, pasta";

// Convert the prior string into an array of words (don't worry about where punctuation lands). 
//  Ex: ['My', 'favorite', 'foods', 'are', 'za,', 'pineapple,', 'hawaiian-pizza']

let splitString = favoriteFoods.split(" ")
console.log(splitString);

// Convert the output from the prior example back into a string, but with dashes between the words. 
//  Ex: 'My-favorite-foods-are,-za,-pineapple,-hawaiian-pizza'
splitString = splitString.join("-");
console.log(splitString);


// Given the following array: [1,2,3,4,5,7,8,9,10]
// insert the number 6 into its logical location

const newNumbers = [1,2,3,4,5,7,8,9,10];

newNumbers.splice(5,0,6);
console.log(newNumbers);
// Create two arrays and, using JavaScript join them together

const newArray1 = ["First","Second","Third"];
const newArray2 = ["Fourth","Fifth","Sixth"];

console.log(newArray1.concat(newArray2));

// Create a multi-dimensional array

const multiArray = [[3,6,9], [5,15,20],[2,4,6]];
console.log(multiArray);