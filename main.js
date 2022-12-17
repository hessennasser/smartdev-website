const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav");
const navLink = document.getElementsByClassName("link-header");
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navMenu.classList.toggle("active");
});

function myFunction() {
    var element = document.getElementsByClassName("link-header");
    menuIcon.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// start btn-up 
btnUp = document.querySelector('.up-btn');

window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
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

// start btn-up 
whatsBtn = document.querySelector('.whats-btn');
window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        whatsBtn.classList.add("active");
    } else {
        whatsBtn.classList.remove("active");
    }
});
// end btn-up 

// start sticky header 
var header = this.document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
})

// end sticky header 