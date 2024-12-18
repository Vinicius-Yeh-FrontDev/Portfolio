let canPlaySound = true;

window.addEventListener('scroll', function() {
    if (canPlaySound) {
        const audio = document.getElementById('scroll-sound');
        audio.currentTime = 0;
        audio.play();
        
        canPlaySound = false;
        
        // Define um intervalo para permitir o som novamente após 1 segundo
        setTimeout(() => {
            canPlaySound = true;
        }, 300); // Somente toca uma vez a cada 1 segundo
    }
});

document.querySelector('.clickable-area').addEventListener('click', function() {
    const audio2 = document.getElementById('click-sound');
    audio2.currentTime = 0; // Faz o áudio começar do início, mesmo se já estiver tocando
    audio2.play(); // Toca o áudio
});