
//SUBMIT A LINK TO THE GITHUB REPOSITORY CONTAINING THIS ASSIGNMENT
// 1. Concatenate "hello" with "goodbye"
 const string1 = "hello"
 const string2  = "goodbye"
 console.log(string1.concat(string2));

// 2. Save the substring "Friend" from the string "Hello Friend"
const greeting = "Hello Friend";
const friend = greeting.slice(5,12); 
console.log(friend);

// 3. Using 5 or more of the following words, create a template literal that makes a legible sentence.
//    Do not create your own words, use the existing ones below!
const word1 = "hello"; 
const word2 = "horror";
const word3 = "peace";
const word4 = "world"
const word5 = "dislike"; 
const word6 = "umbrella"; 
const word7 = "car"; 
const word8 = "pasta"; 
const word9 = "pizza"; 
const word10 = "movies";
const word11 = "football"; 
const word12 = "soccer"; 
const word13 = "eat"; 
const word14 = "cookie"; 
const word15 = "favorite";
const word16 = "makeup"; 
const word17 = "I"; 
const word18 = "to"; 
const word19 = "my";
const word20 = "is";
const word21 = "and";
const word22 = "also";
const word23 = "like"; 

console.log(`Hello, my name is Cristian and I ${word23} eating ${word8} and ${word14}.
I dont like ${word2} movies since they are too scary for me. I prefer to spend my free time
playing ${word12} with my friends and family.
`);

// 4. Given the string of your full name get your initials.
const myName = "Cristian Barahona";
const initials = myName.slice(0,1) + myName.slice(9,10);
console.log(initials);

// 5. Get the 5th character from the following string: 'Hello World'
const greeting1 = 'Hello World'
const fifth = greeting1[4];
console.log(fifth);

// 6. Find the index of the dash from 'Coding-Time!'
const coding = 'Coding-Time!'
const index = coding[6];
console.log(index);

// 7. Write code to grab the final letter from a any string.
const string = "string"
console.log(string[string.length-1]);

// 8. Write code to grab the first 3 letters from a string. 
console.log(string.slice(0,3));

// 9. Turn the following string into an array of words: 'This-is-a-sentence';
const sentence1 = 'This-is-a-sentence'
const splitStringToArr = sentence1.split('-');
console.log(splitStringToArr);

// 10. Make the string of 12 from the following two numbers:
let one = 1;
let two = 2;
const stringOf12 = one.toString() + two.toString();
console.log(stringOf12);