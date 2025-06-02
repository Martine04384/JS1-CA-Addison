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
    // Updated code with quantity
    // Used school example source: https://mollify.noroff.dev/content/feu1/javascript-1/module-3/array-methods?nav=programme
    const existingItem = cart.find((movie) => movie.id === id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const newItem = { id, title, price, quantity: 1 };
      cart.push(newItem);
    }
    saveCart();
    showAlert(`${title} added to cart!`);
  } catch (error) {
    showError("Error adding item to cart");
  }
}

loadCart();
