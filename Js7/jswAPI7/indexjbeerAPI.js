import "./styles.css";

const beersElement = document.getElementById("beers");
const refreshButton = document.getElementById("refresh-button");

const createBeerHtml = (beer) => {
  let imageUrl;

  if (beer.image_url) {
    imageUrl = beer.image_url;
  }

  const html = `

    <h1> ${beer.name}</h1>
    <p>${beer.description}</p>
    <p>${beer.first_brewed}</p>
    <p>Description: ${beer.description}</p>
    ${imageUrl ? `<img src="${imageUrl}">` : "we do not have an image"}
        `;

  return html;
};

const showRandomBeer = () => {
  fetch("https://api.punkapi.com/v2/beers")
    .then((response) => response.json())
    .then((json) => {
      const beers = json;

      beersElement.innerHTML = "";
      beers.forEach((beer) => {
        const output = createBeerHtml(beer);
        const element = document.createElement("div");

        element.innerHTML = output;
        beersElement.appendChild(element);
      });
    });
};

refreshButton.addEventListener("click", showRandomBeer);
showRandomBeer();

// add input where we could enter a name, and call API to search a beer

// search button
