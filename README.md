# JavaScript for Web September 2020

Example project

## Session 1

### Array methods

* [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [Array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* [Array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)


### Select elements

* [document.getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
* [document.querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)

### Optional homework

* Check out [Tailwind](https://tailwindcss.com/)

## Session 2

### Modify elements and create elements

* [Template literals/strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings)
* [document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
* [element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
* [Tailwind installation](https://tailwindcss.com/docs/installation#using-tailwind-via-cdn)
* [Array.join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)


### Optional homework

* Use Tailwind to show beautiful biographies of your friends
* Think about adding new friends to your list of friends

## Session 3

### Work with forms

* [Array.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
* [HTML Forms](https://www.w3schools.com/html/html_forms.asp)
* [input.value](https://www.w3schools.com/tags/att_input_value.asp)
* [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
* [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)


### Optional homework

* Use the localstorage to save your list of friends and keep it updated even when adding new friends
* You will need `JSON.parse` and `JSON.stringify` for this, so you may want to take a look at the docs and at the example at the very bottom

## Session 4

### Work with local storage

* [localStorage.getItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem)
* [localStorage.setItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)
* [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
* [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)



### Optional homework

* Show a Delete button for every friend entry. For this you could use `document.createElement('button')`
* If you successfully added the button, try registering an event listener. Whenever we click the button, we want to log something in the console

## Session 5

### Sort our list of friends

* [Array.splice](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
* [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
* [Select element and its change handling](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)


### Optional homework

* Go through your code and try to really understand it. Change a thing here and there and see how it influences the behaviour
* Take a first look at the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch). The next session will be about external APIs!

## Session 6

### Fetch and show cat facts

* [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* [Postman](https://www.postman.com/downloads/)
* [CatFact API](https://catfact.ninja/)


### Optional homework

* We can limit the size of requested facts. We could only fetch 25 but in total there are many more facts. That is why the API offers pagination by adding a `page` URL parameter, e.g. https://catfact.ninja/facts?page=4. Think about how you would implement a pagination and try implementing it

## Session 7

### Fetch beers

* [Beer API documentation](https://punkapi.com/documentation/v2)
* [JSON Formatter Chrome extension](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa)

### Optional homework

* Add a form to the page to filter by a given beer name using the `beer_name` request parameter
