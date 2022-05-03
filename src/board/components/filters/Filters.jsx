import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import qs from 'qs';

import './filters.scss';

const Filters = () => {
  const [searchText, pathname] = usePageLocation();

  const departuresLink =
    searchText === '' ? '/departures' : `/departures?searchText=${searchText}`;
  const departuresClasses = classNames('filters__item', {
    filters__item_selected: pathname === '/departures',
  });

  const arrivalsLink =
    searchText === '' ? '/arrivals' : `/arrivals?searchText=${searchText}`;
  const arrivalsClasses = classNames('filters__item', {
    filters__item_selected: pathname === '/arrivals',
  });

  return (
    <div className="filters">
      <Link to={departuresLink} className={departuresClasses}>
        <span className="filters__item-icon">
          <i className="fa-solid fa-plane-departure"></i>
        </span>
        Departures
      </Link>
      <Link to={arrivalsLink} className={arrivalsClasses}>
        <span className="filters__item-icon">
          <i className="fa-solid fa-plane-arrival"></i>
        </span>
        Arrivals
      </Link>
    </div>
  );
};

export const usePageLocation = () => {
  const { pathname, search } = useLocation();

  let searchText;
  if (search === '') {
    searchText = '';
  } else {
    const queryParamsObj = qs.parse(search, { ignoreQueryPrefix: true });
    searchText = queryParamsObj.searchText;
  }

  return [searchText, pathname];
};

export default Filters;
