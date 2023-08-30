// Initialize a counter for keeping track of color changes
let i = 0;

// Define a function to change background colors
function changeColors() {
  // Array of colors to cycle through
  let colors = ["blue", "red", "cyan", "green", "brown", "yellow", "purple", 'orange'];

  // Change the background color of the body to the current color in the array
  document.body.style.background = colors[i++];

  // Reset the counter if it goes beyond the array length
  if (i >= colors.length) {
    i = 0;
  }
}

// Add a click event listener to the button with class 'button-js'
document.querySelector(".button-js").addEventListener('click', changeColors);
