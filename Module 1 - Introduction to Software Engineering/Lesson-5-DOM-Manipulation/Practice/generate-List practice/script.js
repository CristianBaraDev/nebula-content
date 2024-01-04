
// document.addEventListener('click', (event) => {
//     console.log(event.target)
// })


// let dynamicH1 = document.querySelector('.dynamicH1');
// dynamicH1.addEventListener("click", (e) => {
//     console.log("Clicked H1")
// })

// let clicked = true;




// document.addEventListener("click", (e) => {
//     const color = e.target.style.backgroundColor
//     if(color === 'red'){
//         e.target.style.backgroundColor = 'green'
//     }else{
//         e.target.style.backgroundColor = 'red'
//     }
    
// })


// for(let i = 0; i < 10; i++){
//     let newEle = document.createElement('p');
//     newEle.innerText = `This is STILL so cool! Even after ${i} times!!`;
//     document.body.appendChild(newEle);
// }

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target.movieTitle.value)
})