import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

    const products = Array.from(document.querySelectorAll(".product"));
    const product = document.querySelector(".price");
    products.forEach(x => {
      x.setAttribute('data-price', price.textContent);
    })
});
