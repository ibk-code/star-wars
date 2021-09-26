/**
 * Sort data by header
 * @param {string} header
 * @param {Array} arr
 * @returns Array
 */
export const sortByHeaders = (header, arr, mode) => {
  const reverse = mode === 'ascending' ? 1 : -1;

  if (mode === 'ascending') {
    return header === 'height'
      ? arr.sort((a, b) => a[header] - b[header])
      : arr.sort((a, b) =>
          a[header] > b[header] ? 1 * reverse : -1 * reverse
        );
  }

  return header === 'height'
    ? arr.sort((a, b) => b[header] - a[header])
    : arr.sort((a, b) => (a[header] > b[header] ? 1 * reverse : -1 * reverse));
};

/**
 * Filter data with the passed field
 * @param {string} field
 * @param {Array} data
 * @param {String} value
 * @return Array
 */
export const filterData = (field, data, value) => {
  return value === 'all' ? data : data.filter((e) => value === e[field]);
};

/**
 *Convert cm to feet
 * @param {Number} val
 * @returns Number
 */
export const getHeightInFeet = (val) => {
  const calcVal = (+val / 30.48).toFixed(1);
  return calcVal;
};

export const getTotal = (data, field) => {
  const filteredHeight = data.map((e) => +e[field]);

  // data.reduce((a, b) => {
  //
  //   return +a[field] + +b[field];
  // }, 0);
  return filteredHeight.reduce((a, b) => a + b);
};
