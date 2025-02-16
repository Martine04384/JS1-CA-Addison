export function renderMovies(movies) {
  const movieList = document.querySelector(".topthree__imagelist");
  movieList.innerHTML = "";

  movies.forEach(({ id, title, description, price, image }) => {
    const article = document.createElement("article");
    article.innerHTML = `
        <div class="image-container">
            <img src="${image.url}" alt="${title}">
        </div>
        <h3>${title}</h3>
        <p>${description || "No description available"}</p>
        <p>Price: $${price ? price.toFixed(2) : "N/A"}</p>
        <a href="product-spesific.html?id=${id}">Read more</a>
        <button class="add-to-cart" data-id="${id}" data-title="${title}" data-price="${price}">Add to Cart</button>
    `;
    movieList.appendChild(article);
  });
}

export function renderMovieDetails({
  id,
  title,
  description,
  price,
  genre,
  image,
}) {
  const container = document.querySelector(".movie-details");
  container.innerHTML = `
    <h1>${genre}</h1>
    <section class="movie-card">
        <div class="image-container">
            <img src="${image.url}" alt="${title}">
        </div>
        <div class="movie-text">
            <h2>${title}</h2>
            <p>${description}</p>
            <p class="movie-text-price">Price: $${price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${id}" data-title="${title}" data-price="${price}">Add to Cart</button>
        </div>
    </section>
  `;
}
