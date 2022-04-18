import './sass/main.scss';
import "simplelightbox/dist/simple-lightbox.min.css";
import 'material-icons/iconfont/material-icons.css';
import * as PhotoService from './helpers/api-service';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";


import { getRefs } from './helpers/getRefs';
// import { renderList } from './helpers/api-service';
const { formRef, inputRef, btnSearchRef, btnLoadMoreRef, galleryContainer } = getRefs();

// formRef.addEventListener('submit', onSearchSubmit);
// function onSearchSubmit(event) {
//     event.preventDefault();
//     // newsApiService.query = event.currentTarget.elements.query.value.trim();
    
//     const query= event.currentTarget.elements.query.value.trim();
//     console.dir(query)
// }
PhotoService.searchPhoto()
    .then(responce => {
    // Notify.success('Find photo');
    renderList(responce.data.hits)
    console.log(responce.data.hits)
}).catch(err => {
    // Notify.failure('Error');
    console.error(err.message)
})

const renderList = images => {
  galleryContainer.innerHTML = '';
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <div class="photo-card col-xl-3 col-lg-4 col-md-6 mb-4 shadow m-2">
            <div class="bg-white rounded shadow-sm">
            <a class="gallery__item " href="${largeImageURL}">
            <img class="gallery__image img-fluid card-img-top" src="${webformatURL}" alt="${tags}" loading="lazy""/></a>
            </div>
            <ul class="info p-4">
                <li class="info-item"><p class="info-text">
                    <b>Likes</b><br>${likes}
                    </p>
                </li>
                <li class="info-item"><p class="info-text">
                    <b>Views</b><br>${views}
                    </p>
                </li>
                <li class="info-item"><p class="info-text">
                    <b>Comments</b><br>${comments}
                    </p>
                </li>
                <li class="info-item"><p class="info-text">
                    <b>Downloads</b><br>${downloads}
                    </p>
                </li>
            </ul>
        </div>
`,
    )
        .join('');
    galleryContainer.insertAdjacentHTML('beforeend', markup);
};
let lightbox  = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});
// Notify.success('Sol lucet omnibus');
// Notify.failure('Qui timide rogat docet negare');
// Notify.warning('Sorry, there are no images matching your search query. Please try again.');
// Notify.info('We're sorry, but you've reached the end of search results.');
//
