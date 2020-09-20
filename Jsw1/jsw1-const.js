const friend = [
    {
      name : "Joseph",
      age: 24
    },
    {
      name: 'Hennes',
      age: 18
    },
    {
      name: 'Peter',
      age: 45
    },
    {
      name: 'Carlos',
      age: 56
    },
    {
      name:'Maike',
      age: 34
    }
    
    ];
    

     // Function 
    
      const findFriend = (friend) => {    // TODO : Select your best friend
        return friend.name ==='Hennes'
      };
      const bestFriend = friend.find(findFriend);  
      console.log(bestFriend);
      const atLeastEighteen = (friend, index, array) => {
        console.log(friend);
        console.log(index);
        console.log(array);
        return friend.age >= 18;
      };
      

// TODO : Select your best friend
// Select Friends with a specific age, older than.
//Calculate the sum of all ages.


const atLeastEighteen = (friend, index, array) => {
    console.log(friend);
    console.log(index);
    console.log(array);
    return friend.age >= 18
  };

  const eighteenOrOlder = friends.filter(atLeastEighteen);
  console.log(eighteenOrOlder);
  
  const selectName = (friend) => friend.name;
  const names = friends.map(selectName);
  console.log(names);
  
  const logFriend = (friend) => {
    console.log(friend);
  };
  
  friends.forEach(logFriend);
  
  document.getElementById("app").innerHTML = `

  <h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/*
  friends.map( friend => friend.name );
  //const names = friends.map( friend => friend.name );
  const names = friends.map(friend => friend.age).map(age => age * 2);
  console.log(names);


//const eighteenOrOlder = friend.filter(atLeastEighteen);
//console.log(eighteenOrOlder);
// TODO : Select your best friend
// Select Friends with a specific age, older than.
//Calculate the sum of all ages.
/*const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]
*/ 



/*
friends.map( friend => friend.name );
const names = friends.map( friend => friend.name );
const names = friends.map( friend => friend.age );
console.log(names);  */ 


/* Array methods
Array.map
Array.forEach
Array.filter
Array.find
Examples
Select elements
document.getElementById
document.querySelectorAll */ 