document.querySelector('.open').addEventListener('click', () => {
    document.querySelector('.circle').classList.add('rotate-button');
    document.querySelector('.page').classList.add('rotate-page');
    document.querySelector('.nav-hidden').classList.add('rotate-nav');
});

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.circle').classList.remove('rotate-button');
    document.querySelector('.page').classList.remove('rotate-page');
    document.querySelector('.nav-hidden').classList.remove('rotate-nav');
});

