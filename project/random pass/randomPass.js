// make const passbox,lengt,UC,LC,NUM,symbol,allchars
// make createpass funct make password var we take one from all with pass += UC,mathfloor,mathrandom*UC make loop with whale lenght > passlenght then all chars math random then make the password to passbox value
// make copypass funct with passboxselect then document execcomand copy

const passwordBox = document.getElementById("password");
const length = 7;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWZ";
const lowerCase = "abcdefghijklmnopqrstuvwz";
const number = "0123456789";
const symbol = "!@#$%^&*()";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
