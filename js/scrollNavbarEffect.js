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

const offset = 200; // Set the distance from the top of the section
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
