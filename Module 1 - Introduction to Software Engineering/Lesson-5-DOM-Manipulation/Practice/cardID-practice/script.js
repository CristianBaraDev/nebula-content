
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let newDiv = document.createElement('div');
    document.body.appendChild(newDiv);
    document.body.style.backgroundColor = "green";
    newDiv.style.width = "600px";
    newDiv.style.height = "400px";
    newDiv.style.backgroundColor = "purple";
    newDiv.style.borderRadius = "15px";
    newDiv.style.marginLeft = "35%";
    newDiv.style.boxShadow = " 5px 10px 18px blue";
    let profilePic = document.createElement('img');
    profilePic.src = "IMG_2436.jpg";
    profilePic.style.width = "125px";
    profilePic.style.height = "150px";
    profilePic.style.marginLeft = "40%";
    profilePic.style.marginTop = "2%";
    profilePic.style.borderRadius = "15px";
    newDiv.appendChild(profilePic);
    let newh1 = document.createElement("h1");
    let template1 = e.target.userName.value;
    newh1.innerText = `Name: ${template1}`;
    newDiv.appendChild(newh1);
    newh1.style.marginLeft = "5%";
    newh1.style.fontSize = "22px";
    let newh2 = document.createElement("h1");
    let template2 = e.target.idNumber.value;
    newh2.innerText = `ID Name: ${template2}`;
    newDiv.appendChild(newh2);
    newh2.style.marginLeft = "5%";
    newh2.style.fontSize = "22px";
    let newh3 = document.createElement("h1");
    let template3 = e.target.address.value;
    newh3.innerText = `Address: ${template3}`;
    newDiv.appendChild(newh3);
    newh3.style.marginLeft = "5%";
    newh3.style.fontSize = "22px";
    let newh4 = document.createElement("h1");
    let template4 = e.target.funFact.value;
    newh4.innerText = `Fun Fact: ${template4}`;
    newDiv.appendChild(newh4);
    newh4.style.marginLeft = "5%";
    newh4.style.fontSize = "22px";
})