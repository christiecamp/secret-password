// Assignment Code
//declares variable using var keyword
var generateBtn = document.querySelector("#generate");

//Special characters for the function. Seperated for each prompt
//uses assignment operator (=) to assign a value
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

    var passwordCharSet = ""; //character set string
    // A string is a series of characters and is surrounded by quotes 
    
    var length = window.prompt("Enter a number from 8 to 128 for password length.")

    console.log ("Enter a number from 8 to 128 for password length.");
  
    var lowercase = window.confirm("Would you like to use lowercase letters?");
    if (lowercase) {
      passwordCharSet += char_set.lowercase;
      console.log ("Would you like to use lowercase letters?");
    };
  
    var uppercase = window.confirm("Would you like to use uppercase letters?");
    if (uppercase) {
      passwordCharSet += char_set.uppercase;
      console.log ("Would you like to use uppercase letters?");
    };
  
    var symbols = window.confirm("Would you like to use symbols?");
    if (symbols) {
      passwordCharSet += char_set.symbol;
      console.log ("Would you like to use symbols?");
    };
  
    var numbers = window.confirm("Would you like to use numbers?");
    if (numbers) {
      passwordCharSet += char_set.number;
      console.log ("Would you like to use numbers?");
    };

    var password = "";
    for (let i = 0; i < length; i++) {
      password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
    }


    console.log(password); //shows password in console log
    // To access a value stored in a variable, use the variable's name
    return password;
  }

generateBtn.addEventListener("click", writePassword); //click to engage prompts




// Pro-tip: JavaScript is loosely typed, so the type is tied to the value held in the variable, not the variable itself!