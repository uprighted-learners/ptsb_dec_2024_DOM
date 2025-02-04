let incButton = document.getElementById("increase-button")
let decButton = document.getElementById("decrease-button")
let countText = document.getElementById("count")

let num = 0;

countText.textContent = num;

incButton.addEventListener("click", () => {
    num++;
    countText.textContent = num;
})

decButton.addEventListener("click", () => {
    num--;
    countText.textContent = num;
})