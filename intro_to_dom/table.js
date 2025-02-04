// ? Global Variables
let buildBtn = document.getElementById("table-btn")
let shellDiv = document.getElementById("shell-div")

// Mock Data
const myList = ["red", "blue", "green", "purple", "yellow", "orange"]

buildBtn.addEventListener("click", buildTable)

function buildTable() {

    myList.forEach((color, index) => {
        // Create
        let div = document.createElement("div")
        let h2 = document.createElement("h2")
        let p = document.createElement("p")

        // Assign values

        h2.textContent = color
        h2.style.color = color

        p.innerHTML = `Item <u><b>${index} is ${color}</b></u> in my list`

        // Set to parent
        div.appendChild(h2)
        div.appendChild(p)

        shellDiv.appendChild(div)
    })
}