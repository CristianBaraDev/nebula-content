// 1. Declare a for loop that starts at 0, goes until 30, and increments by 1
// //      Each loop it should log to the console 'the current index is _'
for(let i = 0; i <=30; i++){
    console.log(`The current index is ${i}`);
}



// 2. Declare a for loop that starts at 1, goes until 10, and increments by 2
// //      Each loop it should log to the console the current index
for(let i = 1; i <=10; i+=2){
    console.log(`The current index is ${i}`);
}


// 3. Create an array with your top 5 celebrity names in it. 
// //      Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
// //      Loop over the array and log each celebrity's full name to the console.
const myArray = ["Sandy Brooks","Bobby Santos","Alex Bomm","Tommy Dobbers"];
for(let i = 0; i <myArray.length; i++){
    console.log(myArray[i]);
}

// 4. Loop over your celebrity list and 
// // If a celebrity's full name has an even number of characters log it to the console
for(let i = 0; i < myArray.length; i++){
    const words = myArray[i].trim().split("");;

    if (words.length % 2 === 0) {
        console.log(myArray[i]);
      }
}


// 5. Use the celebrity array for this question
// // Create a for loop which will iterate over each element and output a new array of only first names
const firstName = [];


for(let i = 0; i < myArray.length; i++){
    const firstWord = myArray[i].split(' ')[0];
    firstName.push(firstWord);
}
console.log(firstName);

// 6. Use the celebrity array for this question
// // Create a for loop which will iterate over each element and output a new array of only last names
const lastName = [];


for(let i = 0; i < myArray.length; i++){
    const lastWord = myArray[i].split(' ');
    if(lastWord.length>1){
        const afterSpace = lastWord[1];
        lastName.push(afterSpace);
    }
    
}
console.log(lastName);


// 7. Loop over the celebrity list and then loop through each name. 
// // If a letter is a vowel, log it to the console


for(let i = 0; i < myArray.length; i++){
    const vowels = myArray[i].split('');
    for(let j = 0; j< vowels.length; j++){
        const char = vowels[j].toLowerCase();

        if('aeiou'.includes(char)){
            console.log(char);
        }
    }
}



// // 8.   Loop over the celebrity list and then loop through each name. 
// //      If a letter is uppercase, log it to the console
for(let i = 0; i < myArray.length; i++){
    const vowels = myArray[i].split('');
    for(let j = 0; j< vowels.length; j++){
        const character = vowels[j];

        if('ABCDEFGHJKLMNOPQRSTUVWXYZ'.includes(character)){
            console.log(character);
        }
    }
}


// // 9. Convert your celebrity array to all caps and no spaces:
// //  Ex:
// // // Input:  ['Martha Stewart', 'David Beckham', etc..] 
// // // Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]
const dashArray2 = [];
for(let i = 0; i < myArray.length; i++){

    dashArray2.push(myArray[i].toUpperCase().split(' ').join('-'));
    
}
console.log(dashArray2);

// 10.  Index your array to find your favorite celebrity. 
//      Save that name to a variable
//      Loop over the array until you find that individual
//      Log that name to the console and break out of the loop
const favName = "Alex Bomm";
for(let i = 0; i < myArray.length; i++){
    
   if(myArray[i] === favName){
    console.log(myArray[i]);
    break;
   }
    
}



//BONUS:
// // Write a loop that iterates from zero until 30
// // If an index is divisible by 2 log 'fizz'
// // If an index is divisible by 3 log 'buzz'
// // If an index is divisible by both 2 & 3, log 'fizz-buzz'
// // Otherwise print the index to the console

for(let i = 0; i <=30; i++){
    if(i%2 === 0 && i%3 === 0){
        console.log("fizz-buzz");
    }else if(i%2 === 0){
        console.log("fizz");
    }else if(i%3 === 0){
        console.log("buzz");
    }else{
        console.log(i);
    }
}