/* 
    ? API
        - Application Programming Interface
        - Client (front end) to communicate with the server (backend -> database)
        - Allows HTTP requests and response lifecycles

    ? Fetch
        - Before fetch, we would have to use an httpRequest through items like jquery or Ajax
        - Is an API
        - Is a method that requires at least 1 argument
            - The location we are trying to obtain data from (url)
        - Handles the request and response
        - Returns back a Promise
            - Allows us access to the resolvers (async/await OR .then().catch()) 
*/

/* 
?   JSON
        - JavaScript Object Notation
            - Lightweight for storing and transferring data
            - "easy to understand"
    Syntax:
        {
            "key" : "value",
            "key1": 10,
            "key2": true
        }

        - Everything is wrapped in quotes with some minor exceptions like ints and booleans
        - Data is all separated by a comma
        - CANNOT hold comments or functions

*/

function myCustomPromise () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Here is your data!!!!")
        }, 5000)
    })
}

const testEndPoint = "https://jsonplaceholder.typicode.com/posts/1"; // Basic endpoint
const catAPIEndpoint = "https://meowfacts.herokuapp.com/"

// console.log("Fetch Results:", fetch(testEndPoint))
// console.log("My Custom Promise:", myCustomPromise())


// .then()
// myCustomPromise().then(data => console.log(data)).catch(err => console.log(err))

// .then()
// fetch(testEndPoint)
// .then(data => data.json())
// .then(json => console.log(json))

// using async and await
// let dataObject = {
//     data: ["The first cat show was in 1871 at the Crystal Palace in London."]
// }

// console.log(dataObject.data[0]);


// let userObject = {
//     name: "Amit",
//     food: "Pizza",
//     someArray: ["1",2,3,"45"]
// }

// console.log(userObject.name);
// console.log(userObject.someArray);

async function fetchResults(url) {
    // Adding Try catch to handle any implications that can occur, either Errors that are thrown or from a library
    try{
        // Await-ing the fetch call, passing in our variable that houses the url
        const response = await fetch(url)
        // Response just represents a 'response' object, however we must apply .json() to it, to have workable data
        const data = await response.json() 

        // Using dot notation to access value on data obj
        // console.log(data.data[0]);
        let catSentence = data.data[0]

        displayIt(catSentence)        

    } catch (err){
        console.log(err);
    }
}

fetchResults(catAPIEndpoint)

function displayIt(data) {
    // Get container
    const body = document.querySelector("body")

    // Create Element to house data
    const p = document.createElement("p")

    // Assign data to element
    p.textContent = data

    // Append the element on the html page
    body.appendChild(p)
}
