import { showMessage } from "../utils/message.js";
import { cart, loadCart, saveCart } from "../utils/save-and-load-cart.js";

function displayCart() {
  const cartContainer = document.querySelector(".order-summary__details");
  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-row");

    const title = document.createElement("p");
    title.textContent = item.title;

    // Updated code with quantity buttons
    const quantityButtons = document.createElement("div");
    quantityButtons.classList.add("quantity-buttons");

    const decreaseButton = document.createElement("button");
    decreaseButton.textContent = "-";
    decreaseButton.addEventListener("click", () => decreaseQuantity(index));

    const quantity = document.createElement("p");
    quantity.textContent = item.quantity;

    const increaseButton = document.createElement("button");
    increaseButton.textContent = "+";
    increaseButton.addEventListener("click", () => increaseQuantity(index));

    quantityButtons.appendChild(decreaseButton);
    quantityButtons.appendChild(quantity);
    quantityButtons.appendChild(increaseButton);

    const price = document.createElement("p");
    // Updated code with total price calculated per movie
    const itemTotal = (item.price * item.quantity).toFixed(2);
    price.textContent = `$${itemTotal}`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-from-cart");
    removeButton.setAttribute("data-index", index);
    removeButton.addEventListener("click", () => removeFromCart(index));

    itemDiv.appendChild(title);
    // Updated code with quantity buttons
    itemDiv.appendChild(quantityButtons);
    itemDiv.appendChild(price);
    itemDiv.appendChild(removeButton);

    cartContainer.appendChild(itemDiv);

    // Updated code with total price calculated per order
    total = total + item.price * item.quantity;
  });

  const totalDiv = document.createElement("div");
  const totalLabel = document.createElement("p");
  totalLabel.textContent = "Total";
  const totalPrice = document.createElement("p");
  totalPrice.textContent = `$${total.toFixed(2)}`;

  totalDiv.appendChild(totalLabel);
  totalDiv.appendChild(totalPrice);
  cartContainer.appendChild(totalDiv);
}

// Updated code with quantity buttons - function for the buttons
function increaseQuantity(index) {
  let currentQuantity = cart[index].quantity;
  let newQuantity = currentQuantity + 1;
  cart[index].quantity = newQuantity;
  saveCart();
  displayCart();
}

function decreaseQuantity(index) {
  let currentQuantity = cart[index].quantity;
  if (currentQuantity > 1) {
    let newQuantity = currentQuantity - 1;
    cart[index].quantity = newQuantity;
  } else {
    cart.splice(index, 1);
  }
  saveCart();
  displayCart();
}

function removeFromCart(index) {
  cart.splice(index, 1); // Remove the 1 item at the specified index
  saveCart();
  displayCart();
}

/* Updated code with form validation */
const form = document.getElementById("checkout-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("adress").value.trim();
  const streetNumber = document.getElementById("streetnumber").value.trim();
  const postalCode = document.getElementById("postalcode").value.trim();
  const city = document.getElementById("city").value.trim();
  const country = document.getElementById("country").value.trim();
  const cardNumber = document.getElementById("cardnumber").value.trim();
  const expiry = document.getElementById("expiry").value.trim();
  const cvc = document.getElementById("cvc").value.trim();

  if (name.length < 2) {
    showMessage("Please enter your full name.");
    return;
  }

  if (!email.includes("@") || !email.includes(".com")) {
    showMessage("Please enter a valid email.");
    return;
  }

  if (address.length < 3) {
    showMessage("Please enter a valid street name.");
    return;
  }

  if (streetNumber === "" || isNaN(streetNumber)) {
    showMessage("Please enter a valid street number.");
    return;
  }

  if (postalCode === "" || isNaN(postalCode)) {
    showMessage("Please enter a valid postal code.");
    return;
  }

  if (city.length < 2) {
    showMessage("Please enter a valid city.");
    return;
  }

  if (country.length < 2) {
    showMessage("Please enter a valid country.");
    return;
  }

  if (cardNumber.length < 12 || cardNumber.length > 19) {
    showMessage("Card number must be between 12 and 19 digits.");
    return;
  }

  if (cvc.length !== 3 || isNaN(cvc)) {
    showMessage("CVC must be exactly 3 digits.");
    return;
  }

  if (expiry.length < 4 || isNaN(expiry)) {
    showMessage("Please enter a valid expiry date.");
    return;
  }

  localStorage.setItem("orderSummary", JSON.stringify(cart));
  localStorage.removeItem("cart");
  window.location.href = "checkout-complete.html";
});

loadCart();
displayCart();
