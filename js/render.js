export function renderMovies(movies) {
  const movieList = document.querySelector(".topthree__imagelist");
  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const article = document.createElement("article");
    article.innerHTML = `
        <div class="image-container">
            <img src="${movie.image.url}" alt="${movie.title}">
        </div>
        <h3>${movie.title}</h3>
        <p>${movie.description || "No description available"}</p>
        <p>Price: $${movie.price ? movie.price.toFixed(2) : "N/A"}</p>
        <a href="product-spesific.html?id=${movie.id}">Read more</a>
        <button class="add-to-cart" data-id="${movie.id}" data-title="${
      movie.title
    }" data-price="${movie.price}">Add to Cart</button>
    `;
    movieList.appendChild(article);
  });
}

export function renderMovieDetails(movie) {
  const container = document.querySelector(".movie-details");
  container.innerHTML = `
    <h1>${movie.genre}</h1>
    <section class="movie-card">
        <div class="image-container">
            <img src="${movie.image.url}" alt="${movie.title}">
        </div>
        <div class="movie-text">
        <h2>${movie.title}</h2>
            <p>${movie.description}</p>
            <p class="movie-text-price">Price: $${movie.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${movie.id}" data-title="${
    movie.title
  }" data-price="${movie.price}">Add to Cart</button>
        </div>
    </section>
  `;
}
