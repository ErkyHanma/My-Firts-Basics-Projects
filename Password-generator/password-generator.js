let characters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m",
  "n", "l", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];

let upperCase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M",
"N", "L", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
let symbols = ["!", "@", "#", "$", "%", "&", "?", ".", ",", ":", ";"]


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

document.querySelector('.password-js').innerHTML = passCode;

}

function removeClass() {
  LOW_CLASS.classList.remove('low2')
  MID_CLASS.classList.remove('mid2')
  HIGH_CLASS.classList.remove('high2')
}

function addClass(passCode) {
  if(passCode.length <= 7 || passCode.length > 7 ) {
    LOW_CLASS.classList.add('low2')
  }
  
  if(passCode.length >= 9) {
    MID_CLASS.classList.add('mid2')
  }
  
  if(passCode.length >= 14) {
    HIGH_CLASS.classList.add('high2')
  }
  
  if(1 < 2) {
    passwordSt.classList.add('div42')
  }
}






document.querySelector('.btn-js').addEventListener('click', generatePassword);





