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
/* ================================================== end header menu ================================================= */

/* ================================================== start sticky header ================================================= */
const header = document.querySelector("header");

function toggleStickyHeader() {
    header.classList.toggle("sticky", window.scrollY > 0);
}
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
scrollToTopBtn.addEventListener("click", scrollToTop);
/* ================================================== end scroll-to-top button ================================================= */

/* ================================================== start WhatsApp button ================================================= */
const whatsAppBtn = document.querySelector(".whats-btn");

function toggleWhatsAppButton() {
    whatsAppBtn.classList.toggle("active", window.scrollY > 250);
}

/* ================================================== end WhatsApp button ================================================= */

/* =============================== start update copyright year dynamically ============================================= */
const copyrightText = document.querySelector(".footer-title");
const currentYear = new Date().getFullYear();

copyrightText.innerHTML = `Copyright © ${currentYear} <span>Hessen Nasser</span>`;

/* =============================== end update copyright year dynamically ============================================= *//* =============================== start make the scrollingProgress ============================== */

// select the scrollProgress span element
/* =============================== end make the scrollingProgress ================================ */

/* ========================================= start loader ======================================== */

const loader = document.getElementById("loader");
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.overflow = "hidden";
    loader.classList.remove("active");
    document.body.style.overflow = "auto";
});

/* ========================================= end loader ======================================== */

// Window Scroll Event Listener 

window.addEventListener("scroll", () => {
    // remove active class when scrolling
    menuIcon.classList.remove("active");
    mainNavigation.classList.remove("active");
    toggleStickyHeader()
    toggleScrollToTopButton()
    toggleWhatsAppButton()

    // Get the total height of the document
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    // Get the current scroll position
    let scrollPosition = window.scrollY;
    // Calculate the percentage of height scrolled
    let percentageScrolled = Math.round((scrollPosition / totalHeight) * 100);

    const scrollProgressElement = document.querySelector(".scrollProgress span");
    scrollProgressElement.style.width = `${percentageScrolled}%`;

});