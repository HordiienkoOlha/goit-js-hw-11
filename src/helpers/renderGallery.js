// webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// import { getRefs } from './getRefs';
// const { galleryContainer } = getRefs();
// console.log(galleryContainer);
// export
//     const renderList = images => {
//   galleryContainer.innerHTML = '';
//   const markup = images
//     .map(
//       ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
//     <li class="gallery-card">
//         <a class="gallery-item" href="${largeImageURL}">
//         <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy""/></a>
//         <ul class="info">
//             <li class="info-item"><p class="info-text">
//                 <b>Likes</b>${likes}
//                 </p>
//             </li>
//             <li class="info-item"><p class="info-text">
//                 <b>Views</b>${views}
//                 </p>
//             </li>
//             <li class="info-item"><p class="info-text">
//                 <b>Comments</b>${comments}
//                 </p>
//             </li>
//             <li class="info-item"><p class="info-text">
//                 <b>Downloads</b>${downloads}
//                 </p>
//             </li>
//         </ul>
//     </li>`,
//     )
//         .join('');
//     galleryContainer.insertAdjacentHTML('beforeend', markup);
// };


// let gallery = new SimpleLightbox('.gallery a', {
//     captions: true,
//     captionsData: 'alt',
//     captionDelay: 250,
// });
