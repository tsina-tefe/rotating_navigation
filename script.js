document.querySelector('.open').addEventListener('click', () => {
    document.querySelector('.circle').classList.add('rotate');
});

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.circle').classList.remove('rotate');
});

