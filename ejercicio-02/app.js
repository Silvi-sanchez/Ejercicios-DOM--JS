// Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color.


let color = prompt('Ingresa un color en sistema hexadecinal sin #');

const changeColor = color => document.body.style.backgroundColor = `#${color}`

changeColor(color);

