// Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.


let colorRed = prompt('Ingresa el valor en red (0-255)');

let colorGreen = prompt('Ingresa el valor en green (0-255)');

let colorBlue= prompt('Ingresa el valor en blue(0-255)');

const changeColor = (colorRed, colorGreen, colorBlue) => document.body.style.backgroundColor = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;

changeColor(colorRed, colorGreen, colorBlue);