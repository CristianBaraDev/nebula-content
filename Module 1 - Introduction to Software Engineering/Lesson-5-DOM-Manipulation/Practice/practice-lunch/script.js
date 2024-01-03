// Grab the elements and log them to the console



// Q1:  Attach this document to the index.html
//Done

// Q2:  Grab the second element that has the text Hello
    const secondElement = document.getElementById("second");
    console.log(secondElement);

// Q3:  Grab the text in the h1 that says 'Good Afternoon'
   const allElements = document.querySelectorAll('h1');
   const goodAfterNoon = allElements[2];
   console.log(goodAfterNoon);

// Q4:  Grab the h1 with the text that says "Catch me if you can"
    let catchMe = document.getElementsByClassName('catch-me')[0];
    console.log(catchMe);

// Q5:  Grab the span element and change the text to "Got ya"
    const newSpan = document.querySelector('span');
    newSpan.innerText ='Got ya';
