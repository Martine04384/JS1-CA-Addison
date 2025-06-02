export let cart = [];

export function loadCart() {
  try {
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      cart = JSON.parse(storedCart);
    }
  } catch (error) {
    // Updated with error handling.
    console.error("Failed to get cart from localStorage:", error);
    cart = []; // Reset the cart.
  }
}

export function saveCart() {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    alert("Error saving cart...");
  }
}
