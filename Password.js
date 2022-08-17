const lettersArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbersArray = "1234567890";
const specialsArray = "!$§%&?:;";

export default class Password {
  constructor(letters, numbers, specials) {
    this.letters = letters;
    this.numbers = numbers;
    this.specials = specials;
    this.string = [];
  }

  createString() {
    if (this.letters) this.string += lettersArray;

    if (this.numbers) this.string += numbersArray;

    if (this.specials) this.string += specialsArray;

    return this.string;
  }
}
