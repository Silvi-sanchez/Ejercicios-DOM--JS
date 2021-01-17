// En un documento html hacer un post de una red social que contenga:

// un h3 con la usuaria
// un p con un lorem ipsum
// 3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra) más un número con la cantidad
// Dar estilos para que

// la tipografía sea distinta a la default
// los spans estén en línea, separados con márgenes, tengan un color de fondo gris suave y un border radius

// Hacer un programa que al iniciarse pregunte mediante tres prompts por la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes


let mg = prompt(`Me gusta`);
let me = prompt(`Me encanta`);
let ma = prompt(`Me asombra`);

const reaccion1 = document.querySelector('#mg');
const reaccion2 = document.querySelector('#me');
const reaccion3 = document.querySelector('#ma');

const reacciones = (mg, me, ma) => {
    reaccion1.innerHTML = `Me Gusta 👍 ${mg} `
    reaccion2.innerHTML = `Me encanta ❤️ ${me} `  
    reaccion3.innerHTML = `Me asombra 😲 ${ma}`
    
}


reacciones(mg, me, ma);