// import external dependencies
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import internal dependencies
import { sortData } from '../../context/Movies/moviesAction';
import { sortByHeaders, getHeightInFeet, getTotal } from '../../utils/helper';

function TableList() {
  const characters = useSelector((state) => state.movies.movieCharacters);
  const dispatch = useDispatch();

  const [header, setHeader] = useState('');
  const [mode, setMode] = useState('ascending');

  /**
   * Headers function sort
   * @param {String} param
   */
  const sortByHeader = (param) => {
    let sortMode = 'ascending';

    if (param === header) {
      sortMode = mode === 'ascending' ? 'descending' : 'ascending';
    }

    const sortedData = sortByHeaders(param, characters, sortMode);

    dispatch(sortData(sortedData));
    setHeader(param);
    setMode(sortMode);
  };

  return (
    <>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th onClick={() => sortByHeader('name')}>Name</th>
              <th onClick={() => sortByHeader('gender')}>Gender</th>
              <th onClick={() => sortByHeader('height')}>Height</th>
            </tr>
          </thead>

          {characters.length > 0 && (
            <>
              <tbody>
                {characters.map((ele, ind) => (
                  <tr key={ind}>
                    <td>{ele.name}</td>
                    <td>{ele.gender.charAt(0).toUpperCase()}</td>
                    <td>{`${ele.height}cm (${
                      getHeightInFeet(ele.height).split('.')[0]
                    }ft/${getHeightInFeet(ele.height).split('.')[1]}inch)`}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>{`${characters.length} Characters`}</th>
                  <th></th>
                  <th>{`${getTotal(characters, 'height')}cm (${
                    getHeightInFeet(getTotal(characters, 'height')).split(
                      '.'
                    )[0]
                  }ft/${
                    getHeightInFeet(getTotal(characters, 'height')).split(
                      '.'
                    )[1]
                  }inch)`}</th>
                </tr>
              </tfoot>
            </>
          )}
        </table>
        {!characters.length && <span className="empty-state">No Content</span>}
      </div>
    </>
  );
}

export default TableList;
