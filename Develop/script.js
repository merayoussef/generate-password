// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function promptPassword() {
  var options = {
    length: 8,
    lowercase: true,
    uppercase: true,
    numeric: true,
    special: true,
  }
  return options
}


function generatePassword() {
  //I choose a length of at least 8 characters and no more than 128 characters
  var options = promptPassword()
  //I choose lowercase, uppercase, numeric, and/or special characters WHEN I answer each prompt
  var lowercaseCharacters = ["a", "b", "c", "d", "e" , "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"];
  lowercaseCharacters[Math.floor(Math.random() * lowercaseCharacters.length)]
  uppercaseCharacters[Math.floor(Math.random() * uppercaseCharacters.length)]
  numericCharacters[Math.floor(Math.random() * numericCharacters.length)]
  specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
  //THEN my input should be validated and at least one character type should be selected WHEN all prompts are answered
  //var output = concat(uppercaseCharacters, specialCharacters, numericCharacters, lowercaseCharacters);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", promptPassword);
