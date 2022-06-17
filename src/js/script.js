window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuLink = document.querySelectorAll('.menu__link'),
    gamburger = document.querySelector('.gamburger');

    gamburger.addEventListener('click', () => {
        gamburger.classList.toggle('gamburger__active');
        menu.classList.toggle('menu__active');
    });

    menuLink.forEach(link => {
        link.addEventListener('click', () => {
            gamburger.classList.toggle('gamburger__active');
            menu.classList.toggle('menu__active');
        })
    })
})