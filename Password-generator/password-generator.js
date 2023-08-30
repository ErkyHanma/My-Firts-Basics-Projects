let letters = ["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","m","n","l","o","p","q","r","s","t","u","v","w","x","y","z","!","@","#","$","%","&","?"]

function generatePassword() {
  let passCode = '';
  for(let i = 0; i <= 7; i++) {
    let randomNumber = Math.floor(Math.random() * letters.length);

    passCode += letters[randomNumber];
 }

  document.querySelector('.password-js').innerHTML = passCode;
}



document.querySelector('.btn-js').
 addEventListener('click', generatePassword)