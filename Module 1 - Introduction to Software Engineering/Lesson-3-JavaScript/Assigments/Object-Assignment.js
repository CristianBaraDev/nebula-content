// SUBMIT A LINK TO THE GITHUB REPO FOR THIS ASSIGNMENT
// 1.bCreate an object for your dream vehicle
// // Give it a minimum of 6 key-value pairs
// // This object should contain many datatypes (string, number, boolean, null, array)
const dreamCar = {
    make: "Toyota",
    isConvertible: true,
    model: "Supra",
    topSpeedInMPH: 195,
    year: 2023,
    isManual: true,
    isTurnOn: false,
    color: "white"
}
// 2. Using dot-notation Log to the console 3 properties from the previous object
    console.log(dreamCar.make);
    console.log(dreamCar.model);
    console.log(dreamCar.year);

// 3. Using bracket-notation Log to the console 3 properties from the previous object
console.log(dreamCar["color"]);
console.log(dreamCar["isManual"]);
console.log(dreamCar["isConvertible"]);

// 4.Try and log a property that doesn't already exist - what output do we get?
console.log(dreamCar["twoMotorCar"]);
"We get Undefined"
// 5.Add a new key-value pair to the vehicle. 
dreamCar.electricalVehicle = false;

// 6. Using bracket-notation update a property on the vehicle. 
dreamCar["color"] = "Yellow";
console.log(dreamCar["color"]);
// 7. Using dot-notation update a property on the vehicle. 
dreamCar.color = "Blue";
console.log(dreamCar["color"]);

// 8. Create a method for turning your vehicle on
dreamCar.turnOn= function(){
    if(dreamCar.isTurnOn === true){
        console.log("The car is on");
    }else{
        dreamCar.isTurnOn = true;
        console.log("The car is on");
    }
}




// 9.Create a method for turning your vehicle off
dreamCar.turnOff= function(){
    if(!(dreamCar.isTurnOn === true)){
        console.log("The car is off");
    }else{
        dreamCar.isTurnOn = false;
        console.log("The car is off");
    }
}



//10.   
// // a. Check if your vehicle is on (it should be off)
console.log(`Is the vehicle on?`);
console.log(dreamCar.isTurnOn);
// // b. Start your vehicle
dreamCar.turnOn();
// // c. Check if your vehicle is on (it should be on)
console.log(`Is the vehicle on?`);
console.log(dreamCar.isTurnOn);
// // d. Stop your vehicle
dreamCar.turnOff();
// // e. Check if your vehicle is on (it should be on)
console.log(`Is the vehicle on?`);
console.log(dreamCar.isTurnOn);



