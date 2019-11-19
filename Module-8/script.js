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

galeryUl.addEventListener("click", elem => {
  elem.preventDefault();
  const pointer = elem.target;
  if (pointer.nodeName === "IMG") {
    imageLightBox.classList.add("is-open");
    lightBoxImage.setAttribute("src", pointer.dataset.source);
  }
});

imageLightBox.addEventListener("click", elem => {
  const pointer = elem.target;
  if (
    pointer.nodeName === "BUTTON" ||
    pointer.nodeName === "I" ||
    pointer.nodeName !== "IMG"
  ) {
    imageLightBox.classList.remove("is-open");
    lightBoxImage.removeAttribute("src");
  }
});
window.addEventListener("keydown", elem => {
  const keys = elem.key;
  if (keys === "Escape") {
    imageLightBox.classList.remove("is-open");
    lightBoxImage.removeAttribute("src");
  }
});
