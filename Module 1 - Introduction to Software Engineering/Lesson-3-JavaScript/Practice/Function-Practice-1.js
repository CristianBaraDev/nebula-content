// 1. Write a function that takes in 1 number and returns that number + 1
    function number1(num){
        
        return num +1;
    }
    console.log(number1(5));

// 2. Write a function that takes in a name and outputs a sentence saying goodnight to that name.
function takeName(name){
   console.log(`Good night ${name}`);
}

takeName("Cristian")

// 3. Write a function that takes in an array of numbers. If that array includes the number 0 return 'This array has the number zero in it'
function checkIfHasZero(myArray){
    for(let i = 0; i < myArray.length; i++){
        if(myArray[i] === 0){
            console.log("The array constains Zero");
            break;
        }
    }
}
    const arrayNums = [0,1,2,3,4,5];
    checkIfHasZero(arrayNums);

// 4. Write a function that console logs 'hello world' 10 times to the console. 
function tenNames(){
    for(let i = 0; i<= 10;i++){
        console.log(`Hello world`);
    }
 }
tenNames();

// 5. Write the prior function utilizing a 'fat arrow' function

const  tenTimeArrow = ()=> {
    for(let i = 0; i<= 10;i++){
        console.log(`Hello world`);
    }
};

tenTimeArrow();