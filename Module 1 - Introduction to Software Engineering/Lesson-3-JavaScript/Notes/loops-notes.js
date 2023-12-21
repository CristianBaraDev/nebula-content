const arrayOfNums = [5, 3, 2, 1, 0, 9, 10, 30, 55];

for(i = 0; i< arrayOfNums.length; i++){
    console.log(arrayOfNums[i]);
}

for(i = 0; i< arrayOfNums.length; i++){
    if(arrayOfNums[i]%2 === 0){
        console.log(arrayOfNums[i]);
    }
}

const myShoppingList = ["Apples", "Bread", "Cheese", "Grapes", "Sauerkraut", "Cucumber"];
const myFridge = ["Tartar Sauce", "Pickles", "Sauerkraut", "Milk", "Cheese"];
const iAlreadyHave = [];

for(let i = 0; i < myShoppingList.length; i++){
  for(let j = 0; j < myFridge.length; j++){
    if(myShoppingList[i] === myFridge[j]){
      iAlreadyHave.push(myShoppingList[i]);
    }
  }
}

console.log(iAlreadyHave);
// Output: ["Cheese", "Sauerkraut"]

const famousQuote = "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.";

let count = 0;

for(let i = 0;i < famousQuote.length; i++){
    if(famousQuote[i].toLocaleLowerCase() === 'a'  ||
        famousQuote[i].toLocaleLowerCase() === 'e' || 
        famousQuote[i].toLocaleLowerCase() === 'i' || 
        famousQuote[i].toLocaleLowerCase() === 'o' ||
        famousQuote[i].toLocaleLowerCase() === 'u' ){
            count++;
    }

}
console.log(`I found ${count} vowels`);
