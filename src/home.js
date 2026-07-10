import sectionImage from "./image/hero_section.jpeg";
import menuImage1 from "./image/Grilled_fish.jpeg";
import menuImage2 from "./image/Fried_shrimp.jpeg";
import menuImage3 from "./image/Boiled_clams.jpeg";


export default function createHome() {
    const container = document.querySelector("#content");

    const heroSection = document.createElement("div");
    heroSection.classList.add("home");
    const headline = document.createElement("h1");
    headline.textContent = "Delicious Food Awaits You";
    const btn = document.createElement("button");
    btn.textContent = "Explore Menu";
    
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("home-card");
    
    const card1 = document.createElement("div");
    const image1 = document.createElement("img");
    image1.src = menuImage1;
    
    const card2 = document.createElement("div");
    const image2 = document.createElement("img");
    image2.src = menuImage2;
    
    const card3 = document.createElement("div");    
    const image3 = document.createElement("img");
    image3.src = menuImage3;
    
    const copy = document.createElement("h3"); 
    copy.textContent = "Our Costumers' Favourites";


    heroSection.appendChild(headline);
    heroSection.appendChild(btn);

    card1.appendChild(image1);
    card2.appendChild(image2);
    card3.appendChild(image3);
    
    cardContainer.appendChild(card1);
    cardContainer.appendChild(card2);
    cardContainer.appendChild(card3);
    cardContainer.appendChild(copy);

    container.appendChild(heroSection);
    container.appendChild(cardContainer);

    return container;
}