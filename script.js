const open = document.querySelector('.open');
const close = document.querySelector('.close');
const page = document.querySelector('.page');
const circle = document.querySelector('.circle');
const nav = document.querySelector('.nav-hidden');

open.addEventListener('click', () => {
    circle.classList.add('rotate-button');
    page.classList.add('rotate-page');
    nav.classList.add('rotate-nav');
});

close.addEventListener('click', () => {
    circle.classList.remove('rotate-button');
    page.classList.remove('rotate-page');
    nav.classList.remove('rotate-nav');
});

