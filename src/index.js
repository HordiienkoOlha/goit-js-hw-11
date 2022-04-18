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
    Notify.failure('Error');
    console.error(err.message)
})

// .then(r => {
//     if (!r.ok) {
//       Notify.failure('Oops, there is no country with that name');
//       throw Error(`Error: ${r.statusText}`);
//     }
//     return r.json();
//   });
// }



const renderList = images => {
    
  galleryContainer.innerHTML = '';
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <div class="card col-xl-3 col-lg-4 col-md-6 mb-4">
    
        <a class="gallery-item" href="${largeImageURL}">
        <img class="gallery-image img-fluid pt-2" src="${webformatURL}" alt="${tags}" loading="lazy""/></a>
        <ul class="info card-body d-flex flex-wrap navbar ">
            <li class="info-item"><p class="info-text card-text">
                <b>Likes</b><br>${likes}
                </p>
            </li>
            <li class="info-item"><p class="info-text card-text">
                <b>Views</b><br>${views}
                </p>
            </li>
            <li class="info-item"><p class="info-text card-text">
                <b>Comments</b><br>${comments}
                </p>
            </li>
            <li class="info-item"><p class="info-text card-text">
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
let gallery  = new SimpleLightbox('.gallery a', {
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
        // <div class="photo-card  card col-xl-3 col-lg-4 col-md-6 mb-4 shadow m-2">
        //     <div class="bg-white rounded shadow-sm">
        //     <a class="gallery__item " href="${largeImageURL}">
        //     <img class="gallery__image img-fluid card-img-top" src="${webformatURL}" alt="${tags}" loading="lazy""/></a>
        //     </div>
        //     <div class="info p-4 d-flex justify-content-between text-wrap  text">
        //         <div class="info-item"><p class="info-text text-wrap  text">
        //             <b>Likes</b><br>${likes}
        //             </p>
        //         </div>
        //         <div class="info-item"><p class="info-text text-wrap  text">
        //             <b>Views</b><br>${views}
        //             </p>
        //         </div>
        //         <div class="info-item"><p class="info-text text-wrap  text">
        //             <b>Comments</b><br>${comments}
        //             </p>
        //         </div>
        //         <div class="info-item"><p class="info-text text-wrap  text">
        //             <b>Downloads</b><br>${downloads}
        //             </p>
        //         </div>
        //     </div>
        // </div>