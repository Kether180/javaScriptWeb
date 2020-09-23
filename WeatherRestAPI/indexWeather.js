import "./styles.css";

const apiKey = "18ebb74c4c845cd84cc98885effee0ae";

const debuggingElement = document.getElementById("debugging");
const formElement = document.getElementById("city-form");
const inputElement = document.getElementById("city-input");

const fetchData = (city) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
  ).then((response) => response.json());
};

const createCityInformation = (city) => {
  const paragraph = document.createElement("p");
  paragraph.innerHTML = `
      The weather is ${city.main.temp} Celsius
    `;
  const image = document.createElement("img");
  image.src = `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`;
  document.body.appendChild(paragraph);
  document.body.appendChild(image);
};

const showCityInformation = (city) => {
  fetchData(city).then((data) => {
    console.log(data);
    debuggingElement.innerHTML = JSON.stringify(data, null, 2);
    createCityInformation(data);
  });
};

const onSubmit = (event) => {
  event.preventDefault();
  const enteredCity = inputElement.value;
  showCityInformation(enteredCity);
  formElement.reset();
};

formElement.addEventListener("submit", onSubmit);

showCityInformation("Hamburg");
