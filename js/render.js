export function renderMovies(apiResponse) {
  const movies = Array.isArray(apiResponse) ? apiResponse : apiResponse.data;
  const movieList = document.querySelector(".topthree__imagelist");
  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const article = document.createElement("article");
    article.innerHTML = `
        <h3>${movie.title}</h3>
        <div class="image-container">
            <img src="${movie.image.url}" alt="${movie.title}">
        </div>
        <p>${movie.description || "No description available"}</p>
        <p>Price: $${movie.price ? movie.price.toFixed(2) : "N/A"}</p>
    `;
    movieList.appendChild(article);
  });
}
