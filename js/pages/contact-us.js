import { showMessage } from "../utils/message.js";

const form = document.querySelector(".contact__form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.elements.name.value;
  showMessage(`Thank you for the message, ${name}!`);
  form.reset();
});
