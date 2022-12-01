// Au clique sur le menu smartphone afficher ou cacher le menu .

const btn = document.querySelector('.btn');
const menu = document.querySelector('.menu-contener');

btn.addEventListener('click', () => {
    menu.classList.toggle("active");
});

// Au survol du boutton contact affichez les contacts et les laisser visible tant que l'on survol est fait 

const btnContact = document.querySelector('.btn-contact');
const contact = document.querySelector('.contact2');

btnContact.addEventListener('click', () => {
    contact.classList.toggle("visible");
});
// Au survol du boutton photo affichez les contacts et les laisser visible tant que l'on survol est fait
const btnPhoto = document.querySelector('.btn-photo');
const photo = document.querySelector('.picture2');

btnPhoto.addEventListener('click', () => {
    photo.classList.toggle("visible");
});
// Au survol du boutton video affichez les contacts et les laisser visible tant que l'on survol est fait

const btnVideo = document.querySelector('.btn-video');
const video = document.querySelector('.video2');

btnVideo.addEventListener('click', () => {
    video.classList.toggle("visible");
});

