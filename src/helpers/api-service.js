import axios from 'axios';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

const API_KEY = '26797371-301fbf489e1e7afb05e25635e';
const BASE_URL = 'https://pixabay.com/api';
axios.defaults.baseURL = BASE_URL;

export const PhotoService = {
  _query: '',
  page: 1,
  perPage: 40,

  incrementPage() {
    this.page += 1;
  },
    
  resetPage() {
    this.page = 1;
    
  },

    searchPhoto() {
    return axios
      .get(
        `/?key=${API_KEY}&q=${this._query}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`,
      )
      .then(response => {
          
          console.log(response.data)
        this.incrementPage();

        const { hits, totalHits } = response.data;
            console.log(hits)
        return {
          hits,
          totalHits,
          isOver: totalHits >= this.page * this.perPage,
        };
      });
  },

    get inputQuery() {
    return this._query;
  },

  set inputQuery(newQuery) {
    this._query = newQuery;
  },
};
