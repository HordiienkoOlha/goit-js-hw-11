import './sass/main.scss';
import 'material-icons/iconfont/material-icons.css';
import axios from 'axios';
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
const API_KEY = '26797371-301fbf489e1e7afb05e25635e';
const BASE_URL = 'https://pixabay.com/api/';
import { getRefs } from './helpers/getRefs';
const { formRef, inputRef, btnSearchRef, btnLoadMoreRef } = getRefs();
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = API_KEY;
formRef.addEventListener('submit', onSearchSubmit);
function onSearchSubmit(event) {
    event.preventDefault();
    // newsApiService.query = event.currentTarget.elements.query.value.trim();
    
    const inputText= event.currentTarget.elements.query.value.trim();
    console.dir(inputText)
}
// console.dir(onSearchSubmit)