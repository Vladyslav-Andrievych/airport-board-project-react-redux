import React from 'react';
import PropTypes from 'prop-types';

import { generateTableRowInfo } from './genarateTableRowInfo.jsx';

import './table.scss';

const TableRow = ({ flightData, tableName }) => {
  const { terminal, localTime, destination, status, airline, flight } =
    generateTableRowInfo(flightData, tableName);

  return (
    <tr className="table__body-row">
      <td className="table__body-coloumn">{terminal}</td>
      <td className="table__body-coloumn">{localTime}</td>
      <td className="table__body-coloumn">{destination}</td>
      <td className="table__body-coloumn">{status}</td>
      <td className="table__body-coloumn">{airline}</td>
      <td className="table__body-coloumn">{flight}</td>
    </tr>
  );
};

TableRow.propTypes = {
  flightData: PropTypes.shape().isRequired,
  tableName: PropTypes.string.isRequired,
};

export default TableRow;
