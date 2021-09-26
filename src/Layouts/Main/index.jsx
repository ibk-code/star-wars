// import external dependencies
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import internal dependencies
import TableList from '../../components/TableList';
import { sortData } from '../../context/Movies/moviesAction';
import { filterData } from '../../utils/helper';

function Main() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.movies.loading);
  const dataCharacters = useSelector(
    (state) => state.movies.movieCharactersCopy
  );

  /**
   * selected value to filter by
   * @param {Object} val
   */
  const filterGenderData = (e) => {
    dispatch(sortData(filterData('gender', dataCharacters, e.target.value)));
  };

  return (
    <>
      <section>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <>
            <div className="gender-filter">
              <h2>List of Character</h2>
              <select onChange={filterGenderData}>
                <option value="all">All Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="hermaphrodite">Hermaphrodite</option>
              </select>
            </div>
            <TableList />
          </>
        )}
      </section>
    </>
  );
}

export default Main;
