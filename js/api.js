const API_URL = "https://v2.api.noroff.dev/square-eyes";

export async function getMovies() {
  try {
    const response = await fetch(API_URL);
    const movies = await response.json();
    return movies;
  } catch (error) {
    alert("Could not load movies");
    throw error;
  }
}
