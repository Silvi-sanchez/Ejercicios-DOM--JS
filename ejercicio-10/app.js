// En un documento html crear una lista desordenada con distintos paises de cada continente (entre 2 y 4 por continente). Hacer un programa que al iniciarse pregunte mediante un prompt por un continente y destaque en rojo y en negrita aquellos paises de dicho continente.

let continente = prompt('Ingrese un continente:');

let paises = document.createElement('h1');

const europa = ['España', 'Albania', 'Croacia'];
const america = ['Argentina', 'Ecuador', 'Costa Rica'];
const asia = ['Catar','Israel','China'];
const africa = ['Marruecos', 'Camerún', 'Egipto'];
const oceania = ['Australia', 'Fiyi', 'Nueva Zelanda'];

switch(continente.toLowerCase().replace('á', 'a').replace('é', 'e').replace('í','i').replace('ó','o').replace('ú','u')){
    case 'europa':
        paises.innerText = europa;
    break;
    case 'america':
        paises.innerText = america;
    break;
    case 'asia':
        paises.innerText = asia;
    break;
    case 'africa':
        paises.innerText = africa;
    break;
    case 'oceania':
        paises.innerText = oceania;
    break;
    default:
        paises.innerText = 'Opción erronea';
}

let principalDiv = document.querySelector('#divMayor');
principalDiv.appendChild(paises);