// 1. Create an object for a celebrity and save it to a variable
const celebrity = {
    name: "Sylvester Stallone",
    ocupation: "actor",
    isAlive: true,
    numberOfChildren: 5,
    hobby: "boxing",
    dateOfBirth: 1946
}

// 2. Using dot-notation add 3 key-value pairs to the celebrity
celebrity.hairColor = "Black";
celebrity.hasATan = true;
celebrity.age = 77;
// 3. Using bracket-notation add 3 key-value pairs to the celebrity
celebrity["eyesColor"]= "Brown";
celebrity["isAProducer"] = true;
celebrity["numberOfMovies"] = 78;
// 4. Write a function that allows us to add or update 3 properties

function add3(object,properties){
    for(let prop in properties){
        if (properties.hasOwnProperty(prop)) {
            object[prop] = properties[prop];
          }
    }

}


add3(celebrity,{hairColor: "blonde",isTall: true, numberOfChildren: 10});
console.log(celebrity);

// 5. Using a loop - log all the celebrities properties to the console

function logAll(object){
    for(let prop in object){
        console.log(`${prop}: ${object[prop]}`);
    }
}

logAll(celebrity);