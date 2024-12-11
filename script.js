// script.js

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabs li');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Elimina la clase 'active' de todas las pestañas y contenidos
            tabs.forEach(item => item.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            // Agrega la clase 'active' a la pestaña y contenido seleccionados
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });
});

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const images = carousel.querySelector('.carousel-images');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        const totalImages = images.children.length;
        let currentIndex = 0;

        // Función para actualizar la posición del carrusel
        const updateCarousel = () => {
            const offset = -currentIndex * 100; // Desplazamiento por imagen
            images.style.transform = `translateX(${offset}%)`;
        };

        // Evento para botón "Anterior"
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateCarousel();
        });

        // Evento para botón "Siguiente"
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel();
        });
    });
});

