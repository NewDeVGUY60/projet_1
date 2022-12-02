// Au clique sur le menu smartphone afficher ou cacher le menu .

const btn = document.querySelector('.btn');
const menu = document.querySelector('.menu-contener');


// menu burger translation avec toggle

const barreMenu = document.querySelector(".barre-menu");
const barres = document.querySelectorAll(".barre");
// on donne des noms de variable aux neux pour mieux les utiliser
const [a, b, c] = barres;
// on set les valeurs pour avoir les bonnes conditions dans l'event, pour les rotation
b.style.display = "block";

a.style.transform = "rotate(0deg)";
c.style.transform = "rotate(0deg)";

// on set les valeurs pour avoir les bonnes conditions dans l'event, pour les écartement des barres

const menuTitle = document.querySelectorAll(".menu-title");
const [d, e, f] = menuTitle;
d.style.padding = "0";
e.style.padding = "0";
f.style.padding = "0";

// events de la selection du menu burger

btn.addEventListener('click', () => {

    menu.classList.toggle("active");

    a.classList.toggle("cross");
    b.classList.toggle("cross");
    c.classList.toggle("cross");
// active la rotation si l'event est vrais le désactive dans le cas contaire 
    if (a.style.transform === "rotate(0deg)") {
        // a.style.transformOrigin= "center";
        a.style.transform = "rotate(45deg)";
        // c.style.transformOrigin= "center";
        c.style.transform = "rotate(-45deg)";
    } else {
        a.style.transform = "rotate(0deg)";
        c.style.transform = "rotate(0deg)";
    }
// met la barre du milieux en dehor du html pour le cacher
    if (b.style.display === "block") {
        b.style.display = "none";
    } else {
        b.style.display = "block";
    }
// annule le padding des barres pour mieux les placer
    if (d.style.padding === "5") {
        d.style.padding = "0";
        e.style.padding = "0";
        f.style.padding = "0";
    } else {
        d.style.padding = "5";
        e.style.padding = "5";
        f.style.padding = "5";
    }

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

// change le style du background-color et la couleur du text pour appliquer le mode sombre 

const darkMode = document.querySelector("input[name=dark-mode]");
const label = document.querySelector("label");
label.textContent = "🔅";

const body = document.querySelector("body");

darkMode.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
    if (label.textContent === "🌙") {
        label.textContent = "🔅";
    } else {
        label.textContent = "🌙";
    }
}
);
const styleInput = document.querySelector("#dark-mode");
styleInput.style.width = "0px";


// on change les immages des cards pour rendre la page plus dynamique

const  section = document.querySelector("section");
const imgDynamique = section.querySelectorAll("img");

console.log(imgDynamique);



