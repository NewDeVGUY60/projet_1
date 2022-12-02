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
const arrowDown = document.querySelectorAll(".arrow-down")

btnContact.addEventListener('click', () => {
    contact.classList.toggle("visible");
    arrowDown[0].classList.toggle("arrow-up");
});
// Au survol du boutton photo affichez les contacts et les laisser visible tant que l'on survol est fait
const btnPhoto = document.querySelector('.btn-photo');
const photo = document.querySelector('.picture2');


btnPhoto.addEventListener('click', () => {
    photo.classList.toggle("visible");
    arrowDown[1].classList.toggle("arrow-up");
});
// Au survol du boutton video affichez les contacts et les laisser visible tant que l'on survol est fait

const btnVideo = document.querySelector('.btn-video');
const video = document.querySelector('.video2');

btnVideo.addEventListener('click', () => {
    video.classList.toggle("visible");
    arrowDown[2].classList.toggle("arrow-up");
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
        body.style.transition = "all 1s ease-in-out";
    } else {
        label.textContent = "🌙";
        body.style.transition = "all 1s ease-in-out";
    }
}
);
const styleInput = document.querySelector("#dark-mode");
styleInput.style.width = "0px";


// on change les immages des cards pour rendre la page plus dynamique
// je renseigne mes objets 

const onepiece = { alt: ["one piece book", "Luffy", "Zoro"], src: ["assets/images/One_Piece.jpg", "assets/images/luffy.jpg", "assets/images/zoro.jpg"] };
const videoGame = { alt: ["video game", "fortnite", "nintendo schitch"], src: ["assets/images/signal.jpg", "assets/images/fortnite.jpg", "assets/images/nintendo-switch.jpg"] };
const science = { alt: ["astronomie", "physique quantique théorie multivers", "station spacial"], src: ["assets/images/outer-space-background.jpg", "assets/images/parallel-world.jpg", "assets/images/international-space-station.jpg"] };

// je selection mes images

const section = document.querySelector("section");
const imgDynamique = section.querySelectorAll("img");

// toutes les 5 seconde je change mon image mon 1er hobies
let indexImgonepiece = 0;

const imgOnePiece = () => {
    const onepieceAlt = onepiece.alt;
    const onepieceSrc = onepiece.src;

    if (indexImgonepiece < onepieceSrc.length) {
        const srcValue = onepieceSrc[indexImgonepiece];
        imgDynamique[0].src = srcValue;
        const altValue = onepieceAlt[indexImgonepiece];
        imgDynamique[0].alt = altValue;
        indexImgonepiece++;
    } else {
        indexImgonepiece = 0;
        imgOnePiece();
    }

};

setInterval(imgOnePiece, 5000);

let indexImgVideoGame = 0;

const imgVideoGame = () => {
    const videoGameAlt = videoGame.alt;
    const videoGameSrc = videoGame.src;

    if (indexImgVideoGame < videoGameSrc.length) {
        const srcValue = videoGameSrc[indexImgVideoGame];
        imgDynamique[1].src = srcValue;
        const altValue = videoGameAlt[indexImgVideoGame];
        imgDynamique[1].alt = altValue;
        indexImgVideoGame++;
    } else {
        indexImgVideoGame = 0;
        imgVideoGame();
    }

};

setInterval(imgVideoGame, 5050);

let indexImgScience = 0;

const imgScience = () => {
    const scienceAlt = science.alt;
    const scienceSrc = science.src;

    if (indexImgScience < scienceSrc.length) {
        const srcValue = scienceSrc[indexImgScience];
        imgDynamique[2].src = srcValue;
        const altValue = scienceAlt[indexImgScience];
        imgDynamique[2].alt = altValue;
        indexImgScience++;
    } else {
        indexImgScience = 0;
        imgScience();
    }
    
};

setInterval(imgScience, 5100);

// si mon image change dans je dois lui appliquer une nouvelle class pour lui appliquer une transition

// imgDynamique[0].src.addEventListener("change",()=>{
//     imgDynamique[0].classList.add("img1");
//     const img1 = imgDynamique.querySelector("img1");
//     img1.classList.toggle("img-transition");

// });