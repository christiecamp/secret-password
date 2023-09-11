// assignment code
// declares variable using var keyword
var generateBtn = document.querySelector("#generate");

// special characters for the function. seperated for each prompt
// uses assignment operator (=) to assign a value
const char_set = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: '#$%&!@',
};

// write password to the #password input
function writePassword() {
  var password = generatePassword(); //calls upon generatepassword function
  var passwordText = document.querySelector("#password");
  passwordText.value = password; //associating password with input box
}

// add event listener to generate button - these are found towards the bottom of the page
// promts for each click
function generatePassword() {

    var passwordCharSet = ""; 
    // character set string
    // a string is a series of characters and is surrounded by quotes 
    
    var length = window.prompt("Enter a number from 8 to 128 for password length.");
    console.log ("Enter a number from 8 to 128 for password length.");
  
    var lowercase = window.confirm("Would you like to use lowercase letters?");
    console.log ("Would you like to use lowercase letters?");
    // if-else statement - depending on selection, it will display as true (chose to select) or false (not chosen)
    if (lowercase) {
      passwordCharSet += char_set.lowercase;
      console.log ("You chose to select a lowercase letter");
    } else {
      console.log ("You chose not to select a lowercase letter");
    }
  

    var uppercase = window.confirm("Would you like to use uppercase letters?");
    console.log ("Would you like to use uppercase letters?");
    if (uppercase) {
      passwordCharSet += char_set.uppercase;
      console.log ("You chose to select an uppercase letter");
    } else {
      console.log ("You chose not to select an uppercase letter");
    }
  
  
    var symbols = window.confirm("Would you like to use symbols?");
    console.log ("Would you like to use symbols?");
    if (symbols) {
      passwordCharSet += char_set.symbol;
      console.log ("You chose to select a symbol");
    } else {
      console.log ("You chose not to select a symbol");
    }

  
    var numbers = window.confirm("Would you like to use numbers?");
    console.log ("Would you like to use numbers?");
    if (numbers) {
      passwordCharSet += char_set.number;
      console.log ("You chose to select a number");
    } else {
      console.log ("You chose not to select a number");
    }

    var password = "";
    for (let i = 0; i < length; i++) {
      password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
    }
    
    console.log(password); // to access a value stored in a variable, use the variable's name
    // shows password in console log

    return password; // returns password in text box
  }

generateBtn.addEventListener("click", writePassword); //click to engage prompts




// Pro-tip: JavaScript is loosely typed, so the type is tied to the value held in the variable, not the variable itself!