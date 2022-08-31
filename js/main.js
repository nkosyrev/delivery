const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener('click', togglemodal);
close.addEventListener('click', togglemodal);

function togglemodal() {
  modal.classList.toggle("is-open");
}