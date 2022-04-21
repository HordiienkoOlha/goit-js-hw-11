import './sass/main.scss';
import 'material-icons/iconfont/material-icons.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';

import { PhotoService } from './helpers/api-service';
import { getRefs } from './helpers/getRefs';
import { LoadMoreBtn } from './helpers/loadMoreBtn';
import { renderList } from './helpers/renderGallery';
const { formRef, galleryContainer } = getRefs();

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

  galleryContainer.innerHTML = '';

  PhotoService.resetPage();

  PhotoService.inputQuery = event.currentTarget.elements.query.value.trim();
  if (PhotoService.inputQuery === '') return Notify.failure('Please enter a search query');

  onLoadImages();

  formRef.reset();
}

function onLoadImages() {
  return PhotoService.searchPhoto().then(({ hits, totalHits, isOver }) => {
    if (!hits.length) {
      Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    } else {
      if (!isOver) {
        loadMoreBtn.hide();
        Notify.info(`We're sorry, but you've reached the end of search results.`);
        return;
      }
      Notify.success(`Hooray! We found ${totalHits} images.`);
      loadMoreBtn.show();
    }

    renderList(hits);
    const { height: cardHeight } = document.querySelector('.gallery').getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 1,
      behavior: 'smooth',
    });
  });
}
