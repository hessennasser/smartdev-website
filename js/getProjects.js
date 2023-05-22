// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCj2bwm8YdABjgfqm_UrQot0YAD8OFB8Og",
    authDomain: "smartdev-dashboard.firebaseapp.com",
    databaseURL: "https://smartdev-dashboard-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "smartdev-dashboard",
    storageBucket: "smartdev-dashboard.appspot.com",
    messagingSenderId: "567753932941",
    appId: "1:567753932941:web:96d7ce959c2057a67fe2c4",
    measurementId: "G-D614MJ7LJK"
};

// Initialize Firebase app and database
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Get a reference to the data you want to fetch
const projectsRef = ref(database, "projects");

// Listen for changes to the data in real-time
onValue(projectsRef, (snapshot) => {
    const projects = snapshot.val();
    document.getElementById("projects").querySelector(".content").innerHTML = "";
    for (let project in projects) {
        const projectHTML = `
            <div class="card ${projects[project].category}">
                <div class="project-img" style="background-image: url(${projects[project].projectImg});">
                    <div class="caption">
                    ${projects[project].projectName}
                    </div>
                </div>
                <span class="links">
                ${projects[project].demoLink === projects[project].repositoryLink ?
                `<a href="${projects[project].repositoryLink}" target="_blank" class="link-view"><img src="../images/code.gif" style="width: 70px" alt="smart dev"></a>`
                :
                ` <a href="${projects[project].demoLink}" target="_blank" class="link-view"><img src="../images/eye.gif" style="width: 70px" alt="smart dev"></a>
            <a href="${projects[project].repositoryLink}" target="_blank" class="link-view"><img src="../images/code.gif" style="width: 70px" alt="smart dev"></a>`}
                </span>
            </div>
        `;
        document.getElementById("projects").querySelector(".content").innerHTML += projectHTML;

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
        filterItems[0].click(); // Trigger the click event on the first filter item


    }
}, (error) => {
    console.error(error);
});