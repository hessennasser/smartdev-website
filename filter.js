/* ===================================================== start filter ==================================================== */

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

window.onload = filterItems[0].click();
/* ===================================================== end filter ==================================================== */

