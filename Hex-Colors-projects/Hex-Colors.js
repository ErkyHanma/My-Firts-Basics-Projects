// Define a function to change the background color using random hex codes
function changeColor() {
  // Array of characters for creating hex numbers
  let hex_number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

  // Initialize an empty string to hold the hex code
  let hexcode = '';

  // Generate a 6-digit random hex code
  for (let i = 0; i < 6; i++) {
    // Generate a random index within the range of hex_number array
    let random_index = Math.floor(Math.random() * hex_number.length);

    // Add the selected character to the hex code
    hexcode += hex_number[random_index];
  }

  // Display the generated hex code in the HTML
  document.getElementById('hex-code').textContent = hexcode;

  // Set the body background color to the generated hex code
  document.body.style.background = '#' + hexcode;
}

// Add a click event listener to the button with class 'button-js'
document.querySelector('.button-js').addEventListener('click', changeColor);
