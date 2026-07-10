import "./style.css";
import createHomePage from "./home.js";

const content = document.querySelector("#content");

function clearContent() {
    content.innerHTML = "";
}

function loadTab(tabFunction) {
    clearContent();
    content.appendChild(tabFunction());
}

loadTab(createHomePage);