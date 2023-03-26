// start header icon  
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
// end header icon  

// start sticky header 
const header = document.querySelector("header");

function toggleStickyHeader() {
    header.classList.toggle("sticky", window.scrollY > 0);
}

window.addEventListener("scroll", toggleStickyHeader);
// end sticky header 

// start scroll-to-top button 
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
// end scroll-to-top button 

// start WhatsApp button 
const whatsAppBtn = document.querySelector(".whats-btn");

function toggleWhatsAppButton() {
    whatsAppBtn.classList.toggle("active", window.scrollY > 250);
}

window.addEventListener("scroll", toggleWhatsAppButton);
// end WhatsApp button 

// start filter  
const filterItems = document.querySelectorAll(".filter-item");
const workCards = document.querySelectorAll(".work .card");

function removeActiveFilterItem() {
    filterItems.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}

function manageWorkCards() {
    workCards.forEach((card) => {
        card.style.display = "none";
        card.style.transform = "scale(0)";
        card.style.opacity = "0";
    });

    document.querySelectorAll(this.dataset.category).forEach((el) => {
        el.style.display = "block";
        el.style.transform = "scale(1)";
        el.style.opacity = "1";
    });
}

filterItems.forEach((item) => {
    item.addEventListener("click", removeActiveFilterItem);
    item.addEventListener("click", manageWorkCards);
});
// end filter  

// update copyright year dynamically
const copyrightText = document.querySelector(".footer-title");
const currentYear = new Date().getFullYear();

copyrightText.innerHTML = `Copyright © ${currentYear} <span>Hessen Nasser</span>`;





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


