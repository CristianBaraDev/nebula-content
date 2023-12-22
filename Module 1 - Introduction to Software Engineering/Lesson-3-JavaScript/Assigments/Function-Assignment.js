// 1. Write a function that takes in an array of numbers and returns a new array containing the numbers with one added to each
// // Example you pass in the following array [1, 2, 3] the function should return [2, 3, 4]
const numsArray = [1,2,3];
const newNumsArrray = [];

function plusOne(array){
    
for(let i = 0; i < array.length; i++){
    array[i] = array[i] +1 ;
    newNumsArrray.push(array[i]);
    }

    return newNumsArrray;
}

console.log(plusOne(numsArray));

// 2. Write a function that takes in a string, and a letter, and returns true or false if the string contains the letter.
// // Example string = "happy birthday", letter = "a", should return true
// // Example string = "happy birthday", letter = "q" should return false

function containsLetter(string, letter){
    for(let i = 0; i < string.length; i++){
        if(string[i] === letter){
            console.log("The letter is in the word");
            break;
        }
    }
}

containsLetter("Cristian","a");

// 3. Write a function that takes in an array of full names (formatted "firstName lastName"), and returns a new array containing only first names.
// // Example array = ["Tom Smith", "Bob Jones", "Bill Williams"] returns ["Tom", "Bob", "Bill"]
const myArray = ["Sandy Brooks","Bobby Santos","Alex Bomm","Tommy Dobbers"];

function firstNames(myArray){
    const firstName = [];
    
    for(let i = 0; i < myArray.length; i++){
    const firstWord = myArray[i].split(' ')[0];
    firstName.push(firstWord);
    }
    console.log(firstName);
}

firstNames(myArray);

// 4. Write a function that takes in a name and a greeting and logs a string greeting the person to the console.
// // Example name = "John Boy" greeting = Goodnight, returns "Goodnight John Boy"

const myName = "Cristian Barahona";
const greetingMessage = "Hello my good friend";
function greeting(myName,greetingMessage){
    console.log(`${greetingMessage} ${myName}`);
}

// 5. Write a function that takes in the year someone was born and returns their age.
// // Example: birth year: 2000 returns 23

const dateOfBirth = 1993;
const age = calculateAge(dateOfBirth);

function calculateAge(){
    const currentYear = new Date().getFullYear();
    const age = currentYear - dateOfBirth;
    return age;
}


console.log(calculateAge(dateOfBirth));