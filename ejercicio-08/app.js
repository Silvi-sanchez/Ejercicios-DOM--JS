// Hacer un programa que al iniciarse pregunte mediante prompts por

// un título
// una url de una imagen
// una url a un artículo

    // Utilizar esos datos para completar en el html una card que tenga

// una imagen, con la url de la imagen ingresada
// un título, con el texto del título ingresado
// un link que diga Leer más, con la url al artículo ingresado

    // Dar algunos estilos mínimos a la card:

// centrarla con respecto a la pantalla
// agregarle un borde
// agregarle un sombreado
// cambiarle la tipografía
// cambiarle los tamaños de fuente
// cambiarle los colores por defecto


const title = prompt("Ingrese un título");
const image = prompt("Ingrese una url de una imagen");
const link = prompt("Ingrese una url de un artículo");

let titleElement = document.createElement('h1');
let imageElement = document.createElement('img');
let linkElement = document.createElement('a');


titleElement.innerText = title;
titleElement.classList.add('title');
imageElement.src = image;
imageElement.classList.add('image');
linkElement.href = link;
linkElement.innerText = 'Leer más...';

let principalDiv = document.querySelector('#principalDiv');
principalDiv.appendChild(titleElement);
principalDiv.appendChild(imageElement);
principalDiv.appendChild(linkElement);