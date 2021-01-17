// Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)


let porcentaje = prompt(`Ingrese porcentaje de progreso - Solo números`);

const progreso = document.querySelector('#progreso');


const changeProgreso = porcentaje => progreso.style.width = `${porcentaje}%`;


changeProgreso(porcentaje);

