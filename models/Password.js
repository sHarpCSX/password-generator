const lettersString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbersString = "1234567890";
const specialsString = "!$§%&?:;()@€-<>#";

export default class Password {
  constructor(length, letters, numbers, specials) {
    this.length = length;
    this.letters = letters;
    this.numbers = numbers;
    this.specials = specials;
    this.string = "";
    this.password = "";
  }

  createPassword() {
    if (
      !this.letters.checked &&
      !this.numbers.checked &&
      !this.specials.checked
    ) {
      alert("Bitte wähle Anforderungen aus!");
      return this.password;
    }

    if (this.letters.checked) this.string += lettersString;

    if (this.numbers.checked) this.string += numbersString;

    if (this.specials.checked) this.string += specialsString;

    for (let i = 0; i < this.length; i++) {
      const char = this.string[Math.floor(Math.random() * this.string.length)];
      this.password += char;
    }
    return this.password;
  }
}
