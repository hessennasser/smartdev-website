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

// start btn-up 
whatsBtn = document.querySelector('.whats-btn');
window.addEventListener('scroll', function () {
    if (window.scrollY > 250) {
        whatsBtn.classList.add("active");
    } else {
        whatsBtn.classList.remove("active");
    }
});
// end btn-up 

// start sticky header 
var header = this.document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// end sticky header 

// start translation 
// const translations = {
//     en: {
//         home: "home",
//         services: "services",
//         projects: "projects",
//         sallaStores: "salla stores",
//         contact: "contact",
//         englishLang: "english",
//         arabicLang: "arabic",
//     },
//     ar: {
//         home: "الصفحة الرئسية",
//         services: "خدماتنا",
//         projects: "مشاريعنا",
//         sallaStores: "متاجر سلة",
//         contact: "تواصل بنا",
//         englishLang: "الأنجليزية",
//         arabicLang: "العربية",
//     },
// };

// const languageSelctor = document.querySelector("#lang");
// languageSelctor.addEventListener("change", (event) => {
//     setLanguage(event.target.value);
// });

// const setLanguage = (language) => {
//     const elements = document.querySelectorAll("[data-i18n]");
//     elements.forEach((element) => {
//         const translationKey = element.getAttribute("data-i18n");
//         element.textContent = translations[language][translationKey];
//     });
//     document.dir = language === "ar" ? "rtl" : "ltr";
// };
// end translation
