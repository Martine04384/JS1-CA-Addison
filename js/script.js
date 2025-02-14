import { getMovies } from "./api.js";
import { renderMovies } from "./render.js";

async function movies() {
  try {
    const movies = await getMovies();
    renderMovies(movies);
  } catch (error) {
    alert(error.message);
  }
}

movies();
