let person = prompt("Please enter your name");

const myName = document.getElementById("myName");

myName.textContent = person;




const myClock = document.getElementById('myClock');
const currentDate = new Date();
myClock.innerHTML = currentDate;