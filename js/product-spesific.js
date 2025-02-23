import { getMovieById } from "./api.js";
import { renderMovieDetails } from "./render.js";
import { addToCart } from "./add-to-cart.js";
import loader from "./loader.js"; // From Module 7 loader.

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
    alert("Movie not found. Please try again later.");
  }
}

loadMovie();
