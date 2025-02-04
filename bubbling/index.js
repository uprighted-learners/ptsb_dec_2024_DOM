let button = document.getElementById("button")
let container = document.getElementById("container")

function first(e) {
    e.stopPropagation(); // Helps to prevent 'bubbling', apply it child event listeners, if the parent contains one as well
    alert(1)
}

function second() {
    alert(2)
}


button.addEventListener("click", first)
container.addEventListener("click", second)

