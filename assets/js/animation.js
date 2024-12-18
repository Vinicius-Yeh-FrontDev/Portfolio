const animation = document.getElementById('animation');
const square1 = document.getElementById('square1');
const square2 = document.getElementById('square2');
const overflow = document.getElementById('scroll');

animation.addEventListener('click', function(){
    setTimeout(() => {
        square1.classList.add('square1-animation');
        square2.classList.add('square2-animation');
    },10);
});

animation.addEventListener('click', function(){
    setTimeout(() => {
        overflow.classList.add('overflow');
        square1.classList.add('none');
        square2.classList.add('none');
        animation.classList.add('none');
    }, 1000);
    setTimeout(() => {
        document.getElementById('scroll').innerHTML += '<div id="button-test" class="hover-effect"></div>'
        document.querySelector('.hover-effect').addEventListener('mouseover', function() {
            const efeitoHover = document.getElementById('hover-sound');
            efeitoHover.currentTime = 0; // Reseta o tempo do áudio
            efeitoHover.play(); // Toca o áudio de hover
        });
    }, 1200);
});