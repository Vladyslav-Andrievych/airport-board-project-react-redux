import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageLocation } from '../filters/Filters.jsx';

import './search.scss';

const Search = () => {
  const [searchText, setSeacthText] = useStateWithInitialValue();

  const link =
    searchText === '' ? '/departures' : `/departures?searchText=${searchText}`;

  return (
    <section className="search">
      <div className="search-block">
        <label htmlFor="searchText" className="search-block__label">
          <i className="fa-solid fa-magnifying-glass"></i>
        </label>
        <input
          type="text"
          className="search-block__input"
          id="searchText"
          name="searchText"
          placeholder="Airline, destination or flight #"
          value={searchText}
          onChange={(event) => setSeacthText(event.target.value)}
        />
        <Link to={link} className="search-block__action-link">
          Search
        </Link>
      </div>
    </section>
  );
};

const useStateWithInitialValue = () => {
  const [searchTextInitialValue] = usePageLocation();

  return useState(searchTextInitialValue);
};

export default Search;
