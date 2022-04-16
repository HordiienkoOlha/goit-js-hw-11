import './sass/main.scss';
import 'material-icons/iconfont/material-icons.css';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Notify.success('Sol lucet omnibus');
// Notify.failure('Qui timide rogat docet negare');
// Notify.warning('Sorry, there are no images matching your search query. Please try again.');
// Notify.info('We're sorry, but you've reached the end of search results.');
//
// key - твій унікальний ключ доступу до API.
// q - термін для пошуку. Те, що буде вводити користувач.
// image_type - тип зображення. На потрібні тільки фотографії, тому постав значення photo.
// orientation - орієнтація фотографії. Постав значення horizontal.
// safesearch - фільтр за віком. Постав значення true.

import { getRefs } from './helpers/getRefs';
import { ImageService } from './helpers/api-service';
const { formRef, inputRef, btnSearchRef, btnLoadMoreRef } = getRefs();

formRef.addEventListener('submit', onSearchSubmit);
function onSearchSubmit(event) {
    event.preventDefault();
    // newsApiService.query = event.currentTarget.elements.query.value.trim();
    
    const query= event.currentTarget.elements.query.value.trim();
    console.dir(query)
}
// const getContacts = async () => {
//   const { data } = await axios.get('/images');
//     console.log(data)
//   return data;
// };
// axios.get(url[, config])