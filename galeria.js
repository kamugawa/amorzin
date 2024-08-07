const images = [
    'fotos/1.jfif',
    'fotos/81641b9c-8c8e-4da2-aa98-a34929d893fb.jfif',
    'fotos/c693103b-d3e9-4d82-9816-5f5b1ddc3b6e.jfif',
    'fotos/IMG_0818.webp',
    'fotos/IMG_0819.webp',
    'fotos/IMG_0820.webp',
    'fotos/IMG_0821.webp'
];

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = images[currentIndex];
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

function nextImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = images[currentIndex];
}

function previousImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = images[currentIndex];
}

function goToMenu() {
    const backToMenuButton = document.getElementById('back-to-menu');
    backToMenuButton.classList.add('animated');
    setTimeout(() => {
        window.location.href = 'index.html'; // Altere 'index.html' para o nome do arquivo da página inicial, se necessário
    }, 500); // Tempo de duração da animação
}
