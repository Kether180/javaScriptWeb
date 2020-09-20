# javaScriptWeb

JavaScript for Web September 2020
Course material and example project for the course JavaScript for Web, September 2020.

Session 1

Array methods
Array.map
Array.forEach
Array.filter
Array.find

Examples

Select elements

document.getElementById
document.querySelectorAll
Optional homework
Check out Tailwind


Session 2

Modify elements and create elements
Template literals/strings
document.createElement
element.innerHTML
Tailwind installation
Array.join

Example

Use Tailwind to show beautiful biographies of your friends
Think about adding new friends to your list of friends

Session 3

Work with forms
Array.push
HTML Forms
input.value
JSON.parse
JSON.stringify

Example

Use the localstorage to save your list of friends and keep it updated even when adding new friends
You will need JSON.parse and JSON.stringify for this, so you may want to take a look at the docs and at the example at the very bottom

Session 4

Work with local storage
localStorage.getItem
localStorage.setItem
JSON.parse
JSON.stringify
localStorage example
Refactored friends example using localStorage

Optional 
Show a Delete button for every friend entry. For this you could use document.createElement('button')
If you successfully added the button, try registering an event listener. Whenever we click the button, we want to log something in the console

Session 5

Sort our list of friends
Array.splice
Array.sort
Select element and its change handling
Example

Go through your code and try to really understand it. Change a thing here and there and see how it influences the behaviour
Take a first look at the Fetch API. The next session will be about external APIs!

Session 6

Fetch and show cat facts
Fetch API
Postman
CatFact API

Example

We can limit the size of requested facts. We could only fetch 25 but in total there are many more facts. That is why the API offers pagination by adding a page URL parameter, e.g. https://catfact.ninja/facts?page=4. Think about how you would implement a pagination and try implementing it
