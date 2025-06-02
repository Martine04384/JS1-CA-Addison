import { showMessage } from "../utils/message.js";

document.addEventListener("DOMContentLoaded", () => {
  const orderContainer = document.querySelector(".order-summary");

  try {
    const orderSummary = JSON.parse(localStorage.getItem("orderSummary"));

    if (!orderSummary || orderSummary.length === 0) {
      const emptyMessage = document.createElement("h2");
      emptyMessage.textContent = "Your cart is empty.";
      orderContainer.appendChild(emptyMessage);
      return;
    }

    let total = 0;

    orderSummary.forEach((item) => {
      const itemTitle = document.createElement("p");
      itemTitle.textContent = item.title;
      // Updated code added quantity after title
      itemTitle.textContent = `${item.title} (x${item.quantity})`;
      const itemPrice = document.createElement("p");
      // Updated code with total price calculated per movie
      const itemTotal = (item.price * item.quantity).toFixed(2);
      itemPrice.textContent = `$${itemTotal}`;

      orderContainer.appendChild(itemTitle);
      orderContainer.appendChild(itemPrice);

      // Updated code with total price calculated per order
      total = total + item.price * item.quantity;
    });

    const totalContainer = document.createElement("h3");
    totalContainer.textContent = `Total: $${total.toFixed(2)}`;
    orderContainer.appendChild(totalContainer);

    const thankYou = document.createElement("h2");
    thankYou.textContent = "Thank you for your order!";
    orderContainer.appendChild(thankYou);

    localStorage.removeItem("orderSummary");
  } catch (error) {
    // Updated code with error messages.
    console.error("Error loading movie:", error);
    showMessage(error.message);
  }
});
