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
      const itemPrice = document.createElement("p");
      itemPrice.textContent = `$${parseFloat(item.price).toFixed(2)}`;

      orderContainer.appendChild(itemTitle);
      orderContainer.appendChild(itemPrice);

      total += parseFloat(item.price);
    });

    const totalContainer = document.createElement("h3");
    totalContainer.textContent = `Total: $${total.toFixed(2)}`;
    orderContainer.appendChild(totalContainer);

    const thankYou = document.createElement("h2");
    thankYou.textContent = "Thank you for your order!";
    orderContainer.appendChild(thankYou);

    localStorage.removeItem("orderSummary");
  } catch (error) {
    const errorMessage = document.createElement("h2");
    errorMessage.textContent = "Something went wrong loading your order.";
    orderContainer.appendChild(errorMessage);
  }
});
