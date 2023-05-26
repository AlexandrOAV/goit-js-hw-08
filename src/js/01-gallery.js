import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const listEl = document.querySelector ('.gallery');
const addMarkup = creatingListPictures(galleryItems);

function creatingListPictures(gallaryArray) {
  return gallaryArray
    .map(({preview, original, description}) =>{
        return ` <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li> `
    })
    .join('\n')
}
listEl.insertAdjacentHTML('beforeend', addMarkup);
const lightbox = new SimpleLightbox('.gallery a',
   ( {
       captionsData: 'alt',
       captionDelay: 250,
    }));