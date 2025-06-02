import { renderMovies } from "../render.js";

const genreSelect = document.getElementById("filter-genre");
let allMoviesList = [];

export function addGenre(movies) {
  const genres = new Set();
  movies.forEach((movie) => genres.add(movie.genre));

  genreSelect.innerHTML = "<option value=''>All Genres</option>";

  genres.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreSelect.appendChild(option);
  });
}

export function filterByGenre(movies, selectedGenre) {
  if (selectedGenre === "") {
    renderMovies(movies);
  } else {
    const filteredMovies = movies.filter(
      (movie) => movie.genre === selectedGenre
    );
    renderMovies(filteredMovies);
  }
}

export function activateGenreFilter(movies) {
  allMoviesList = movies;
  genreSelect.addEventListener("change", () => {
    const selectedGenre = genreSelect.value;
    filterByGenre(allMoviesList, selectedGenre);
  });
}
