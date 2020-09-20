import "./styles.css";

const newFriendsForm = document.getElementById("new-friend-form");
const biographiesSection = document.getElementById("biographies");

localStorage.setItem("myBestFriend", "Hennes");
const myBestFriend = localStorage.getItem("myBestFriend");

console.log(myBestFriend);

const nameInput = document.getElementById("name-input");
const ageInput = document.getElementById("age-input");
const hobbyInput = document.getElementById("hobby-input");
const footballTeamInput = document.getElementById("football-team-input");

const onFormSubmit = (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const age = ageInput.value;
  const hobby = hobbyInput.value;
  const footballTeam = footballTeamInput.value;

  const friend = {
    name,
    age,
    hobbies: [hobby],
    footballTeam
  };

  nameInput.value = "";
  ageInput.value = "";
  hobbyInput.value = "";
  footballTeamInput.value = "";

  addFriend(friend);
};

newFriendsForm.addEventListener("submit", onFormSubmit);

const friends = [
  {
    name: "Hennes",
    age: 24,
    hobbies: ["watching Netflix", "going for a walk", "walking the dog"],
    footballTeam: "HSV"
  },
  {
    name: "Florian",
    age: 28,
    hobbies: ["playing football"],
    footballTeam: "HSV"
  },
  {
    name: "Alena",
    age: 29,
    hobbies: ["going to concerts"],
    footballTeam: "HSV"
  }
];

const createBiography = (friend) => {
  let text = `
  <p class="red hgfhgfh ">My name is ${friend.name.toUpperCase()}</p>
  <p>My age is ${friend.age}</p>
  <p>My favorite hobby is ${friend.hobbies.join(", ")}</p>
  <p>Favorite football team: ${friend.footballTeam}</p>
  `;

  return text;
};

const createBiographies = () => {
  biographiesSection.innerHTML = "";

  friends.forEach((friend) => {
    const element = document.createElement("div");
    const biography = createBiography(friend);
    element.innerHTML = biography;
    biographiesSection.appendChild(element);
  });
};

const addFriend = (friend) => {
  friends.push(friend);
  createBiographies();
};

const anotherFriend = {
  name: "Tobi",
  age: 32,
  hobbies: [],
  footballTeam: "Bayern Munich"
};

addFriend(anotherFriend);

const newFriend = {
  name: "Sebastian",
  age: 24,
  hobbies: ["coding", "playing football"],
  footballTeam: "HSV"
};

addFriend(newFriend);
console.log(friends);

createBiographies();

addFriend({
  name: "Christoph",
  age: 21,
  hobbies: [],
  footballTeam: "St. Pauli"
});

console.log(document.getElementById("new-friend-form"));

// object => string, JSON.stringify(object | arrays)
// string => object | arrays => JSON.parse(string)

localStorage.setItem("friends", JSON.stringify(friends));
const friendsFromLocalStorage = JSON.parse(localStorage.getItem("friends"));
console.log(friendsFromLocalStorage);
console.log(friendsFromLocalStorage[0].name);
