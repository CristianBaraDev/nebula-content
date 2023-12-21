
/*
function greetName(myName){
    return `Greetings my name is ${myName}`
}

const newName = greetName("Cristian");

console.log(newName);
*/


//Define a function called multiplyBy10 that takes in one number argument and returns that number multiplied by 10. Test the function with some numbers.
function multiplyBy10 (number){
    return number *10;
}

console.log(multiplyBy10(5));
console.log(multiplyBy10(3));
console.log(multiplyBy10(2));


//Define a function called sayGoodbye that uses a name parameter and returns a farewell message incorporating that name.
function sayGoodbye (name){
    console.log(`Good bye ${name}`);
}

sayGoodbye("Cristian");
sayGoodbye("Eric");

//Define a function called evenNumbers that takes in an array as an argument and iterates over that array and returns a new array with all the even numbers
 //from that input array (Hint: you can use the modulus operator to check whether a number is even or not).
 function evenNumbers (myArray){
    let evenArray = [];
    for(let i = 0; i< myArray.length; i++){
        if(myArray[i]%2 === 0){
            evenArray.push(myArray[i]);
        }
    }
    return evenArray
}

const numArray = [2,8,6,7,10,9,3];

console.log(evenNumbers(numArray));

//Define a function called reverseWords that takes in a string and returns a string with the order of words reversed.

function reverseString(string){
    
    return string.split("").reverse().join("");
}

let myString= "Regular String not reversed";

console.log(reverseString(myString));