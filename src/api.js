import axios from 'axios';

const API_KEY = '83f18c58a5384b5487e6770f2590d9dd';
const BASE_URL = 'https://api.themoviedb.org/3';

export default function searchMovies(query) {
  return axios.get(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`)
    .then(response => response.data.results)
    .catch(error => {
      throw new Error('Error searching movies:', error);
    });
}

export default function getMovieDetails(movieId) {
  return axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    .then(response => response.data)
    .catch(error => {
      throw new Error('Error fetching movie details:', error);
    });
}