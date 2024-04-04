import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("hello world");
  }
  print1() {
    const screenElement = this.element.querySelector("#calculator-screen");
    screenElement.innerHTML += "hello";
  }
}
