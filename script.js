// Assignment Code
// Selects the element with the ID "generate"
var generateBtn = document.querySelector("#generate"); 

 // Declares a variable to store the desired password length
function generatePassword () {
  var passwordLength;
  while (true) {
    // Prompts the user to enter a password length and converts it to an integer
    passwordLength = parseInt(prompt("How long do you want your password to be? (8-128)")); 
     // Checks if the entered password length is between 8 and 128 (inclusive)
    if (passwordLength >= 8 && passwordLength <= 128) 
     {
       // Breaks out of the loop if the password length is valid
      break;
    }
  }
   // Asks the user if they want to include lowercase letters and stores the result in a variable
  var includeLowercase = confirm("Do you want to include lowercase letters?");
   // Asks the user if they want to include uppercase letters and stores the result in a variable
  var includeUppercase = confirm("Do you want to include uppercase letters?");
   // Asks the user if they want to include numbers and stores the result in a variable
  var includeNumbers = confirm("Do you want to include numbers?");
   // Asks the user if they want to include special characters and stores the result in a variable
  var includeSpecial = confirm("Do you want to include special characters?");
  
  // Declares an empty string to store the characters allowed in the password
  var allowedChars = ""; 
  if (includeLowercase) {
     // Appends lowercase letters to the allowedChars string if includeLowercase is true
    allowedChars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
     // Appends uppercase letters to the allowedChars string if includeUppercase is true
    allowedChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumbers) {
     // Appends numbers to the allowedChars string if includeNumbers is true
    allowedChars += "0123456789";
  }
  if (includeSpecial) {
    // Appends special characters to the allowedChars string if includeSpecial is true
    allowedChars += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; 
  }
// Declares an empty string to store the generated password
  var password = ""; 
  for (var i = 0; i < passwordLength; i++) {
    // Generates a random index within the allowedChars string length
    var randomIndex = Math.floor(Math.random() * allowedChars.length); 
     // Appends a randomly selected character from allowedChars to the password string
    password += allowedChars[randomIndex];
  }
 // Returns the generated password
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
