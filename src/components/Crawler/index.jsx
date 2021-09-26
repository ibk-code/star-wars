// import external dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function Crawler({ title, info }) {
  const moviesDetail = useSelector((state) => state.movies.activeMovie);

  return (
    <>
      <img
        src="asset/img/star-wars.png"
        alt="star-wars logo"
        className="fallback-img"
      />
      <div className="crawl-content">
        <h1>{moviesDetail.title || ''}</h1>
        <span>{moviesDetail.opening_crawl || ''}</span>
      </div>
    </>
  );
}

Crawler.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
};

export default Crawler;
