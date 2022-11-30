const btn = document.querySelector('.btn');
const active = document.querySelector('.active');
const menu = document.querySelector('.menu-contener');
btn.addEventListener('click', (e) => {
    menu.classList.toggle('active');
});


// const btn2 = document.querySelector('.btn-contact');
// const menu2 = document.querySelector('.contact');

// btn2.addEventListener('click', () => {
//     menu2.classList.toggle('active');
// });