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

    const price = document.createElement("p");
    price.textContent = `$${parseFloat(item.price).toFixed(2)}`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-from-cart");
    removeButton.setAttribute("data-index", index);
    removeButton.addEventListener("click", () => removeFromCart(index));

    itemDiv.appendChild(title);
    itemDiv.appendChild(price);
    itemDiv.appendChild(removeButton);

    cartContainer.appendChild(itemDiv);

    total += parseFloat(item.price);
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

function removeFromCart(index) {
  cart.splice(index, 1); // Remove the item at the specified index
  saveCart();
  displayCart();
}

document.querySelector(".submit-order").addEventListener("click", () => {
  localStorage.setItem("orderSummary", JSON.stringify(cart));
  localStorage.removeItem("cart");
});

loadCart();
displayCart();
