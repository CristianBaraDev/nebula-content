// 1. Given an array of strings
// // Loop over the array of strings
// // And loop over each string.
// // If a word has the letter "a" in it, log it to the console
const names = ['Bill', 'Jordan', 'Pete', 'Daniel']

for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < names.length; j++) {
        if (names[i].includes('a')) {
            console.log(`Found an 'a' in word ${names[i]}`);
            break;
        }
    }
}


// 2. Given an array of strings
// // Loop over the array
// // And loop over each string.
// // Create a new array of strings where every other letter in each string is capitalized 
// // // Ex: ['This','is','an','array','of','strings'] => ['ThIs','Is','An','ArRaY','Of','StRiNgS']
const stringArray = ['This', 'is', 'an', 'array', 'of', 'strings']
let arrayOfCapitalized = [];


for (let i = 0; i < stringArray.length; i++) {
    let letters = stringArray[i].split('');
    for (let j = 0; j < letters.length; j += 2) {
        letters[j] = letters[j].toUpperCase();
    }
    stringArray[i] = letters.join('');
    arrayOfCapitalized.push(stringArray[i])
}
console.log(arrayOfCapitalized);

// 3. Given an array of arrays of numbers (nested array)
// // Add all the inner values up and push them into a single array
// // // Example: [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]] => [12, 85, 83, 66, 77]
const arrayOfArrays = [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]]
const newArrayNums = [];

for (let i = 0; i < arrayOfArrays.length; i++) {
    let sum = 0;
    for (let j = 0; j < arrayOfArrays[i].length; j++) {
        sum += arrayOfArrays[i][j];
    }
    newArrayNums.push(sum);
}
console.log(newArrayNums);