import modernRestaurant from "./image/Modern_restaurant.jpeg";
import chefGrilling from "./image/Chef_grilling_seafood.jpeg";

export default function createAboutPage() {
    const container = document.createElement("div");
    container.classList.add("about-container");

    const div1 = document.createElement("div");
    div1.classList.add("about-section");
    const card1 = document.createElement("img");
    card1.classList.add("about-image");
    card1.src = modernRestaurant;
    const textContainer1 = document.createElement("div");
    textContainer1.classList.add("about-text");
    const headline1 = document.createElement("h3");
    headline1.textContent = "Commitment to Raw Materials"
    const copy1 = document.createElement("p");
    copy1.textContent = "Every exceptional dish begins with an uncompromising selection of ingredients. We ensure that every vegetable, piece of meat and spice that enters the preparation area has met our strict quality standard.";

    const div2 = document.createElement("div");
    div2.classList.add("about-section");
    const card2 = document.createElement("img");
    card2.classList.add("about-image");
    card2.src = chefGrilling;
    const textContainer2 = document.createElement("div");
    textContainer2.classList.add("about-text");
    const headline2 = document.createElement("h3");
    headline2.textContent = "Kitchen & Operational Philosophy"
    const copy2 = document.createElement("p");
    copy2.textContent = "Behind the doors of our kitchen lies a harmonious workflow. We believe that efficient kitchen operations and meticulous attention to detail in food preparation are key to ensuring consistent flavour in every dish we serve";

    textContainer1.appendChild(headline1);
    textContainer1.appendChild(copy1);

    textContainer2.appendChild(headline2);
    textContainer2.appendChild(copy2);

    div1.appendChild(card1);
    div1.appendChild(textContainer1);
    div2.appendChild(textContainer2);
    div2.appendChild(card2);

    container.appendChild(div1);
    container.appendChild(div2);

    return container;
}