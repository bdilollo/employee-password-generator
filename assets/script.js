// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {

}

// Add event listener to generate button
// this calls the writePassword function defined above
generateBtn.addEventListener("click", writePassword);

// series of prompts for password criteria

var containLowercase;
var containUppercase;
var containNumbers;
var containSpecial;

function criteritaPrompts() {
  alert("Select at least one criteria for your password.");
  containLowercase = confirm("Lowercase letters?");
  containUppercase = confirm("Uppercase letters?");
  containNumbers = confirm("Numbers?");
  containSpecial = confirm("Special characters?");
  checkValidInput();
}
// generateBtn.addEventListener("click", criteritaPrompts);
// validate input and at least one character type selected

function checkValidInput() {
  if((containLowercase == false) && (containUppercase == false) && (containNumbers == false) && (containSpecial == false)) {
    alert("Invalid input. Please select at least one criteria to include in your password.");
    criteritaPrompts();
  } else {
    lengthPrompt();
  }
}

// prompt to choose length of password (between 8 and 128 characters)
  var passwordLength;

function lengthPrompt() {
  passwordLength = prompt("How long would you like your password to be?");
  checkValidLength();
}

// validate input--appropriate length
function checkValidLength() {
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Invalid length. Please enter a number between 8 and 128.");
    lengthPrompt();
  }
}
// criteritaPrompts();

 // create arrays to draw from for uppercase, lowercase, numbers, and special characters
var lowercaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseArray = lowercaseArray.map(element => {
  return element.toUpperCase();
});
var numberArray = [0,1,2,3,4,5,6,7,8,9];
var specialArray = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"] 

  // only using criteria where value=true
  // concat arrays where value=true into one larger array
var passwordArray = [];

function concatArrays() {
  if(containLowercase == true) {
    passwordArray = lowercaseArray.concat(passwordArray);
  }
  if(containUppercase == true) {
    passwordArray = uppercaseArray.concat(passwordArray);
  }
  if(containSpecial == true) {
    passwordArray = specialArray.concat(passwordArray);
  }
  if(containNumbers == true) {
    passwordArray = numberArray.concat(passwordArray);
  }
}

var newPassword = [];
function generatePassword() {
  for(var i=0; i<passwordLength; i++) {
    function generateRandomCharacter();
  }
}

function generateRandomCharacter() {
  var index = Math.floor(Math.random() * passwordArray.length);
  var character = passwordArray[index];
  newPassword = newPassword.push(character);
}
// Math.floor(Math.random() * length of larger array) to generate random number, use number as index to select a position from array
// add selected character to new password array
// repeat until length of password array matches passwordLength variable


// when all prompts answered, generate a password that matches criteria

// password displayed as either alert or written in document