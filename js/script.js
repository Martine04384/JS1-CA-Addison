import { getMovies } from "./api.js";
import { renderMovies } from "./render.js";
import { addGenre, activateGenreFilter } from "./filter.js";

let cart = [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
}

function addToCart(id, title, price) {
  const item = { id, title, price };
  cart.push(item); // Add item to the cart array
  saveCart();
  alert(`${title} added to cart!`);
}

async function movies() {
  try {
    const movies = await getMovies();
    renderMovies(movies);
    addGenre(movies);
    activateGenreFilter(movies);

    document.addEventListener("click", function (event) {
      if (event.target.classList.contains("add-to-cart")) {
        const id = event.target.getAttribute("data-id");
        const title = event.target.getAttribute("data-title");
        const price = event.target.getAttribute("data-price");
        addToCart(id, title, price);
      }
    });
  } catch (error) {
    alert("Could not load movies");
  }
}

loadCart();
movies();
