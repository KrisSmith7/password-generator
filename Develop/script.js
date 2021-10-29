// Assignment code here
//global variables
//arrays for the character options in password
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var special = ["!", "@", "#", "$", "&"]
// charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$&"




// step 1 create generatePassword function
//prompt for password criteria when button clicked
var generatePassword = function () {
  
  // step 2 gather user Input  //   start with length
  
  // choose a length of at least 8 characters and no more than 128 characters
  var passLength = prompt("How many characters would you like your password to be?");
  while (isNaN(passLength) || passLength < 8 || passLength > 128) passLength = (prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
  console.log(passLength);
  
  // confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var cUppercase = window.confirm("Would you like to use uppercase characters?");
  var cLowercase = window.confirm("Would you like to use lowercase characters?");
  var cNumber =  window.confirm("Would you like to use numbers?");
  var cSpecial = window.confirm("Would you like to use special characters?");
  console.log (cUppercase, cLowercase, cNumber, cSpecial);
  
  // answer each prompt, input should be validated and at least one character type should be selected
  while (cUppercase===false && cLowercase===false && cNumber===false && cSpecial===false) {
    (alert("You must select at least one type of character."));
    var cUppercase = window.confirm("Would you like to use uppercase characters?");
    var cLowercase = window.confirm("Would you like to use lowercase characters?");
    var cNumber =  window.confirm("Would you like to use numbers?");
    var cSpecial = window.confirm("Would you like to use special characters?");
  };
  
  // step 3 user input length to determine length of password return (this would be in the generatefunction)
  var addCharacters = ""
  var randomPassword = ""
  
  //if user confirmed uppercase letters in password, adds uppercase array to string of var "addCharacters"
  if (cUppercase) {
    addCharacters += uppercase
    console.log (addCharacters);
 };
  
 //if user confirmed lowercase letters in password, adds lowercase array to string of var "addCharacters"
 if (cLowercase) {
   addCharacters += lowercase
 };
 console.log (addCharacters);

   //if user confirmed numbers letters in password, adds numbers array to string of var "addCharacters"
 if (cNumber) {
   addCharacters += number 
 };
console.log (addCharacters);

   //if user confirmed special chars in password, adds special characters to string of var "addCharacters"
 if (cSpecial) {
   addCharacters += special
 };
 console.log (addCharacters);
//  for (let i = 0; i < length; i++){}

  // password is either displayed in an alert or written to the page
  return "1234";
  
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
