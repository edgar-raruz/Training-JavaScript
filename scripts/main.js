// Personalized welcome message code
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1.substitute');
function setUserName() {
  let myName = prompt('Por favor, ingresa tu nombre');
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
      myImage.setAttribute('src','images/plantitalowzoom.jpg');
    } else {
      myImage.setAttribute('src','images/plantitalow.jpg');
    }
}

// Create a dynamic list
const list = document.createElement('ul');
list.className = ('dynamic')
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'La siguiente es una lista dinámica. Da clic en el siguiente botón para agregar un nuevo elemento a la lista. Si hay elementos en la lista, da clic en un elemento para cambiar el texto a algo más.';

document.body.appendChild(info);
document.body.appendChild(list);

var btn = document.createElement('button');
btn.innerHTML = 'Haz clic aquí';
document.body.appendChild(btn)

btn.onclick = function functionDynamic() {
  const listItem = document.createElement('li');
  const listContent = prompt('¿Qué contenido deseas que tenga la lista de elementos?');
  listItem.textContent = listContent;
  if(!listContent){
    functionDynamic();
  } else {
  list.appendChild(listItem);
  }

  listItem.onclick = function functionDynamic(e) {
    e.stopPropagation();
    const listContent = prompt('Ingresa el nuevo contenido para el elemento de la lista');
    this.textContent = listContent;
}
}