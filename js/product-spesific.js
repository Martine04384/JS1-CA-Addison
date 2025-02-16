import { getMovieById } from "./api.js";
import { renderMovieDetails } from "./render.js";
import { addToCart } from "./add-to-cart.js";

async function loadMovie() {
  const urlParams = new URLSearchParams(window.location.search); // Extract URL parameters
  const movieId = urlParams.get("id"); // Get the movie ID from the URL

  try {
    const movie = await getMovieById(movieId);
    renderMovieDetails(movie);

    const addToCartButton = document.querySelector(".add-to-cart");
    if (addToCartButton) {
      addToCartButton.addEventListener("click", () => {
        addToCart(movie.id, movie.title, movie.price);
      });
    }
  } catch (error) {
    console.error("Error loading movie:", error);
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Movie not found.";
    document.body.appendChild(errorMessage);
  }
}

loadMovie();
