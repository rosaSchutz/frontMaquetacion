const imagen = document.getElementById("image");
const imagenes = ["./img/img1.svg", "./img/img2.svg", "./img/img3.svg"];
let indice = 0;

function cambiarImagen() {
    imagen.src = imagenes[indice];
    // Incrementa el índice para mostrar la siguiente imagen en la próxima llamada
    indice = (indice + 1) % imagenes.length;
}

// Llama a la función cambiarImagen cada cierto intervalo de tiempo (por ejemplo, cada 5 segundos)
setInterval(cambiarImagen, 5000);  // 5000 milisegundos = 5 segundos
