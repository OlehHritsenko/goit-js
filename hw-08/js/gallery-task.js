import images from "./gallery-items.js";
const galleryRef = document.querySelector('.gallery');
const refs = {
  galleryRef: document.querySelector(".js-gallery"),
  lightBoxRef: document.querySelector(".lightbox"),
  lightBoxImgRef: document.querySelector(".lightbox__image"),
  lightBoxBtn: document.querySelector('.lightbox__button'),
};

const createGalleryElement = ({ preview, description, original }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
  </a>
  </li>`;

const createGallery = () => images.reduce((acc, image) => acc + createGalleryElement(image), "");
refs.galleryRef.insertAdjacentHTML("afterbegin", createGallery(images));

const openLightbox = (event) => {
  event.preventDefault();

  if (event.target.nodeName === "IMG") 

  refs.lightBoxRef.classList.add("is-open");
  refs.lightBoxImgRef.src = event.target.dataset.source;
};
refs.galleryRef.addEventListener('click', openLightbox)

const closeLightbox = () => {
  refs.lightBoxRef.classList.remove("is-open");
  refs.lightBoxImgRef.src = "";
};

const onPressEsc = (event) => {
  if (event.code === "Escape") {
    closeLightbox();
  }
};

const outOfImage = (event) => {
  if (event.target.nodeName !== "IMG") {
    closeLightbox();
  }
}; 

refs.lightBoxBtn.addEventListener('click', closeLightbox);
window.addEventListener("keydown", onPressEsc);
refs.lightBoxRef.addEventListener("click", outOfImage);