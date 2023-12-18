// USE FAKE INFO FOR THE FOLLOWING EXERCISE

// Initialize a variable called creditCardNum, set it equal to a fake credit card string-number
const creditCardNum =  "4568-8467-6598-2986";

// Initialize a variable called last4SS, set it equal to a 4 string-numbers (don't use your real SS last 4!)
const last4SS =  "6189";

// Initialize a variable called userId, set it equal to a fake user ID
const userId = "cristianb14";

// Initialize a variable called password, set it equal to a fake password
const password = "Password";

// Create two last variables called inputId & inputPass, initially set them as the same values as userId and password
const inputId  = "cristianb14";
const inputPass = "Password";

// Write a ternary statement that checks if userId is equal to inputId and if password is also equal to inputPass
// If they are the same, log the credit card num and the last4SS
// If not, log 'incorrect username or id'

let text =  userId === inputId && password === inputPass ? 
console.log(`Your credit card number is ${creditCardNum} and your last four social security numbers are ${last4SS}`)
:console.log("incorrect username or id");