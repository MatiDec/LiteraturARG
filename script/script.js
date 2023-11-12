/* Alternar entre modo claro y oscuro */

/* Declaración de constantes para la función */
const modo = document.getElementById('modo');
const pagina = document.querySelector('.body');
const fondoModoClaro = document.querySelector('.fondo');
const fondoModoOscuro = document.querySelector('.fondoModoOscuro');

function alternarModo(){
    /* Condiciona si la clase modoClaro se encuentra en la página, y acciona según el objeto seleccionado*/
    if (pagina.classList.contains('modoOscuro')) {
        pagina.classList.remove('modoOscuro');
        fondoModoClaro.style.display = 'block';
        fondoModoOscuro.style.display = 'none';
    } else {
        pagina.classList.add('modoOscuro');
        fondoModoClaro.style.display = 'none';
        fondoModoOscuro.style.display = 'block';
    }
}

modo.addEventListener("click", alternarModo);

/* Slider */

/* Declaración de constantes para las funciones */
const carouselContainer = document.querySelector('.carousel-container');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const prevButton = document.getElementById('anterior');
const nextButton = document.getElementById('siguiente');
const PC = window.innerWidth >= 768; /*Esto va a servir para el responsive*/

let currentSlide = 0;/* Indicador de la posición actual del slider */

if(PC){/*Si el dispositivo es de +768px de ancho, funcionará el código, sino, no. Esto es para utilizar un tipo de slider compatible con dispositivos móviles (hecho en CSS)*/
    /* Función para mostrar el contenido de la posición actual del slider*/
    function showSlide(slideIndex) {
        carouselSlides.forEach(slide => slide.style.display = 'none');
        carouselSlides[slideIndex].style.display = 'block';
    }
    /* Función para pasar a la siguiente posición del slider */
    function nextSlide(slideIndex) {
        currentSlide = (currentSlide + 1) % carouselSlides.length;
        showSlide(currentSlide);
    }
    /* Función para pasar a la anterior posición del slider */
    function prevSlide() {
        currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    /* Si el usuario da click en alguno de los dos botones, se activan las funciones correspondientes */
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

}