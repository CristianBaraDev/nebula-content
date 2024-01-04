// COUNTER EXERCISE

// Select the body element from index.html

// Set an attribute of 'style' to the body tag and add a background color of anything other than white

const myBody= document.querySelector("body");

myBody.style.backgroundColor = "purple";


/* -------------------------------------------------------------------------- */

// Create an h1 element
let newH1 = document.createElement('h1');
// Append a new h1 element to the body element as a child
document.body.appendChild(newH1);
// Add text to the h1 element 
newH1.innerText = "This is my new H1"
// Assign the background color of this element to something unique
newH1.style.backgroundColor = "yellow";
// Set a new style attribute to the h1 element
newH1.style.borderRadius = "25px";
// Add font size to the h1Element
newH1.style.fontSize = "50px";
// Set the default text to the number zero

newH1.innerText = `0`;
/* -------------------------------------------------------------------------- */

// Create a button element to increment the h1 text
let newButton= document.createElement('button');
// Append the button element to the body element
document.body.appendChild(newButton);
// Add text to the boxButton
newButton.innerText = "INCREMENT +1"
// Add a class attribute to boxButton
newButton.className = "buttonIncrement";
/* -------------------------------------------------------------------------- */

// Create another button element to decrement the h1 text
let newButton2= document.createElement('button');
// Add the button element to the body element
document.body.appendChild(newButton2);
// Add text to the button element
newButton2.innerText = "DECREMENT -1"
// Add a class attribute of style to the button element
newButton.className = "buttonDecrement";
/* -------------------------------------------------------------------------- */
// ADD BUTTON FUNcTION
// Create functionality that, when you click this button it increases the h1 value

let num = 0;
newButton.addEventListener("click",(e) =>{
   num++;
   newH1.textContent = `${num}`;
})
// Create functionality that, when you click this button it decreases the h1 value
newButton2.addEventListener("click",(e) =>{
    num--;
    newH1.textContent = `${num}`;
 })

/* -------------------------------------------------------------------------- */
// DELETE BUTTON FUNCTION 

let newButton3= document.createElement('button');

document.body.appendChild(newButton3);

newButton3.innerText = "DELETE"

newButton.className = "buttonDelete";

newButton3.addEventListener("click",(e) =>{
    num = 0;
    newH1.textContent = `${num}`;
 })