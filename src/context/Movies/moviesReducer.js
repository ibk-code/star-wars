import {
  GET_ALL_MOVIES,
  GET_MOVIE_DETAIL,
  GET_MOVIE_CHARACTER,
  SORT_DATA,
} from '../constants.js';

const intialState = {
  allMovies: null,
  activeMovie: {},
  movieCharacters: [],
  movieCharactersCopy: [],
  loading: false,
};

const movieReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ALL_MOVIES:
      return {
        ...state,
        allMovies: action.payload,
      };
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        activeMovie: action.payload,
        loading: true,
      };
    case GET_MOVIE_CHARACTER:
      return {
        ...state,
        movieCharacters: action.payload,
        movieCharactersCopy: action.payload,
        loading: false,
      };
    case SORT_DATA:
      return {
        ...state,
        movieCharacters: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default movieReducer;
