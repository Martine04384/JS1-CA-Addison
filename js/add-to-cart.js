let cart = [];

export function loadCart() {
  try {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      cart = JSON.parse(storedCart);
    }
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
  }
}

export function saveCart() {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
}

export function addToCart(id = "unknown", title = "No title", price = 0) {
  try {
    const item = { id, title, price };
    cart.push(item);
    saveCart();
    alert(`${title} added to cart!`);
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
}

loadCart();
