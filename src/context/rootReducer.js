import { combineReducers } from 'redux';

import movieReducer from './Movies/moviesReducer';

export default combineReducers({
  movies: movieReducer,
});
