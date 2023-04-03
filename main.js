/* ================================================== start header menu ================================================= */
const menuIcon = document.querySelector(".menu-icon");
const mainNavigation = document.querySelector(".nav");
const headerLinks = document.querySelectorAll(".link-header");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    mainNavigation.classList.toggle("active");
});

function toggleNavigation() {
    menuIcon.classList.toggle("active");
    mainNavigation.classList.toggle("active");
}
// remove active class when scrolling
window.onscroll = () => {
    menuIcon.classList.remove("active");
    mainNavigation.classList.remove("active");
};
/* ================================================== end header menu ================================================= */

/* ================================================== start sticky header ================================================= */
const header = document.querySelector("header");

function toggleStickyHeader() {
    header.classList.toggle("sticky", window.scrollY > 0);
}

window.addEventListener("scroll", toggleStickyHeader);
/* ================================================== end sticky header ================================================= */

/* ================================================== start scroll-to-top button ================================================= */
const scrollToTopBtn = document.querySelector(".up-btn");

function toggleScrollToTopButton() {
    scrollToTopBtn.classList.toggle("active", window.scrollY > 250);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

window.addEventListener("scroll", toggleScrollToTopButton);
scrollToTopBtn.addEventListener("click", scrollToTop);
/* ================================================== end scroll-to-top button ================================================= */

/* ================================================== start WhatsApp button ================================================= */
const whatsAppBtn = document.querySelector(".whats-btn");

function toggleWhatsAppButton() {
    whatsAppBtn.classList.toggle("active", window.scrollY > 250);
}

window.addEventListener("scroll", toggleWhatsAppButton);
/* ================================================== end WhatsApp button ================================================= */

/* =============================== start update copyright year dynamically ============================================= */
const copyrightText = document.querySelector(".footer-title");
const currentYear = new Date().getFullYear();

copyrightText.innerHTML = `Copyright © ${currentYear} <span>Hessen Nasser</span>`;

/* =============================== end update copyright year dynamically ============================================= */
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
ScrollReveal().reveal('.filter li', { delay: 400, origin: "top", interval: 30 });
ScrollReveal().reveal('.projects .card', { delay: 500, origin: "bottom", interval: 50 });
ScrollReveal().reveal('.caption', { delay: 600, origin: "right" });
//content section
ScrollReveal().reveal('.main-input', { delay: 500, origin: "left", interval: 50 });
ScrollReveal().reveal('.submit-btn', { delay: 500, origin: "bottom" });
ScrollReveal().reveal('.contact .box,.box.social button', { delay: 600, origin: "right", interval: 50 });
/* =============================== end scrollReveal ================================================= */

/* =============================== start adding active class to navbar ============================== */
// Cache the section elements
const sections = document.querySelectorAll('section');

// Define the debounce function
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const offset = 100; // Set the distance from the top of the section
window.addEventListener('scroll', debounce(function () {
    const scrollPos = window.scrollY;
    const links = document.querySelectorAll('.link-header');
    links.forEach(link => {
        const relSection = document.querySelector(`.${link.getAttribute("relSection")}`);
        if (relSection.offsetTop - offset <= scrollPos && relSection.offsetTop + relSection.offsetHeight - offset > scrollPos) {
            links.forEach(link => {
                link.parentElement.classList.remove('active');
            });
            link.parentElement.classList.add('active');
        } else {
            link.parentElement.classList.remove('active');
        }
    });
}));

/* =============================== end adding active class to navbar ============================== */

/* =============================== start make the scrollingProgress ============================== */

// select the scrollProgress span element
const scrollProgressElement = document.querySelector(".scrollProgress span");
window.addEventListener("scroll", () => {
    // Get the total height of the document
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    // Get the current scroll position
    let scrollPosition = window.scrollY;
    // Calculate the percentage of height scrolled
    let percentageScrolled = Math.round((scrollPosition / totalHeight) * 100);

    scrollProgressElement.style.width = `${percentageScrolled}%`;
});

/* =============================== end make the scrollingProgress ================================ */

/* ========================================= start loader ======================================== */

const loader = document.getElementById("loader");
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
        loader.classList.remove("active");
    document.body.style.overflow = "auto";
    }, 3000);
})

/* ========================================= end loader ======================================== */

