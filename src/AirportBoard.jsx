import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as boardActions from './board/board.actions.js';

import Header from './board/components/header/Header.jsx';
import Search from './board/components/search/Search.jsx';
import Board from './board/components/board/Board.jsx';

import './common.scss';

const AirportBoard = ({ getFlightList }) => {
  useFlightList(getFlightList);

  return (
    <div className="page">
      <Header />
      <Search />
      <Board />
    </div>
  );
};

AirportBoard.propTypes = {
  getFlightList: PropTypes.func.isRequired,
};

const useFlightList = (getFlightList) => {
  useEffect(() => {
    getFlightList();
  }, []);
};

const mapDispatch = {
  getFlightList: boardActions.getFlightList,
};

export default connect(null, mapDispatch)(AirportBoard);
