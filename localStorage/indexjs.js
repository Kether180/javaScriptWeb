import "./styles.css";


// Web Storage API

const nameDiv = document.getElementById("name");
const form = document.getElementById("set-name-form");
const nameInput = document.getElementById("name-input");

const showName = (event) => {
  const nameFromLocalStorage = localStorage.getItem("friend-name"); // update the local storage
  nameDiv.innerHTML = nameFromLocalStorage;
};

const onFormSubmit = (event) => {
  event.preventDefault();
  const name = nameInput.value;
  console.log(name);
  console.log("form submit!");

  localStorage.setItem("friend-name", name); //Set the Item

  showName();
};

form.addEventListener("submit", onFormSubmit);
showName();


// https://stackoverflow.com/questions/17087636/how-to-save-data-from-a-form-with-html5-local-storage