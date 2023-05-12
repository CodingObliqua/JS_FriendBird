// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var passwordLength;
  while (true) {
    passwordLength = parseInt(prompt("How long do you want your password to be? (8-128)"));
    if (passwordLength >= 8 && passwordLength <= 128) {
      break;
    }
  }
  var includeLowercase = confirm("Do you want to include lowercase letters?");
  var includeUppercase = confirm("Do you want to include uppercase letters?");
  var includeNumbers = confirm("Do you want to include numbers?");
  var includeSpecial = confirm("Do you want to include special characters?");
  
  var allowedChars = "";
  if (includeLowercase) {
    allowedChars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
    allowedChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumbers) {
    allowedChars += "0123456789";
  }
  if (includeSpecial) {
    allowedChars += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
