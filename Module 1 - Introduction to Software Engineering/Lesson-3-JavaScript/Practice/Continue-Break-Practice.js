// 1. Write a for loop that looks for the letter a
// // The loop should log the letter 'a' to the console
// // STOP immediately after finding the letter 'a'
const string1 = "Today is a sunny day";
for(let i = 0;i < string1.length ; i++){
    console.log(`Searching... current character ${string1[i]}`);
    if(string1[i].toLocaleLowerCase() === 'a'){
        console.log("We found an 'a' ");
        break;
    }
}

// 2. Write a for loop that looks for a number
// // The loop should log 'at index _ there is the number _' to the console 
// // Stop immediately after finding that number
// // // ex: Input: ['a','b','c', 100,'e']
// // // Output: 'at index 3 there is the number 100'
const number = 10;
const arrayOfThings = ["Hello",true,0,'x',false,10]

for(let i = 0; i < arrayOfThings.length; i++){
    console.log(arrayOfThings[i]);
    if(arrayOfThings[i] === number){
        console.log(`at index ${arrayOfThings.indexOf(arrayOfThings[i])} there is the number ${number}`);
        break;
    }
}

// 3. Using the continue keyword loop over an array of numbers & strings
// // If the current element is a number skip it
// // Otherwise add the element to an array
// // After finishing the loop log the new array to the console

let newArray = [];
for(let i = 0; i < arrayOfThings.length; i++ ){
    if(typeof arrayOfThings[i] === "number"){
        continue;
    }
    newArray.push(arrayOfThings[i]);
}

console.log(newArray);