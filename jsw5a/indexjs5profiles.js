import "./styles.css";

const getFriends = () => {
  const friends = localStorage.getItem("friends");
  console.log(friends);

  if (!friends) {
    return [];
  }

  console.log(friends);
  console.log(JSON.parse(friends));

  return JSON.parse(friends); // sevond way of seting an array as a web Api value to save .
};

const savefriends = (friend) => {
  const friends = getFriends();
  friends.push(friend);

  const stringifiedFriends = JSON.stringify(friends); // one way of storinging values in local storage
  console.log(stringifiedFriends);

  localStorage.setItem("friends", stringifiedFriends); //
  console.log(localStorage.getItem("friends"));
};

//Sections

const newFriendsForm = document.getElementById("new-friend-form");
const biographiesSection = document.getElementById("biographies");

//Inputs
const nameInput = document.getElementById("name-input");
const ageInput = document.getElementById("age-input");
const hobbyInput = document.getElementById("hobby-input");
const footballTeamInput = document.getElementById("football-team-input");

const resetForm = () => {
  // info need it
  nameInput.value = "";
  ageInput.value = "";
  hobbyInput.value = "";
  footballTeamInput.value = "";
};

// Called whenever the friends form is submitted
const onFormSubmit = (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const age = ageInput.value;
  const hobby = hobbyInput.value;
  const footballTeam = footballTeamInput.value;

  console.log("Name", name);

  const friend = {
    name,
    age,
    hobbies: [hobby],
    footballTeam,
    imageURL: "https://www.dzhw.eu/images/orga/becker.png"
  };

  addFriend(friend);
  resetForm();
};

newFriendsForm.addEventListener("submit", onFormSubmit);

// Create single biography for a friend.

const createBiography = (friend) => {
  let myText = `
  
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
			<img class="w-full" src="${friend.imageURL}">
			<div class="px-2 py-2">
				<div class="font-bold text-xl mb-2">${friend.name.toUpperCase()}</div>
				<p class="text-gray-500 text-base"> Age: ${friend.age}</div>
				</p>
			</div>
			<div class="px-6 pt-4 pb-2"> Hobby : ${friend.hobbies.join(", ")}</div>
				<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
				<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
				<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> </span>
      </div> <p> Favorite football team : ${friend.footballTeam}</p>
    </div> 
    </div>
  `;

  return myText;
};

// Updates all biographies in our HTML

const createBiographies = () => {
  biographiesSection.innerHTML = "";

  getFriends().forEach((friend) => {
    const element = document.createElement("div"); // jede freund <div>
    const biography = createBiography(friend);
    element.innerHTML = biography;
    biographiesSection.appendChild(element);
  });
};

const addFriend = (friend) => {
  savefriends(friend);
  createBiographies();
};

createBiographies();
