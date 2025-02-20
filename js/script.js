import { getMovies } from "./api.js";
import { renderMovies } from "./render.js";
import { addGenre, activateGenreFilter } from "./filter.js";
import { addToCart } from "./add-to-cart.js";

async function movies() {
  const movieContainer = document.querySelector(".movie-list");
  const loadingMessage = document.createElement("p");
  loadingMessage.textContent = "Loading movies...";
  movieContainer.appendChild(loadingMessage);

  try {
    const movies = await getMovies();
    movieContainer.removeChild(loadingMessage);

    renderMovies(movies);
    addGenre(movies);
    activateGenreFilter(movies);

    movieContainer.addEventListener("click", function (event) {
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

movies();
