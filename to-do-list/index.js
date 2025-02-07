import { toDosArray, toDoEmojis } from "./todo.js"

// Creating a copy of the toDosArray
let newArr = [...toDosArray]

// Grabbing HTML Elements
const toDosList = document.getElementById("todos")
const toDosInputField = document.getElementById("todo-add_text")
const emojiSelector = document.getElementById("emoji-selector")
const toDoForm = document.getElementById("todo-form")

let selectedEmoji = "✅";

emojiSelector.addEventListener("change", (e) => {
    selectedEmoji = e.target.value;
})


toDoEmojis.forEach((i) => {
    let option = document.createElement("option")
    option.textContent = i
    option.style.textAlign = "left"
    emojiSelector.appendChild(option)
})


toDoForm.addEventListener("submit", (e) => {

    // Prevent the page from refreshing
    e.preventDefault()

    if(toDosInputField.value.length === 0){
        alert("Please provide a todo!")
    } else if (toDosInputField.value.length > 32) {
        alert("Todo is too long!")
    } else {

        const formData = {
            name: toDoForm.todo.value,
            icon: selectedEmoji
        }
 

        newArr.unshift(formData)

        console.log({newArr});

        createTodos(newArr)

        toDoForm.reset()

        toDoForm[0].focus()
    }
})


function createTodos (arr) {
    // Clears out all children of a parent element. Clearing all <li> from the <ul>
    while(toDosList.firstChild) {
        toDosList.removeChild(toDosList.firstChild)
    }

    console.log(arr);
    console.log("Function executed!");

    arr.forEach((todo) => {
        const random = (min, max) => {
            return Math.floor(Math.random() * (max-min) + min)
        }

        let randomColor1 = random(100, 255)
        let randomColor2 = random(100, 255)
        let randomColor3 = random(100, 255)

        let randomBackGroundColor = `rgba(${randomColor1},${randomColor2},${randomColor3}, .9)`
        
        // Create HTML Elements
        let listItem = document.createElement("li")
        let emoji = document.createElement("p")
        let toDoText = document.createElement("p")
        let deleteButton = document.createElement("button")
   
        // console.log(todo["name"])
        console.log(todo.name)

        toDoText.textContent = todo.name
        emoji.textContent = todo.icon

        // console.log(emoji);
        // console.log(toDoText);

        deleteButton.textContent = "❌"

        deleteButton.addEventListener("click", () => {
   
            // Removing item from array
           
            newArr = newArr.filter((todoObj) => todoObj !== todo);
            createTodos(newArr)

        })

        // Attaching CSS classes to the new elements
        listItem.classList.add("todo")
        emoji.classList.add("emoji")
        toDoText.classList.add("todo-text")
        deleteButton.classList.add("todo-delete")

        listItem.style.background = randomBackGroundColor

        // Append Elements
        listItem.appendChild(emoji)
        listItem.appendChild(toDoText)
        listItem.appendChild(deleteButton)

        console.log(listItem);
   
        toDosList.appendChild(listItem)
    })

    if (newArr.length === 0) {
        let noToDosText = document.createElement("h1")
        noToDosText.textContent = "No to dos :)"

        toDosList.appendChild(noToDosText)
    }

}


window.addEventListener("DOMContentLoaded" ,() => {
    createTodos(newArr)
})