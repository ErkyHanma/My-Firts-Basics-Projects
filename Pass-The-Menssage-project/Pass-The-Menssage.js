// Get the reference to the input element
const inputVal = document.getElementById("menssage-input")

// Function to add a message to the output
function addMenssage() {
   // Get the message output element and update its content
 document.getElementById("menssage-output").innerHTML = 
inputVal.value

 // Clear the input after adding the message
inputVal.value = '';
}

// Add a click event listener to the submit button
document.querySelector('.submit-button-js').addEventListener('click', addMenssage);

// Add a keydown event listener to the input element
document.getElementById("menssage-input").addEventListener("keydown", (Event) => {
  if(Event.key == 'Enter') {
    addMenssage()
  }
})





