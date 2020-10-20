// Personalized welcome message code
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Por favor, ingresa tu nombre.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Esto se ve chido, ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Esto se ve chido, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}

// Change player name on button
const para = document.querySelector('.player');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Ingresa un nuevo nombre');
  if(!name) {
    updateName();
  }
  else{
  para.textContent = 'Jugador 1: ' + name;
  }
}

// Image switcher code
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/plantitalow.jpg') {
      myImage.setAttribute('src','images/firefox.jpg');
    } else {
      myImage.setAttribute('src','images/plantitalow.jpg');
    }
}