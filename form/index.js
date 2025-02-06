let form = document.querySelector("form");
if (form){
    form.addEventListener("submit", (e) => {
        //? Preventing the page from refreshing
        // e.preventDefault()
        // console.log(e.target);

        const formElement = e.target
        // Accessing the string value that sits behind a specific "name" attribute on an input element
        const nameValue = formElement.name.value
        const emailValue = formElement.email.value
        const foodValue = formElement.food.value

        console.log({nameValue});
        console.log({emailValue});
        console.log({foodValue});
        //! Will not allow query param values to carry over
        // formElement.reset()
    })
}

// Creating our own query string here.
let paramString = "?name=foo&email=test@hotmail.com"
// Another approach would be to obtain the query string, using document.location.search
console.log(document.location.search); // Use this to slice out the query string found in the address bar
let searchParams = new URLSearchParams(paramString) 

// console.log(searchParams);

// Looking at all the keys in query params once we use the URLSearchParams Interface
searchParams.keys().forEach((i) => {
    // console.log(i);
})

// Looking at all the values ...
searchParams.values().forEach(i => {
    // console.log(i);
})

// Check if query string has a particular key name
// console.log(searchParams.has("name")); //? true, key exists

// Check if a value sits behind a key
// console.log(searchParams.get("email"));

searchParams.entries().forEach((i) => {
    // console.log(i);
})



let ul = document.querySelector("ul")

if (ul){
    console.log(ul);
    let currentPageParams = new URLSearchParams(document.location.search)

    currentPageParams.values().forEach((val) => {
        let listItem = document.createElement("li")
        listItem.textContent = val
        ul.appendChild(listItem)
    })
}

let myObjValues = {
    name: "Bugs Bunny",
    email: "bunny@bugs.com",
    food: "carrots"
}

let myParams = new URLSearchParams(myObjValues)

console.log(myParams.get("email")); // bunny@bugs.com


let qButton = document.querySelector(".qParams")
if(qButton){
    qButton.addEventListener("click", () => {
        myParams.set("name", "Timmy")
        document.location.search = myParams
    })
}

let myLink = document.querySelector("a")
console.log(myLink);
if(myLink) {
    myLink.href = "./index2.html" + document.location.search
}