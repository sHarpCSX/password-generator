import Password from "/Password.js";

function getString() {
  const password = new Password(letters, numbers, specials);
  const string = password.createString();

  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
    i++;
  }

  return password.createString();
}

const btn = document.getElementById("copy_btn");

btn.addEventListener("click", getString);
