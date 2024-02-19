const spaceContainer = document.querySelector(".space-container");
const title = document.createElement("h2");
title.textContent = "The Universe";

title.style.color = "red";
const universeImg=document.createElement("img")

universeImg.src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hubble_ultra_deep_field.jpg/1200px-Hubble_ultra_deep_field.jpg"

const planetsContainer = document.createElement("div");
planetsContainer.setAttribute(
  "style",
  "border:4px solid black ;width:270px;padding:10px; background-color:gray"
);

const planetsListTitle = document.createElement("h3");
planetsListTitle.textContent = "Our Planets.";

const planetsList = document.createElement("ul");
planetsList.innerHTML = "<li>earth</li><li>mars</li>";

universeImg.style.width="300px"

spaceContainer.appendChild(title)
spaceContainer.appendChild(universeImg)
spaceContainer.appendChild(planetsContainer)
planetsContainer.appendChild(planetsListTitle)
planetsContainer.appendChild(planetsList)


