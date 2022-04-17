import './sass/main.scss';
import 'material-icons/iconfont/material-icons.css';
import * as PhotoService from './helpers/api-service';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Notify.success('Sol lucet omnibus');
// Notify.failure('Qui timide rogat docet negare');
// Notify.warning('Sorry, there are no images matching your search query. Please try again.');
// Notify.info('We're sorry, but you've reached the end of search results.');
//
console.log(PhotoService)
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
PhotoService.searchPhoto().then(responce => {
    Notify.success('Find photo');
    console.log(responce)
}).catch(err => {
    Notify.failure('Error');
    console.error(err.message)
})