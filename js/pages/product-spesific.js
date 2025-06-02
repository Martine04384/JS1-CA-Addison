import { getMovieById } from "../api.js";
import { renderMovieDetails } from "../render.js";
import { addToCart } from "../utils/add-to-cart.js";
import loader from "../utils/loader.js"; // From Module 7 loader.
import { showMessage } from "../utils/message.js";

async function loadMovie() {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get("id");
  loader.show();

  try {
    const movie = await getMovieById(movieId);
    renderMovieDetails(movie);
    loader.hide();
    const addToCartButton = document.querySelector(".add-to-cart");
    if (addToCartButton) {
      addToCartButton.addEventListener("click", () => {
        addToCart(movie.id, movie.title, movie.price);
      });
    }
  } catch (error) {
    // Updated code with error messages.
    console.error("Movie not found:", error);
    showMessage(error.message);
  }
}

loadMovie();
