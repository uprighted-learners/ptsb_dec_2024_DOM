/* 
    ? DOM
        - Document Object Model
        - ONLY available through the browser

    Frame: 
        - Document: HTML Page (in the browser)
            - "document" a global variable
        - Object: Elements, and comments (nodes)
        - Model: General Arrangement

    ? BOM
        - Browser Object Model
            - "window" is a global variable
        - Various methods available
*/

function askForStuff() {
  let userInput = prompt("Hello how are you");
  console.log(userInput);
}

// askForStuff()

console.log(document);
console.log(document.URL);
console.log(document.location);
console.log(document.title);
document.title = "Learning about DOM";

let h1 = document.createElement("h1");

console.log(h1);

/* 
    Our variable now has access to various properties
        - innerHTML: Can inject a block of HTML Code
        - innerText: Returns the visible text contained in a node
        - textContent: Returning the full text
*/

h1.textContent = "Creating my first DOM Element";

/* 
    Chain of Events:
    1. Create Element
    2. Apply the value/properties
    3. Append/Place the element
*/

document.body.appendChild(h1);

// h1.style.color = "blue";
// h1.style.textAlign = "center";

// console.log(document.body.style);

let color = "red";

h1.style = `
    text-shadow: 2px 2px 2px yellow;
    color: ${color};
    text-align: center;
`;

console.log(h1);

h1.className = "h1-class-name";
h1.id = "set-id";

/* 
    ! Finding Elements

    *  HTML Collection
        - An array-like object
        - Allows access to index, properties, and methods
        - Does NOT allow to modify a group of elements at once
        - Can loop through it (if array)
        - Can use .length property to get the size of the list

    Accessing Multiple Elements Requires These 3 Methods:
        - getElementsByTagName()
        - getElementsByClassName()
        - querySelectorAll() - Provides back a nodelist

*/

let liCollection = document.getElementsByTagName("li"); // Returns a HTMLCollection
console.log(liCollection);

for (i of liCollection) {
  i.style.color = "green";
}

let bathroom = liCollection[0];
bathroom.style.color = "red";

// Convert from HTML collection to Array to do array like things, like forEach
let liArr = Array.from(liCollection);

// another way to convert:
// let liArr2 = [...liCollection]

liArr.forEach((i) => console.log(i));

/* 
    .querySelector()
        - Grab first instance of an element or null if nothing found
        - Can target by ID, Class, Element
            - Will need # for ID
            - Will need . for classes

*/

let firstLi = document.querySelector("li");
// console.log(firstLi);

let listTitle = document.querySelector("#listTitle");
// console.log(listTitle);
listTitle.style.textAlign = "center";

let toDoList = document.querySelector("#toDoList");
// console.log(toDoList);

let classListItem = document.querySelector(".listItem");
// console.log(classListItem);

/* 
    .querySelectorAll()
        - Returns a static nodeList (an array) list of elements
*/

let nodeListLi = document.querySelectorAll(".listItem");
// console.log(nodeListLi)

nodeListLi[1].style.color = "blue";
nodeListLi.forEach((i) => console.log(i));

let newListItem = document.createElement("li");
let ul = document.getElementById("ulToDo");
// console.log(ul);

newListItem.textContent = "New Item";

ul.appendChild(newListItem);

let liClass = document.getElementsByClassName("listItem");

console.log(liClass);

/* 
    ? Event Listeners

        Allow us to execute a function when an event occurs

        .addEventListener()
            - DOM node method
            - Requires an event to "listen for" or type and a callback function
        
        ex:
            node.addEventListener("click", () => {
                
            })
*/

/* 
    Adding an item to the list:
        Step: 
            - Capture the input
            - Access the parent element
            - Create a new element (li)
            - Assign value to the attributes
                - text from input
            - Append to parent
*/

let btn = document.getElementById("submit");
let input = document.getElementById("listInput");

// btn.addEventListener("click", (e) => {
//     console.log("Button was clicked");
// console.log(e); Event obj that gets carried over to the callback, useful for getting specific data from the element. ex. Input fields value
// })

function addItem(e) {
  // console.log(e);

  if (input.value.length > 0) {
    let newItem = document.createElement("li");

    newItem.textContent = input.value;

    newItem.style = `color: blue;`;

    ul.appendChild(newItem);
  } else {
    alert("Please type something")
  }
}

btn.addEventListener("click", addItem);

input.addEventListener("keyup", (e) => console.log(e.target.value))
