import Password from "/Password.js";
import List from "/List.js";

const btn = document.getElementById("generate_btn");
const listElement = document.querySelector(".field");
const length = document.querySelector(".length_slider");
const lengthValue = document.getElementById("length_value");

let passwordLength = 25;

function createPassword(length, letters, numbers, specials) {
  const string = new Password(length, letters, numbers, specials);
  const password = string.createPassword();

  const list = new List(password, string, listElement, passwordLength);
  list.updateList();
  savePassword(password);

  // TODO: Copy password to clipboard and adjust styling
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

length.onchange = function () {
  passwordLength = length.valueAsNumber;
  lengthValue.textContent = passwordLength;
};

btn.addEventListener("click", () => {
  createPassword(passwordLength, letters, numbers, specials);
});
