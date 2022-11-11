// First we fetch our elements from the HTML and store them in variables - just to make it more readable in th erest of the code.
const inputName = document.querySelector("#name")
const inputEmail = document.querySelector("#email")
const inputMessage = document.querySelector("#message")
const errorMsg = document.querySelector("#errorMsg")
const buttonSubmit = document.querySelector("#submit")



// Here we call our button and we stick an event listener to it. 
//This is a build in method that literally listen to a defined event.
// The first argument is the event we want to listen to - in this case click.
// The next argument is the function we want to execute when the button is clicked. 
// So we declare a nameless function with the event as an argument.
buttonSubmit.addEventListener("click", function(event){
    // We attach a prevent default method to the event. 
  // This makes sure that the button won't send you to a new page once the function is executed.
    event.preventDefault()

    // Now for our validation - first we want to check if our name input value is empty
    if (inputName.value == "") {
        // if true we set the p tag with errorMsg id to contain a relevant error message
        errorMsg.innerHTML = "Name is missing"
    }
    // if false and it's NOT empty we check the next element...
    else if (inputEmail.value == "") {
        errorMsg.innerHTML = "Email is missing"
    }
    else if (inputMessage.value == "") {
        errorMsg.innerHTML = "Message is Missing"
    }

    else {
        // if no element is empty we set the error mesage to be a confirmation that all is good and we can continue
        errorMsg.innerHTML = "All is good"


        // Often this stage will consist of a code that sends the input data to wither a server, API or as an email - but this is not required here 
    }
})