const animation = document.getElementById('animation');
const square1 = document.getElementById('square1');
const square2 = document.getElementById('square2');
const overflow = document.getElementById('scroll');

animation.addEventListener('click', function(){
    setTimeout(() => {
        square1.classList.add('square1-animation');     // Aciona a animação de introdução
        square2.classList.add('square2-animation');
    },10);
});

animation.addEventListener('click', function(){
    setTimeout(() => {
        overflow.classList.add('overflow'); // Revela a barra de navegação lateral do site
        square1.classList.add('none');          //
        square2.classList.add('none');          // Remove os elementos usados na animação de introdução
        animation.classList.add('none');        //
    }, 1000); // Remove apenas 1s depois do click, o suficiente para a animação finalizar
    setTimeout(() => {
        document.getElementById('scroll').innerHTML += `
        <header>
            <nav class="menu">
                <ul>
                    <li><a href="#" class="menu_hover hover-effect">What i do?</a></li>     
                    <li><a href="#" class="menu_hover hover-effect">Projects</a></li>
                    <li><img src="./assets/img/Logo.png" alt="Logo"></li>
                    <li><a href="#" class="menu_hover hover-effect">About me</a>
                    </li><li><a href="#" class="menu_hover hover-effect">Contact</a></li>
                </ul>
            </nav>
        </header>`
        const hoverElements = document.querySelectorAll('.hover-effect'); // Seleciona todos elementos com a classe hover-effect que é tudo que vai ter hover, vai ter efeito sonoro
        const efeitoHover = document.getElementById('hover-sound'); // Seleciona o efeito sonoro
        hoverElements.forEach(elem => {
            elem.addEventListener('mouseover', () => {
                efeitoHover.currentTime = 0; // Reseta sempre o áudio para o início
                efeitoHover.play(); // Faz o áudio ser reproduzido
            });
        });
    }, 1200); // Revela o conteúdo do site 1,2s após o primeiro click, tempo suficiente para haver a animação e remoção dos elementos.
});