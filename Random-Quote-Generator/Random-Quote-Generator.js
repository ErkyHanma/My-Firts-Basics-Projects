// Define a function to generate random quotes
function generate() {
  // Create an object containing quotes and their authors
  let quotes = {
    "- Albert Einstein": '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."',
    "- Jules Renard": '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
    "- Madeline Miller": '"Bury us, and mark our names above. Let us be free."'
  };

  // Get an array of author names from the quotes object
  let authors = Object.keys(quotes);

  // Select a random author from the authors array
  let author = authors[Math.floor(Math.random() * authors.length)];

  // Get the corresponding quote for the selected author
  let quote = quotes[author];

  // Display the selected author in the HTML with class 'author-js'
  document.querySelector('.author-js').innerHTML = author;

  // Display the selected quote in the HTML with class 'quote-js'
  document.querySelector('.quote-js').innerHTML = quote;
}

// Add a click event listener to the button with class 'btn-js'
document.querySelector('.btn-js').addEventListener('click', generate);
