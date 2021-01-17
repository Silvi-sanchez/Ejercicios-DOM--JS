// Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.


let user = prompt('Ingresa tu nombre');


let saludo = document.querySelector('#saludo');
saludo.innerHTML = `Hola ${user} bienvenida!`;

 


// let user = prompt('Ingresa tu nombre');

// let saludo = document.querySelector('#saludo');

// const saludos = user => saludo.innerHTML = `<h1> Hola ${user} bienvenida!</h1>`;

// saludos(user);