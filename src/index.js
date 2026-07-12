import "./style.css";
import createHomePage from "./home.js";
import createAboutPage from "./about.js";
import createMenuPage from "./menu.js";

const content = document.querySelector("#content");
const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");

function clearContent() {
    content.innerHTML = "";
}

function loadTab(tabFunction) {
    clearContent();
    content.appendChild(tabFunction());
}

loadTab(createHomePage);


aboutBtn.addEventListener("click", () => {
    loadTab(createAboutPage);
})

menuBtn.addEventListener("click", () => {
    loadTab(createMenuPage);
})

homeBtn.addEventListener("click", () => {
    loadTab(createHomePage);
})