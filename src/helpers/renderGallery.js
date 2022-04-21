
import { getRefs } from './getRefs';
const { galleryContainer } = getRefs();

export const renderList = images => {
  console.log(images);
  galleryContainer.innerHTML = '';
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <div class="card col-xl-3 col-lg-4 col-md-6 mb-4">
    
        <a class="gallery-item" href="${largeImageURL}">
        <img class="gallery-image img-fluid pt-2" src="${webformatURL}" alt="${tags}""/></a>
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