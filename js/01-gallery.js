import { galleryItems } from "./gallery-items.js";

const gall = document.querySelector(".gallery");

function createGallEl() {
  return galleryItems
    .map(
      (el) =>
        `<div class="gallery__item">
    <a class="gallery__link" href="${el.original}">
      <img
        class="gallery__image"
        src="${el.preview}"
        data-source="${el.original}"
        alt="${el.description}"
      />
      </a>
      </div>`
    )
    .join("");
}

gall.insertAdjacentHTML("afterbegin", createGallEl(galleryItems));

gall.addEventListener("click", onImgElClick);

let instance;

function onImgElClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`);
  instance.show();
  gall.addEventListener("keydown", onEscPress);
}

function onEscPress(e) {
  if (e.code === "Escape") {
    instance.close();
  }
  gall.removeEventListener("keydown", onEscPress);
}
