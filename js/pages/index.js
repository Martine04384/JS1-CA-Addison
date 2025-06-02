import { getMovies } from "../api.js";
import { renderMovies } from "../render.js";
import { addGenre, activateGenreFilter } from "../utils/filter.js";
import { addToCart } from "../utils/add-to-cart.js";
import loader from "../utils/loader.js"; // From Module 7 loader.
import { showMessage } from "../utils/message.js";

async function movies() {
  loader.show();
  try {
    const movies = await getMovies();

    renderMovies(movies);
    loader.hide();
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
    // Updated code with error messages.
    console.error("Could not load movies:", error);
    showMessage(error.message);
  }
}

movies();
