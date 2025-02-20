import { getMovieById } from "./api.js";
import { renderMovieDetails } from "./render.js";
import { addToCart } from "./add-to-cart.js";

async function loadMovie() {
  const urlParams = new URLSearchParams(window.location.search); // Extract URL parameters
  const movieId = urlParams.get("id"); // Get the movie ID from the URL

  const detailsContainer = document.querySelector(".movie-details");
  const loadingMessage = document.createElement("p");
  loadingMessage.textContent = "Loading movie details...";
  detailsContainer.appendChild(loadingMessage);

  try {
    const movie = await getMovieById(movieId);
    detailsContainer.removeChild(loadingMessage);
    renderMovieDetails(movie);

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
