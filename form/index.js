let form = document.querySelector("form");
if (form){
    form.addEventListener("submit", (e) => {
        //? Preventing the page from refreshing
        e.preventDefault()
        // console.log(e.target);

        const formElement = e.target
        // Accessing the string value that sits behind a specific "name" attribute on an input element
        const nameValue = formElement.name.value
        const emailValue = formElement.email.value
        const foodValue = formElement.food.value

        console.log({nameValue});
        console.log({emailValue});
        console.log({foodValue});
    })
}
