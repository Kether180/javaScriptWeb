import "./styles.css";

let sortDirection = "ASC";

function sortAscending(firstElement, secondElement) {
  return firstElement.name.localeCompare(secondElement.name);
}

const sortFriends = (friends) => {
  if (sortDirection === "DESC") {
    return friends.sort((a, b) => b.name.localeCompare(a.name));
  }

  if (sortDirection === "ASC") {
    return friends.sort(sortAscending);
  }
};

const getFriends = () => {
  const friends = localStorage.getItem("friends");
  console.log(friends);

  if (!friends) {
    return [];
  }

  const parsedFriends = JSON.parse(friends);
  const sortedFriends = sortFriends(parsedFriends);

  return sortedFriends;
};

const savefriends = (friend) => {
  const friends = getFriends();
  friends.push(friend);

  const stringifiedFriends = JSON.stringify(friends); // one way of storinging values in local storage
  console.log(stringifiedFriends);

  localStorage.setItem("friends", stringifiedFriends); //
  console.log(localStorage.getItem("friends"));
};

const removeFriend = (index) => {
  // remove friend
  const friends = getFriends();
  friends.splice(index, 1);

  const stringifiedFriends = JSON.stringify(friends);
  localStorage.setItem("friends", stringifiedFriends);
  console.log(localStorage.getItem("friends"));
};

// Sections
const newFriendsForm = document.getElementById("new-friend-form");
const biographiesSection = document.getElementById("biographies");

//Inputs
const nameInput = document.getElementById("name-input");
const ageInput = document.getElementById("age-input");
const hobbyInput = document.getElementById("hobby-input");
const footballTeamInput = document.getElementById("football-team-input");
const imageUrlInput = document.getElementById("imageUrl-input");
const orderSelect = document.getElementById("order-select");

if (sortDirection === "ASC") {
  document.getElementById("asc-option").selected = true;
} else if (sortDirection === "DESC") {
  document.getElementById("desc-option").selected = true;
}

console.log(orderSelect);

const onOrderSelectChange = (event) => {
  //console.log(event.targe.value);
  //console.log("selection changed");
  sortDirection = event.target.value;
  console.log(sortDirection);
  createBiographies();
};

orderSelect.addEventListener("change", onOrderSelectChange);

const resetForm = () => {
  newFriendsForm.reset();
};

// Called whenever the friends form is submitted
const onFormSubmit = (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const age = ageInput.value;
  const hobby = hobbyInput.value;
  const footballTeam = footballTeamInput.value;
  const imageUrl = imageUrlInput.value;

  const friend = {
    name,
    age,
    hobbies: [hobby],
    footballTeam,
    imageUrl
  };

  addFriend(friend);
  resetForm();
};

newFriendsForm.addEventListener("submit", onFormSubmit);

// Create single biography for a friend.

const createSingleBiography = (friend) => {
  let myText = `
  
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
	  	<img class="w-full" src="${friend.imageUrl}"> 
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

  const friends = getFriends();

  friends.forEach((friend, index) => {
    const biographyElement = document.createElement("div"); // jede freund <div>
    const biography = createSingleBiography(friend);
    biographyElement.innerHTML = biography;

    // Add a Remove button for each friend

    const button = document.createElement("button"); // create button
    button.innerHTML = "Remove";
    biographyElement.appendChild(button); // add an event
    button.addEventListener("click", () => {
      console.log(index);
      removeFriend(index);
      createBiographies();
    });

    biographiesSection.appendChild(biographyElement);
  });
};

const addFriend = (friend) => {
  savefriends(friend);
  createBiographies();
};
createBiographies();



/*<input type="file" accept="image/*" onchange="loadFile(event)">
<img id="output"/>
<script>
  var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };
</script> */