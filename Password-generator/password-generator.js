function generateCharacterSet(start, end) {
  const result = [];
  for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i++) {
    result.push(String.fromCharCode(i));
  }
  return result;
}

const characters = generateCharacterSet('a', 'z');
const upperCase = generateCharacterSet('A', 'Z');
const numbers = generateCharacterSet('1', '9');
const symbols = ['!', '@', '#', '$', '%', '&', '?', '.', ',', ':', ';'];


const rangeOfNumbers = document.getElementById("rangeOfNumbers")
const amountOfNumbers = document.getElementById("amountOfNumbers")
const upperCaseInput = document.querySelector('.checkbox-uppercase')
const numbersInput = document.querySelector('.checkbox-numbers')
const symbolsInput = document.querySelector('.checkbox-symbols')


const LOW_CLASS = document.querySelector('.low')
const MID_CLASS = document.querySelector('.mid')
const HIGH_CLASS = document.querySelector('.high')
let passwordSt = document.querySelector('.div4')


rangeOfNumbers.addEventListener('input', getNumber )
amountOfNumbers.addEventListener('input', getNumber)
rangeOfNumbers.addEventListener('input', generatePassword )
amountOfNumbers.addEventListener('input', generatePassword)


const copy = document.querySelector('.fa-js')




function getNumber(e) {
let nums = e.target.value
amountOfNumbers.value = nums
rangeOfNumbers.value = nums

}



function generatePassword() {
  removeClass();
  let passCode = '';
  let charactersArray = [];

  charactersArray.push(...characters)

  if (upperCaseInput.checked) {
    charactersArray.push(...upperCase)
  }

  if (numbersInput.checked) {
    charactersArray.push(...numbers)
  }

  if (symbolsInput.checked) {
    charactersArray.push(...symbols)
  }


  for (let i = 0; i < amountOfNumbers.value; i++) {
 
    let randomNumber = Math.floor(Math.random() * charactersArray.length);

    passCode += charactersArray[randomNumber];
  

}
console.log(passCode.length)

addClass(passCode)

if (amountOfNumbers.value > 50) {
  alert('The password exceeded maximum values')
  console.log(amountOfNumbers.value)
} else {
  document.querySelector('.password-js').innerHTML = passCode;
}



}

function removeClass() {
  LOW_CLASS.classList.remove('low2')
  MID_CLASS.classList.remove('mid2')
  HIGH_CLASS.classList.remove('high2')
  

}

function addClass(passCode) {
  if (passCode.length <= 6) {
    LOW_CLASS.classList.add('low2');
    MID_CLASS.classList.remove('mid2');
    HIGH_CLASS.classList.remove('high2');
    passwordSt.classList.add('div42');
    document.querySelector('.div42').textContent = `Your password strength is: low`;
  } else if 
  ( passCode.length < 8 ||
    passCode.length >= 7 && passCode.length <= 25 && !upperCaseInput.checked && !numbersInput.checked && !symbolsInput.checked ||
    passCode.length >= 7 && passCode.length <= 25 && !upperCaseInput.checked && !numbersInput.checked  ||
    passCode.length >= 7 && passCode.length <= 25 && !upperCaseInput.checked && !symbolsInput.checked  ||
    passCode.length >= 7 && passCode.length <= 25 && !numbersInput.checked && !symbolsInput.checked) {
    LOW_CLASS.classList.add('low2');
    MID_CLASS.classList.add('mid2');
    HIGH_CLASS.classList.remove('high2');
    passwordSt.classList.add('div42');
    document.querySelector('.div42').textContent = `Your password strength is: mid`;
  } else if 
  ( passCode.length > 25 ||
    passCode.length >= 8 && upperCaseInput.checked && numbersInput.checked ||
    passCode.length >= 8 && upperCaseInput.checked && symbolsInput.checked ||
    passCode.length >= 8 && numbersInput.checked && symbolsInput.checked || 
    passCode.length >= 8 && numbersInput.checked && symbolsInput.checked && upperCaseInput.checked) {
    LOW_CLASS.classList.add('low2');
    MID_CLASS.classList.add('mid2');
    HIGH_CLASS.classList.add('high2');
    passwordSt.classList.add('div42');
    document.querySelector('.div42').textContent = `Your password strength is: high`;
  }
}


document.querySelector('.btn-js').addEventListener('click', generatePassword);


window.addEventListener('load',() => {
  generatePassword()
});



function copyToClipboard() {
  const passwordElement = document.querySelector('.password-js');
  const passwordText = passwordElement.textContent;


  navigator.clipboard.writeText(passwordText)
    .then(() => {
      alert("Copied the text: " + passwordText);
    })
    .catch(err => {
      console.error("Error copying text: ", err);
    });
}


copy.addEventListener('click', copyToClipboard);





