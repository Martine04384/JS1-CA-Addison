const API_URL = "https://v2.api.noroff.dev/square-eyes";

export async function getMovies() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Could not load movies:", error);
  }
}

export async function getMovieById(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Could not load movie:", error);
  }
}
