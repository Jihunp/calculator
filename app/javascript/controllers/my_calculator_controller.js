import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("connected");
  }
  initialize() {
    this.value = '';
  }

  display() {
    const screenElement = this.element.querySelector("#calculator-screen");

    screenElement.innerHTML = this.value
  }

  append(event) {
    const input = event.target.innerHTML;
    this.value += input;

    this.display()
  }
  equals() {
    this.value = eval(this.value);

    this.display();

    this.value = ''
  }
}
