// Define an array of characters for generating passwords
let letters = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m",
  "n", "l", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "!", "@", "#", "$", "%", "&", "?"
];

// Define a function to generate a random password
function generatePassword() {
  // Initialize an empty string to hold the password
  let passCode = '';

  // Generate a password of length 8
  for (let i = 0; i <= 7; i++) {
    // Generate a random index within the range of letters array
    let randomNumber = Math.floor(Math.random() * letters.length);

    // Add the selected character to the password
    passCode += letters[randomNumber];
  }

  // Display the generated password in the HTML with class 'password-js'
  document.querySelector('.password-js').innerHTML = passCode;
}

// Add a click event listener to the button with class 'btn-js'
document.querySelector('.btn-js').addEventListener('click', generatePassword);
