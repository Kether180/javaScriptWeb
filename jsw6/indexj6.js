import "./styles.css";

const factsElement = document.getElementById("facts");
const factsForm = document.getElementById("facts-form");
const numberOfFactsInput = document.getElementById("number-of-facts-input");

const showFacts = (limit) => {
  fetch(`https://catfact.ninja/facts?limit=${limit}`)
    .then((response) => response.json())
    .then((json) => {
      const entries = json.data;

      factsElement.innerHTML = "";

      entries.forEach((entry) => {
        console.log(entry);
        const element = document.createElement("li");
        element.innerHTML = entry.fact;
        console.log(element);
        factsElement.appendChild(element);
      });
    });
};

const onSubmit = (event) => {
  event.preventDefault();
  console.log("submit!");

  const numberOfFacts = numberOfFactsInput.value;
  showFacts(numberOfFacts);
};

factsForm.addEventListener("submit", onSubmit);
