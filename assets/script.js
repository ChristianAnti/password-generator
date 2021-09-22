// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTVWXYZ0123456789+-!?_$@&';

// Write password to the #password input
function writePassword(writePassword) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // for (var i = 10; i < passwordLenght; i++);{
  // var random = getRandomInt(characters.length);
  // generatePassword += characters[random];

}

function generatePassword(){
  var password = '';
  for (var i = 0; i < 8; i++){
    var randomNumber = getRandomInt(characters.length)
    var addChar = characters[randomNumber];
    password = password + addChar;
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getRandomInt(max) {
  var random = Math.random();
  random *= max;
  return Math.floor(random);
}