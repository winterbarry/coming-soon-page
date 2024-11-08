const email = document.querySelector("#email");
const submitButton = document.querySelector(".button");
const errorMessage = document.querySelector("#error-message");

submitButton.addEventListener("click", submitForm);

function validateEmail(emailValue) {
  return emailValue.trim() === "" || !/\S+@\S+\.\S+/.test(emailValue); // if empty OR does not match email pattern
}

function submitForm(e) {
  e.preventDefault(); // prevent default submit behaviour

  const emailValue = email.value; 
  const isInvalid = validateEmail(emailValue); 

  if (isInvalid) {
    email.classList.add("invalid"); 
    errorMessage.style.display = "block"; 
  } else {
    alert("Form submitted successfully.");
    email.classList.remove("invalid");
    errorMessage.style.display = "none"; 
  }
}