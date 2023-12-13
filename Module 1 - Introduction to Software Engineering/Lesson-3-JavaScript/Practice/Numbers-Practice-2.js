
// For these questions use the Math methods that JavaScript includes
// All Math methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math


// find the square root of 25
const squareRoot = Math.sqrt(25);
console.log(squareRoot);

// find the value of 3 to the power of 5
const powerOf = Math.pow(3,5);
console.log(powerOf);

// find the value of 7.4 rounded
const roundedNum = Math.round(7.4);
console.log(roundedNum);

// find the rounded-up value of 7.4
const roundedUp = Math.ceil(7.4);
console.log(roundedUp);


// find the absolute value of -13
const absValue = Math.abs(-13);
console.log(absValue);

// find the minimum value in a set of numbers: 12,13,14,15,2,-1
const minValue = Math.min(12,13,14,15,2,-1);
console.log(minValue);

// find the maximum value in a set of numbers: 12,13,14,15,2,-1
const maxValue = Math.max(12,13,14,15,2,-1);
console.log(maxValue);

// create a random number 
const randomValue = Math.random();
console.log(Math.floor(randomValue));

// Create a random number between 0-10
const randomValue2 = Math.random() *10;
console.log(Math.floor(randomValue2));