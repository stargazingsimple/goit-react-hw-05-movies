import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '30b880cb8af36a78b014f41021bfb163';

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getSearchMovies = async searchQuery => {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${searchQuery}`
    );
    return response.data.results;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getMovieDetails = async id => {
  try {
    const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    toast.info('Not all information available');
  }
};

export const getMovieCredits = async id => {
  try {
    const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
    return response.data.cast;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getMovieReviews = async id => {
  try {
    const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    toast.error(error.message);
  }
};
