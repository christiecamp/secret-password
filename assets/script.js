// Assignment Code
var generateBtn = document.querySelector("#generate");

//Special characters for the function
const char_set = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: '#$%&!@',
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; //associating password with input box
}

// Add event listener to generate button

//Promts for each click
function generatePassword() {

    var passwordCharSet = "";

    var length = window.prompt("Enter a number from 8 to 128 for password length.");
  
    var lowercase = window.confirm("Would you like to use lowercase letters?");
    if (lowercase) {
      passwordCharSet += char_set.lowercase;
    };
  
    var uppercase = window.confirm("Would you like to use uppercase letters?");
    if (uppercase) {
      passwordCharSet += char_set.uppercase;
    };
  
    var symbols = window.confirm("Would you like to use symbols?");
    if (symbols) {
      passwordCharSet += char_set.symbol;
    };
  
    var numbers = window.confirm("Would you like to use numbers?");
    if (numbers) {
      passwordCharSet += chart_set.number;
    };
    var password = "";
    for (let i = 0; i < length; i++) {
      password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
    }
    return password;
  }

generateBtn.addEventListener("click", writePassword());

console.log (generatePassword ()); //shows password in console log