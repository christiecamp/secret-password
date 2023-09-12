// assignment code
// a variable declared in global scope is available to all functions
// variable declariation expression
var generateBtn = document.querySelector("#generate");

// special characters for the function. seperated for each prompt
// uses assignment operator (=) to assign a value
// const are a collection of properties
const char_set = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  symbols: '#$%&!@',
  numbers: '0123456789',
};

// write password to the #password input
// functions are reusable blocks of code that perform a specific task
// this is a function declaration
//a variable declared in local scope is only available to that function
function writePassword() {
  // this is a function expression
  var password = generatePassword(); //calls upon generatepassword function
  var passwordText = document.querySelector("#password"); // accesses element by ID using .queryselector
  passwordText.value = password; //associating password with input box
}

// add event listener to generate button - these are found towards the bottom of the page
// promts for each click
function generatePassword() {

    var passwordCharSet = "";

    //using below as template to set character limit
//  if ( (passwordCharSet <= 8) && (passwordCharSet >= 128) ) {
//      return true;
//    } else {
//     return false;
//      };

    // character set string
    // a string is a series of characters and is surrounded by quotes 
    
    var length = window.prompt("Enter a number from 8 to 128 for password length.");
    // window.prompt instructs the browser to display a dialog with an optional message prompting the user to input their number
    console.log ("Enter a number from 8 to 128 for password length.");


    // lowercase prompt
    var lowercase = window.confirm("Would you like to use lowercase letters?");
    // window.confirm instructs the browser to display a dialog with an optional message and wait until the user confirms or cancels the dialog.
    console.log ("Would you like to use lowercase letters?");
    // if-else statement - depending on selection, it will display as true (chose to select) or false (not chosen)
    if (lowercase) {
      passwordCharSet += char_set.lowercase;
      console.log ("You chose to select a lowercase letter");
    } else {
      console.log ("You chose not to select a lowercase letter");
    };
  
    // uppercase promp
    var uppercase = window.confirm("Would you like to use uppercase letters?");
    console.log ("Would you like to use uppercase letters?");
    if (uppercase) {
      passwordCharSet += char_set.uppercase;
      console.log ("You chose to select an uppercase letter");
    } else {
      console.log ("You chose not to select an uppercase letter");
    };
  
    //symbol prompt
    var symbols = window.confirm("Would you like to use symbols?");
    console.log ("Would you like to use symbols?");
    if (symbols) {
      passwordCharSet += char_set.symbols;
      console.log ("You chose to select a symbol");
    } else {
      console.log ("You chose not to select a symbol");
    };

  //number prompt
    var numbers = window.confirm("Would you like to use numbers?");
    console.log ("Would you like to use numbers?");
    if (numbers) {
      passwordCharSet += char_set.numbers;
      console.log ("You chose to select a number");
    } else {
      console.log ("You chose not to select a number");
    };

    // for-loop executes code more than once
    // to determine how many times the loop should execute, we use the length - loops through prompts
    var password = "";
    for (let i = 0; i < length; i++) {
      password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]};
      // math.random() used with Math.floor() can be used to return random characters - passwordcharset
      // math.floor() is used to return the closest integer that's smaller than or equal to the given number. 

    
    console.log(password); // to access a value stored in a variable, use the variable's name
    // shows password in console log

    return password; // returns password in text box
  }

generateBtn.addEventListener("click", writePassword); //click to engage prompts




// Pro-tip: JavaScript is loosely typed, so the type is tied to the value held in the variable, not the variable itself!