import axios from 'axios';

const API_KEY = '36149155-018fa65223c78c4a7886a9c0a';
const BASE_URL = 'https://pixabay.com/api/';

export default class ImagesServiceAPI {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.per_page = 40;
  }

  async fetchImages() {
    return await axios
      .get(BASE_URL, {
        params: {
          key: API_KEY,
          q: this.searchQuery,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: 'true',
          per_page: this.per_page,
          page: this.page,
        },
      })
      .then(response => response.data);
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
