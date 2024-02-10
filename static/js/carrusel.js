document.addEventListener("DOMContentLoaded", function () {
    // Clonar el primer slide y agregarlo al final para hacer el carrusel infinito
    const slideTrack = document.querySelector(".slide-track");
    const firstSlide = slideTrack.firstElementChild.cloneNode(true);
    slideTrack.appendChild(firstSlide);
});
