// 1. Write a function that multiplies 3 input numbers together.
    function multiply3(num1,num2,num3){
        return num1*num2*num3;

    }

    console.log(multiply3(3,3,3,3));

// 2. Write a function that takes in a number and logs all odd numbers leading up to that number
    function oddNumbers(number){
        for(let i = 0; i <= number; i++){
            if(i%2 === 1){
                console.log(i);
            }
        }
    }
    oddNumbers(21);

// 3. Write a function that takes in a list of names and returns a list of initials. The names will be formatted: 'Peter Parker'. 
const names = ["Norman Flint", "Danny Parker", "Sonia Bush","Harold Neil"];
function initialsList(names) {
    const initials = [];
  
    for (let i = 0; i < names.length; i++) {
      const words = names[i].split(' ');
      let initialsForName = '';
  
      for (let j = 0; j < words.length; j++) {
        initialsForName += words[j].charAt(0);
      }
      initials.push(initialsForName);
    }
    return initials;
  }

console.log(initialsList(names));

// 4. Write a function which takes in two numbers and a mathematical operator and performs Math on those two numbers utilizing that operator

function mathOperators(num1 =1, num2 = 2,operator = "+"){
    if(operator === "+"){
        return num1 + num2;
    }else if(operator === "-"){
        return num1 - num2;
    }else if(operator === "/"){
        return num1 /num2;
    }else if(operator === "*"){
        return num1 * num2;
    }else{
        return "Please try using ' +,-,*,/ operators'";
    }
}

console.log(mathOperators(5,10,"*"));
// 5. Write a function which takes in two arrays and returns those arrays combined together. 

const array1 = ["Norman Flint", "Danny Parker"];
const array2 = ["Sonia Bush","Harold Neil"];

function combineArrays(array1 , array2){
    let concatArray  = [];
    concatArray = array1.concat(array2);
    return concatArray;
}

console.log(combineArrays(array1,array2));

const myArray = [1,3,5,7,9];
let meanAvg = 0;
let lowestNum = 0
let highestNum = 0
let middleNum = myArray[Math.floor(myArray.length/2)];
for(let i =0 ; i< myArray.length; i++){
meanAvg += myArray[i];
if(myArray[i] > highestNum){
    highestNum = myArray[i]
}

if(myArray[i] < lowestNum){
    lowestNum = myArray[i]
    }
}

console.log(meanAvg/myArray.length);

console.log(middleNum);

console.log(highestNum - lowestNum);


