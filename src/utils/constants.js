export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`
  }
};

export const POSTER_BASEURL = "https://image.tmdb.org/t/p/original";
export const FETCH_NOWPLAYING_MOVIES='https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

export const AI_KEY=process.env.REACT_APP_GEMINI_KEY;


