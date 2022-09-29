// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var containLowercase;
var containUppercase;
var containNumbers;
var containSpecial;
var passwordLength;

function criteritaPrompts() {
  alert("Select at least one criteria for your password.");
  containLowercase = confirm("Lowercase letters?");
  containUppercase = confirm("Uppercase letters?");
  containNumbers = confirm("Numbers?");
  containSpecial = confirm("Special characters?");
  passwordLength = prompt("How long would you like your password to be?");
  checkValidInput();
}

function checkValidInput() {
  if((containLowercase == false) && (containUppercase == false) && (containNumbers == false) && (containSpecial == false)) {
    alert("Invalid input. Please select at least one criteria to include in your password.");
    criteritaPrompts();
  }
}
criteritaPrompts();
checkValidInput()

function generatePassword() {
  
}

// Add event listener to generate button
// this calls the writePassword function defined above
generateBtn.addEventListener("click", writePassword);

// series of prompts for password criteria

// prompt to select criteria for password

// prompt to choose length of password (between 8 and 128 characters)

// validate input and at least one character type selected

// when all prompts answered, generate a password that matches criteria

// password displayed as either alert or written in document