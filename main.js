// start header icon  
const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav");
const navLink = document.getElementsByClassName("link-header");
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navMenu.classList.toggle("active");
});
function myFunction() {
    menuIcon.classList.toggle("active");
    navMenu.classList.toggle("active");
}
// end header icon  

// start sticky header 
var header = this.document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});
// end sticky header 

// start btn-up 
btnUp = document.querySelector('.up-btn');
window.addEventListener('scroll', function () {
    if (window.scrollY > 250) {
        btnUp.classList.add("active");
    } else {
        btnUp.classList.remove("active");
    }
});
btnUp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
// end btn-up 
// start whats-app btn 
whatsBtn = document.querySelector('.whats-btn');
window.addEventListener('scroll', function () {
    if (window.scrollY > 250) {
        whatsBtn.classList.add("active");
    } else {
        whatsBtn.classList.remove("active");
    }
});
// end whats-app btn 

//start filter  
let switchersLis = document.querySelectorAll(".filter-item");
let cards = document.querySelectorAll(".work .card");
switchersLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageCards);
});
// remove active class from lis and add to current 
function removeActive() {
    switchersLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}
// manage cards 
function manageCards() {
    cards.forEach((cards) => {
        cards.style.display = ("none");
        cards.style.scale = ("0");
        cards.style.opacity = ("0");
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = ("block");
        el.style.scale = ("1");
        el.style.opacity = ("1");
    });
}
//end filter  

//scrollReveal
ScrollReveal({
    // reset: true,
    distance: "60px",
    duration: 1500,
    delay: 100
});
// landing section
ScrollReveal().reveal('.spacial-heading', { delay: 500, origin: "bottom" });
ScrollReveal().reveal('.landing-social a', { delay: 500, origin: "right bottom", interval: 50 });
ScrollReveal().reveal('.landing-text a', { delay: 600, origin: "left", interval: 50 });
ScrollReveal().reveal('.landing-text h1', { delay: 500, origin: "left" });
ScrollReveal().reveal('.landing-text h2', { delay: 550, origin: "left" });
ScrollReveal().reveal('.landing-text h3', { delay: 600, origin: "left" });
ScrollReveal().reveal('.landing-text p', { delay: 650, origin: "left" });
// services section
ScrollReveal().reveal('.services .box:nth-child(1)', { delay: 500, origin: "left" });
ScrollReveal().reveal('.services .box:nth-child(2), .services .box:nth-child(3)', { delay: 600, origin: "bottom" });
ScrollReveal().reveal('.services .box:nth-child(4)', { delay: 700, origin: "left" });

// skills section
ScrollReveal().reveal('.swiper-wrapper', { delay: 0, origin: "top" });

// projects sections
ScrollReveal().reveal('.projects .card', { delay: 500, origin: "bottom", interval: 50 });
ScrollReveal().reveal('.caption', { delay: 600, origin: "right" });
//content section
ScrollReveal().reveal('.main-input', { delay: 500, origin: "left", interval: 50 });
ScrollReveal().reveal('.submit-btn', { delay: 500, origin: "bottom" });
ScrollReveal().reveal('.contact .box,.box.social button', { delay: 600, origin: "right", interval: 50 });


// skills swiper 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 7,
    autoplay: {
        delay: 2500, // 5 seconds delay between slides
    },
    loop: true, // enable loop mode
    spaceBetween: 20,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    hashNavigation: {
        watchState: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        968: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    }
});

// tilt js effect 
VanillaTilt.init(document.querySelector(".services .content .box",".skill"), {
    reverse: true,
    max: 180,
    scale: 1.5,
    speed: 600,
});
