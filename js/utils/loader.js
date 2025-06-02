// From Module 7 loader.

function showLoader() {
  const loader = document.querySelector(".loader");
  loader.hidden = false;
}

function hideLoader() {
  const loader = document.querySelector(".loader");
  loader.hidden = true;
}

export default { show: showLoader, hide: hideLoader };
