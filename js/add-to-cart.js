let cart = [];

export function loadCart() {
  try {
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      cart = JSON.parse(storedCart);
    }
  } catch (error) {
    alert("Error loading cart...");
  }
}

export function saveCart() {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    alert("Error saving cart...");
  }
}

function showAlert(message, duration = 1000) {
  const alertBox = document.getElementById("customAlert");
  alertBox.textContent = message;
  alertBox.style.display = "block";

  setTimeout(() => {
    alertBox.style.opacity = "0";
    setTimeout(() => {
      alertBox.style.display = "none";
      alertBox.style.opacity = "1";
    }, 300);
  }, duration);
}

export function addToCart(id = "unknown", title = "No title", price = 0) {
  try {
    const item = { id, title, price };
    cart.push(item);
    saveCart();
    showAlert(`${title} added to cart!`);
  } catch (error) {
    alert("Error adding item to cart:");
  }
}

loadCart();
