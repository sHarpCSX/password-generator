const animationString =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890§$%&()?!@€+#";

export default class List {
  constructor(password, string, element, length) {
    this.password = password;
    this.string = string;
    this.listElement = element;
    this.length = length;
  }

  static createListItem(password, string) {
    const li = document.createElement("li");
    const divValid = document.createElement("div");
    const divBackdrop = document.createElement("div");

    li.appendChild(divBackdrop);
    li.appendChild(divValid);

    li.setAttribute("class", "output");
    divBackdrop.setAttribute("class", "output_backdrop");
    divValid.setAttribute("class", "output_valid");

    const randomNumber = Math.floor(Math.random() * animationString.length) / 2;

    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const loop = async () => {
      for (let i = 0; i < randomNumber; i++) {
        divBackdrop.textContent =
          animationString[Math.floor(Math.random() * animationString.length)];
        await wait(100);
      }
      divBackdrop.style.display = "none";
      divValid.style.display = "flex";
    };
    loop();

    return li;
  }

  updateList() {
    while (this.listElement.firstChild) {
      this.listElement.removeChild(this.listElement.firstChild);
    }

    for (let i = 0; i < this.length; i++) {
      this.listElement.appendChild(
        List.createListItem(this.password, this.string)
      );
    }
  }
}
