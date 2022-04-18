import axios from 'axios';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

const API_KEY = '26797371-301fbf489e1e7afb05e25635e';
const BASE_URL = 'https://pixabay.com/api';
axios.defaults.baseURL = BASE_URL;

export const searchPhoto = () => {
    return axios
      .get(
          `/?key=${API_KEY}&q=cat&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=40`,
        
      )
}
// default { searchPhoto };

// console.log(API_KEY)

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


