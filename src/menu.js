import boiledClams from "./image/Boiled_clams_with_garlic.jpeg";
import goldenPrawns from "./image/Golden_prawns.jpeg";
import grilledIndonesian from "./image/Grilled_Indonesian.jpeg";


export default function createMenuPage() {
    const container = document.createElement("div");
    container.classList.add("menu-container");

    const h1 = document.createElement("h1");
    h1.textContent = "Exploring Flavours";
    
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("menu-grid");
    
    const card1 = document.createElement("div");
    card1.classList.add("menu-card");
    const image1 = document.createElement
    ("img");
    image1.src = boiledClams;
    const containerText1 = document.createElement("div");
    containerText1.classList.add("text-container"); 
    const title1 = document.createElement("h3");
    title1.textContent = "Fresh Boiled Clams";
    const price1 = document.createElement("p");
    price1.textContent = "Rp 38.000";
    const cta1 = document.createElement("button");
    cta1.classList.add("order-btn");
    cta1.textContent = "Order Now";

    const card2 = document.createElement("div");
    card2.classList.add("menu-card");
    const image2 = document.createElement("img");
    image2.src = goldenPrawns;
    const containerText2 = document.createElement("div");
    containerText2.classList.add("text-container"); 
    const title2 = document.createElement("h3");
    title2.textContent = "Golden Buttery Fried Prawns";
    const price2 = document.createElement("p");
    price2.textContent = "Rp 38.000";
    const cta2 = document.createElement("button");
    cta2.classList.add("order-btn");
    cta2.textContent = "Order Now";

    const card3 = document.createElement("div");
    card3.classList.add("menu-card");
    const image3 = document.createElement("img");
    image3.src = grilledIndonesian;
    const containerText3 = document.createElement("div");
    containerText3.classList.add("text-container"); 
    const title3 = document.createElement("h3");
    title3.textContent = "Whole Grilled Indonesian Snapper"
    const price3 = document.createElement("p");
    price3.textContent ="Rp 45.000"
    const cta3 = document.createElement("button");
    cta3.classList.add("order-btn");
    cta3.textContent = "Order Now";

    containerText1.appendChild(title1);
    containerText1.appendChild(price1);
    containerText1.appendChild(cta1);
    
    containerText2.appendChild(title2);
    containerText2.appendChild(price2);
    containerText2.appendChild(cta2);
    
    containerText3.appendChild(title3);
    containerText3.appendChild(price3);
    containerText3.appendChild(cta3);


    

    card1.appendChild(image1);
    card1.appendChild(containerText1);

    card2.appendChild(image2);
    card2.appendChild(containerText2);

    card3.appendChild(image3);
    card3.appendChild(containerText3);

    cardContainer.appendChild(card1);
    cardContainer.appendChild(card2);
    cardContainer.appendChild(card3);

    container.appendChild(h1);
    container.appendChild(cardContainer);

    return container;
}