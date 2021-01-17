// En un documento html agregar al menos tres imágenes de distintos animales, una por cada animal. Hacer un programa que al iniciarse pregunte mediante un prompt por un animal (indicando en el mensaje las opciones disponibles) y muestre solamente la imagen del animal elegido.


let animal = prompt('Ingresa un animal: Perro, Gato o Tortuga').toLocaleLowerCase();

const mostrar = (animal) =>{
    if(animal === 'perro'){
        document.querySelector('#perro').style.display = 'block'
    }else if(animal === 'gato'){
        document.querySelector('#gato').style.display = 'block'
    }else if(animal === 'tortuga'){
        document.querySelector('#tortuga').style.display = 'block'
    }else{
        alert('Elije un animal de la lista')
    }
}

mostrar(animal);


