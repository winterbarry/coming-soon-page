const arrowButton = document.querySelector(".arrow-button");

function clicked() {
    const inputValue = document.querySelector(".input").value;

    const emailCheck = /^\S+@\S+\.\S+$/;

    if (emailCheck.test(inputValue)) {
        alert("Congrats! You're all signed in.")
    } else {
        alert("Sorry, that's an invalid email.")
    }
}

arrowButton.addEventListener("click", clicked)