// import external dependencies
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';

// import internal dependencies
import {
  getAllMovies,
  getMovieDetail,
} from '../../context/Movies/moviesAction';

function SelectComponent() {
  // component states
  const [movie, setMovie] = useState(null);
  const moviesList = useSelector((state) => state.movies.allMovies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  return (
    <>
      <Select
        value={movie}
        placeholder="Search for Movie"
        options={
          moviesList
            ? moviesList?.results
                .sort(
                  (a, b) => new Date(b.release_date) - new Date(a.release_date)
                )
                .map(({ title, url }) => ({
                  label: title,
                  value: url,
                }))
            : []
        }
        id="state"
        onChange={(e) => {
          setMovie(e);
          dispatch(getMovieDetail(e.value));
        }}
      />
    </>
  );
}

export default SelectComponent;
