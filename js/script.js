const galeria = document.querySelector('.galeria');
const botonIzquierda = document.querySelector('.flecha-izquierda');
const botonDerecha = document.querySelector('.flecha-derecha');

botonIzquierda.addEventListener('click', () => {
  galeria.scrollLeft -= galeria.offsetWidth;
});

botonDerecha.addEventListener('click', () => {
  galeria.scrollLeft += galeria.offsetWidth;
});
