import { cart, loadCart, saveCart } from "./save-and-load-cart.js";
import { showMessage } from "./message.js";

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
    //Updated code with custom messages for alert and error.
    showMessage(`${title} added to cart!`);
  } catch (error) {
    console.error("Error adding item to cart:", error);
    showMessage(error.message);
  }
}

loadCart();
