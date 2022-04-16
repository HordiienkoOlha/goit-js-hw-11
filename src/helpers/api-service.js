import axios from 'axios';

const API_KEY = '26797371-301fbf489e1e7afb05e25635e';
const BASE_URL = 'https://pixabay.com/api';
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = API_KEY;
// export const ImageService = {
//   _query: '',
//   page: 1,
//   incrementPage() {
//     this.page += 1;
//   },
//   resetPage() {
//     this.page = 1;
//   },
//  function getImages() {
//     return axios
//         .get(`/?key=26797371-301fbf489e1e7afb05e25635e&q=yellow+flowers&image_type=photo`)
//       .then(response => {
//         // this.incrementPage();
//             console.log(response)
//         return response;
//       });
// }
//   getImages()

//   get query() {
//     return this._query;
//   },

//   set query(newQuery) {
//     this._query = newQuery;
//   },
// };
// function fetchCountries(name) {
    

//   return fetch('https://pixabay.com/api/?key=26797371-301fbf489e1e7afb05e25635e&q=${}&image_type=photo&orientation=horizontal&safesearch=true').then(r => {
//     if (!r.ok) {
//       Notify.failure('Oops, there is no country with that name');
//       throw Error(`Error: ${r.statusText}`);
//       }
//       console.log(r)
//     return r.json();
//   });
// }
// fetchCountries()
