"use strict";

import images from "./gallery-items.js";

const galeryUl = document.querySelector(".gallery");
const imageLightBox = document.querySelector(".lightbox");
const lightBoxImage = document.querySelector(".lightbox__image");

let li = "";
images.forEach(elem => {
  li += `<li class="gallery__item"><a class="gallery__link"><img src="${elem.preview}" class="gallery__image" data-source="${elem.original}" alt="${elem.description}"><span class="gallery__icon"><i class="material-icons">zoom_out_map</i></span></li>`;
});
galeryUl.insertAdjacentHTML("afterbegin", li);

galeryUl.addEventListener("click", event => {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    imageLightBox.classList.add("is-open");
    lightBoxImage.setAttribute("src", event.target.dataset.source);
  }
});

imageLightBox.addEventListener("click", event => {
  if (
    event.target.nodeName === "BUTTON" ||
    event.target.nodeName === "I" ||
    event.target.nodeName !== "IMG"
  ) {
    imageLightBox.classList.remove("is-open");
    lightBoxImage.removeAttribute("src");
  }
});
window.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    imageLightBox.classList.remove("is-open");
    lightBoxImage.removeAttribute("src");
  }
});
