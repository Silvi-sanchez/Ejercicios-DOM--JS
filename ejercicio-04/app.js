// Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:

// Opción elegida	Ancho de imagen
// chica	200px
// mediana	500px
// grande	800px


let tamaño = prompt('Ingresa el tamaño de la imagen (Grande, Mediana, Chica)').toLowerCase();
const imagen = document.getElementById('imagen');

const changeWidth = tamaño =>{
  if(tamaño === 'grande' || tamaño === 'mediana'|| tamaño === 'chica'){
    if(tamaño === 'grande'){
      tamaño = 800
    } else if(tamaño === 'mediana'){
      tamaño = 500
    } else if(tamaño === 'chica'){
      tamaño = 200
    }

    imagen.innerHTML= `<img src="./img/imagen.jpg" alt="Foto" width=${tamaño}px>`;

    }else {
    // imagen.innerHTML = 'Ingresa un tamaño valido';
    alert('Ingresa un tamaño valido');
  }
};

changeWidth(tamaño);
