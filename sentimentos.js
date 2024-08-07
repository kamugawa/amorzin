function goToMenu() {
    const backToMenuButton = document.getElementById('back-to-menu');
    backToMenuButton.classList.add('animated');
    setTimeout(() => {
        window.location.href = 'index.html'; // Altere 'index.html' para o nome do arquivo da página inicial, se necessário
    }, 500); // Tempo de duração da animação
}
