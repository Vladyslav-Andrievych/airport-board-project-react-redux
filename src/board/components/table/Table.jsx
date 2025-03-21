import React from 'react';
import PropTypes from 'prop-types';

import Info from '../info/Info.jsx';
import TableRow from './TableRow.jsx';
import { usePageLocation } from '../filters/Filters.jsx';
import { filterFlightList } from '../../board.filters.js';

import './table.scss';

const Table = ({ flightList }) => {
  if (!flightList) {
    return null;
  }

  const [searchText, pathname] = usePageLocation();
  const filterName = pathname.slice(1);
  const filteredFlightList =
    searchText === ''
      ? flightList
      : filterFlightList(flightList, searchText, filterName);

  if (filteredFlightList.length === 0) {
    return <Info message="No flight" />;
  }

  return (
    <table className="board__table table">
      <thead className="table__head">
        <tr className="table__head-row">
          <th className="table__head-coloumn">Terminal</th>
          <th className="table__head-coloumn">Local time</th>
          <th className="table__head-coloumn">Destination</th>
          <th className="table__head-coloumn">Status</th>
          <th className="table__head-coloumn">Airline</th>
          <th className="table__head-coloumn">Flight</th>
        </tr>
      </thead>
      <tbody className="table__body">
        {filteredFlightList.map((flight) => (
          <TableRow
            key={flight.id}
            tableName={filterName}
            flightData={flight}
          />
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  flightList: PropTypes.arrayOf(PropTypes.shape()),
};

export default Table;
