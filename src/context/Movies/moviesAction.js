import {
  GET_ALL_MOVIES,
  GET_ALL_MOVIES_ERROR,
  GET_MOVIE_DETAIL,
  GET_MOVIE_ERROR,
  GET_MOVIE_CHARACTER,
  //   GET_MOVIE_CHARACTER_ERROR,
  SORT_DATA,
} from '../constants.js';

/**
 *Get all star wars movies
 */
export const getAllMovies = () => (dispatch) => {
  fetch(`https://swapi.dev/api/films`)
    .then((res) => res.json())
    .then((response) => {
      dispatch({ type: GET_ALL_MOVIES, payload: response });
    })
    .catch((error) => {
      dispatch({
        type: GET_ALL_MOVIES_ERROR,
        payload: error.response,
      });
    });
};

/**
 *Get selected movie detail
 * @param {string} url
 */
export const getMovieDetail = (url) => (dispatch) => {
  fetch(url)
    .then((res) => res.json())
    .then((response) => {
      dispatch({
        type: GET_MOVIE_DETAIL,
        payload: response,
      });
      return response.characters;
    })
    .then((characters) => {
      const characterRequest = characters.map((charac) => fetch(charac));
      return Promise.all(characterRequest);
    })
    .then((resp) => {
      return resp.map((res) => res.json());
    })
    .then((resp) => {
      return Promise.all(resp);
    })
    .then((res) => {
      dispatch({
        type: GET_MOVIE_CHARACTER,
        payload: res,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_MOVIE_ERROR,
        payload: error.response,
      });
    });
};

export const sortData = (newObj) => (dispatch) => {
  dispatch({
    type: SORT_DATA,
    payload: newObj,
  });
};
