import React from 'react';
import { timeFormatter } from '../../dateTimeUtils/timeUtils.js';

// add new status names
const flightStatuses = {
  DP: 'Departed',
  LN: 'Landed',
  CX: 'Cancel',
};

export const generateTableRowInfo = (flightData, tableName) => {
  const terminal = (
    <span className="terminal-identifier">{flightData.term}</span>
  );

  const localTime =
    tableName === 'departures'
      ? timeFormatter.format(new Date(flightData.timeDepShedule))
      : timeFormatter.format(new Date(flightData.timeArrShedule));

  const destination =
    tableName === 'departures'
      ? flightData['airportToID.city_en']
      : flightData['airportFromID.city_en'];

  let status = flightStatuses[flightData.status];
  if (status !== 'Cancel') {
    status +=
      ' ' +
      timeFormatter.format(
        new Date(
          tableName === 'departures'
            ? flightData.timeDepFact
            : flightData.timeTakeofFact
        )
      );
  }

  const airline = (
    <div className="logo">
      <img
        src={flightData.airline.en.logoSmallName}
        alt="logo"
        className="logo__img"
      />
      <span className="logo__text">{flightData.airline.en.name}</span>
    </div>
  );

  const flight = flightData.fltNo;

  return {
    terminal,
    localTime,
    destination,
    status,
    airline,
    flight,
  };
};
