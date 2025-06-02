let cart = [];

function loadCart() {
  try {
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      cart = JSON.parse(storedCart);
    }
  } catch (error) {}
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function displayCart() {
  const cartContainer = document.querySelector(".order-summary__details");
  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const itemDiv = document.createElement("div");

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

document.querySelector(".submit-order").addEventListener("click", () => {
  localStorage.setItem("orderSummary", JSON.stringify(cart));
  localStorage.removeItem("cart");
});

loadCart();
displayCart();
