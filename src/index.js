import './sass/main.scss';
// import 'simplelightbox/dist/simple-lightbox.min.css';
import 'material-icons/iconfont/material-icons.css';
import { PhotoService } from './helpers/api-service';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import SimpleLightbox from "simple-lightbox.js";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { getRefs } from './helpers/getRefs';
import { LoadMoreBtn } from './helpers/loadMoreBtn';
import { renderList } from './helpers/renderGallery';
const { formRef, inputRef, btnSearchRef, galleryContainer } = getRefs();

const loadMoreBtn = new LoadMoreBtn({
  selector: '.js-btn-load-more',
  className: 'd-none',
  onClick: () => {
    onLoadImages().catch(err => {
      Notify.failure('error');
      console.error(err);
    });
  },
});

loadMoreBtn.hide();

formRef.addEventListener('submit', onSearchSubmit);

function onSearchSubmit(event) {
  event.preventDefault();
  //     // newsApiService.query = event.currentTarget.elements.query.value.trim();

  PhotoService.inputQuery = event.currentTarget.elements.query.value.trim();
  //   console.log(inputQuery);
  //   if (!PhotoService.inputQuery) return Notify.failure('Please enter a search query');

  onLoadImages()
    .then(() => {
      loadMoreBtn.show();
      // Notify.success('Find photo');
      // if (!PhotoService.inputQuery) {
      //     Notify.failure('Sorry, there are no images matching your search query. Please try again.')

      // }
      // Notify.success('Find photo');
    })
    .catch(err => {
      Notify.failure('Error');
      console.error(err);
    });

  formRef.reset();
}

function onLoadImages() {
  return PhotoService.searchPhoto().then(({ hits, totalHits, isOver }) => {
    console.log(hits);
    if (!isOver) {
      loadMoreBtn.hide();
      Notify.failure(`We're sorry, but you've reached the end of search results.`);
      return;
      }
      
    const notifyFindPhotos = !PhotoService.inputQuery
      ? Notify.failure('Sorry, there are no images matching your search query. Please try again.')
      : Notify.success(`Hooray! We found ${totalHits} images.`);

    // if (!hits.length) return Notify.failure('No images found');

    renderList(hits);
  });
}
let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
// gallery.on('show.simplelightbox', function () {
// 	console.log('simplelightbox')
// });
// Notify.success('Sol lucet omnibus');
// Notify.failure('Qui timide rogat docet negare');
// Notify.warning('Sorry, there are no images matching your search query. Please try again.');
// Notify.info('We're sorry, but you've reached the end of search results.');
//
