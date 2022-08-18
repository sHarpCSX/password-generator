import Password from "/models/Password.js";
import List from "/models/List.js";

const generateBtn = document.getElementById("generate_btn");
const copyBtn = document.getElementById("copy_btn");
const listElement = document.querySelector(".field");
const length = document.querySelector(".length_slider");
const lengthValue = document.getElementById("length_value");
const passwordToCopy = document.getElementById("passwordCopy");

let passwordLength = 25;

function createPassword(length, letters, numbers, specials) {
  passwordToCopy.style.opacity = "0";

  const string = new Password(length, letters, numbers, specials);
  const password = string.createPassword();
  passwordToCopy.value = password;
  if (password === "") return;

  const list = new List(password, string, listElement, passwordLength);
  list.updateList();

  savePassword(password);

  setTimeout(() => {
    passwordToCopy.style.opacity = "1";
  }, 1500 + length * 100);
}

function savePassword(password) {
  const divValid = document.querySelectorAll(".output .output_valid");
  const outputs = [...divValid];
  let i = 0;
  for (const divValid of outputs) {
    divValid.textContent = password[i];
    i++;
  }
}

function copyToClipBoard() {
  passwordToCopy.select();
  document.execCommand("copy");
  alert("Passwort kopiert!");
}

length.onchange = function () {
  passwordLength = length.valueAsNumber;
  lengthValue.textContent = passwordLength;
};

generateBtn.addEventListener("click", () => {
  createPassword(passwordLength, letters, numbers, specials);
});
copyBtn.addEventListener("click", copyToClipBoard);
