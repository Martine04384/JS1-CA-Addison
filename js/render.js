export function renderMovies(movies) {
  const movieList = document.querySelector(".movie__imagelist");
  movieList.innerHTML = "";

  movies.forEach(({ id, title, price, image }) => {
    const article = document.createElement("article");

    const card = document.createElement("div");
    card.classList.add("card");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("card-image-container");

    const img = document.createElement("img");
    img.src = image.url;
    img.alt = title;

    imageContainer.appendChild(img);

    const movieTitle = document.createElement("h2");
    movieTitle.textContent = title;

    const moviePrice = document.createElement("p");
    moviePrice.textContent = `Price: $${price ? price.toFixed(2) : "N/A"}`;

    const readMoreLink = document.createElement("a");
    readMoreLink.href = `product-spesific.html?id=${id}`;
    readMoreLink.classList.add("read-more");
    readMoreLink.textContent = `Read more about ${title}`;

    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add("add-to-cart");
    addToCartButton.setAttribute("data-id", id);
    addToCartButton.setAttribute("data-title", title);
    addToCartButton.setAttribute("data-price", price);
    addToCartButton.textContent = "Add to Cart";

    card.appendChild(imageContainer);
    card.appendChild(movieTitle);
    card.appendChild(moviePrice);
    card.appendChild(readMoreLink);
    card.appendChild(addToCartButton);

    article.appendChild(card);

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
  container.innerHTML = ""; // Clear any existing content

  const genreHeading = document.createElement("h1");
  genreHeading.textContent = genre;

  const movieCard = document.createElement("section");
  movieCard.classList.add("movie-card");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const img = document.createElement("img");
  img.src = image.url;
  img.alt = title;

  imageContainer.appendChild(img);

  const movieText = document.createElement("div");
  movieText.classList.add("movie-text");

  const movieTitle = document.createElement("h2");
  movieTitle.textContent = title;

  const movieDescription = document.createElement("p");
  movieDescription.textContent = description;

  const moviePrice = document.createElement("p");
  moviePrice.classList.add("movie-text-price");
  moviePrice.textContent = `Price: $${price.toFixed(2)}`;

  const addToCartButton = document.createElement("button");
  addToCartButton.classList.add("add-to-cart");
  addToCartButton.setAttribute("data-id", id);
  addToCartButton.setAttribute("data-title", title);
  addToCartButton.setAttribute("data-price", price);
  addToCartButton.textContent = "Add to Cart";

  movieText.appendChild(movieTitle);
  movieText.appendChild(movieDescription);
  movieText.appendChild(moviePrice);
  movieText.appendChild(addToCartButton);

  movieCard.appendChild(imageContainer);
  movieCard.appendChild(movieText);

  container.appendChild(genreHeading);
  container.appendChild(movieCard);
}
