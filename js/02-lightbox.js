import { galleryItems } from './gallery-items.js';

const gall = document.querySelector(".gallery");

function createGallEl() {
  return galleryItems
    .map(
      (el) =>
        `<a class="gallery__item" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>`
    )
    .join("");
}

gall.insertAdjacentHTML("afterbegin", createGallEl(galleryItems));

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
