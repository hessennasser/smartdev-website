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