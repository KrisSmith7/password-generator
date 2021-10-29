// Assignment code here
//global variables
//arrays for the character options in password
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var special = ["!", "@", "#", "$", "&", "<", ">","?"]
//placeholders for text values
var addCharacters = ""
var randomPassword = ""
//functions to confirm types of characters to use
var criteria = function () {
  cUppercase = window.confirm("Would you like to use uppercase characters?");
  cLowercase = window.confirm("Would you like to use lowercase characters?");
  cNumber =  window.confirm("Would you like to use numbers?");
  cSpecial = window.confirm("Would you like to use special characters?");}

// step 1 create generatePassword function
//prompt for password criteria when button clicked
var generatePassword = function () {
  
  // step 2 gather user Input  //   start with length
  // choose a length of at least 8 characters and no more than 128 characters
  var passLength = prompt("How many characters would you like your password to be? Must be between 8-128.");
  while (isNaN(passLength) || passLength < 8 || passLength > 128) passLength = (prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
  console.log(passLength);
  
  // confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  criteria();
  console.log (cUppercase, cLowercase, cNumber, cSpecial);
  
  // answer each prompt, input should be validated and at least one character type should be selected
  while (cUppercase===false && cLowercase===false && cNumber===false && cSpecial===false) {
    (alert("You must select at least one type of character."));
    criteria();
  };
  
  
  //if user confirmed uppercase letters in password, adds uppercase array to string of var "addCharacters"
  if (cUppercase) {
    addCharacters += uppercase;
    console.log (addCharacters);
  };
  
  //if user confirmed lowercase letters in password, adds lowercase array to string of var "addCharacters"
  if (cLowercase) {
    addCharacters += lowercase;
    console.log (addCharacters);
  };

  //if user confirmed numbers letters in password, adds numbers array to string of var "addCharacters"
  if (cNumber) {
    addCharacters += number;
    console.log (addCharacters);
  };
  
  //if user confirmed special chars in password, adds special characters to string of var "addCharacters"
  if (cSpecial) {
    addCharacters += special;
    console.log (addCharacters);
  };
  
  
  // step 3 FOR loop using user-input length to determine length of password return
  //variable defining text output for randomize password
 for (let i = 0; i < passLength; i++) {
   randomPassword = randomPassword + addCharacters[(Math.floor(Math.random() * addCharacters.length))];
  };
  
  // password is either displayed in an alert or written to the page
  return (randomPassword);
};

 
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
