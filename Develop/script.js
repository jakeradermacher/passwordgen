// Assignment code here
var password=document.getElementById("password");

//DOM Elements
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const lowercaseEl = document.getElementById('lowercase')
const uppercaseEl = document.getElementById('uppercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSymbol, 
    length);
});

// Generate Password Function
function generatePassword(lower, upper, number, symbol, length) {
  let generatePassword = '';

  const typesCount = lower + upper + number + symbol;
  const typesArray = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
  if(typesCount === 0) {
    return '';
  }
  for(let i = 0; i < length; i += typesCount) {
    typesArray.forEach(type => {
      const randomFunction = Object.keys(type)[0]

      generatePassword +=[randomFunction]();
    });
  }

  const finalPassword = generatePassword.slice(0, length);

  return finalPassword;
}

const randomFunction = {
  lowercase: randomLowercase,
  uppercase: randomUppercase,
  numbers: randomNumber,
  symbols: randomSymbol
}

// Generator Functions
function randomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.?~+-_';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
/*
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword); {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSymbol, 
    length);
  } */
