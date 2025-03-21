import React from 'react';
import { timeFormatter } from '../../utils/index.js';

export const generateTableRowInfo = (flightData, tableName) => {
  const terminal = (
    <span className="terminal-identifier">{flightData.terminal}</span>
  );

  const localTime =
    tableName === 'departures'
      ? timeFormatter.format(new Date(flightData.departureDateExpected))
      : timeFormatter.format(new Date(flightData.arrivalDateExpected));

  const destination =
    tableName === 'departures'
      ? flightData.departureCity
      : flightData.arrivalCity;

  let status = flightData.status;
  if (tableName === 'departures') {
    status += flightData.departureDate ? ` ${timeFormatter.format(new Date(flightData.departureDate))}` : '' 
  } else {
    status += flightData.arrivalDate ? ` ${timeFormatter.format(new Date(flightData.arrivalDate))}` : ''
  }

  const airline = (
    <div className="logo">
      <img
        src={flightData.airlineLogo}
        alt="logo"
        className="logo__img"
      />
      <span className="logo__text">{flightData.airlineName}</span>
    </div>
  );

  const flight = flightData.codeShare;

  return {
    terminal,
    localTime,
    destination,
    status,
    airline,
    flight,
  };
};
