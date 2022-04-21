import './sass/main.scss';
import 'material-icons/iconfont/material-icons.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';

import { PhotoService } from './helpers/api-service';
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

  galleryContainer.innerHTML = '';
  
  PhotoService.resetPage();
  
  PhotoService.inputQuery = event.currentTarget.elements.query.value.trim();
  //   console.log(inputQuery);
  if (PhotoService.inputQuery === '') return Notify.failure('Please enter a search query');
  
  onLoadImages()
    // .then(() => {
    //   loadMoreBtn.show();
    // })
    // .catch(err => {
    //   Notify.failure('Error');
    //   console.error(err);
    // });

  formRef.reset();
}

function onLoadImages() {
  return PhotoService.searchPhoto().then(({ hits, totalHits, isOver }) => {
    console.log(hits);
    //   const notifyFindPhotos = !hits.length
    // ? Notify.failure('Sorry, there are no images matching your search query. Please try again.')
    // : Notify.success(`Hooray! We found ${totalHits} images.`);
    // if (!isOver) {
    //   loadMoreBtn.hide();
    //     Notify.info(`We're sorry, but you've reached the end of search results.`);
    //   return;
    //   }
    if (!hits.length) {
      Notify.failure('Sorry, there are no images matching your search query. Please try again.');
      // loadMoreBtn.hide();
      // return;
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
  });
}
let lightbox = new SimpleLightbox('.gallery a', {
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
