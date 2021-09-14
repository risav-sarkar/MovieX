import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  NOW_PLAYING_BASE_URL,
  UPCOMING_BASE_URL,
  API_URL,
  API_KEY,
} from "./config";

const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchNowMovies: async (page) => {
    const endpoint = `${NOW_PLAYING_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchUpcomingMovies: async (page) => {
    const endpoint = `${UPCOMING_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async (movieId) => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },
};

export default apiSettings;
