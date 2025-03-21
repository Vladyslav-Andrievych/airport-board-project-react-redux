import { createSelector } from 'reselect';

export const flightListSelector = (state) => state.board.flightList;

export const arrivalsFlightListSelector = createSelector(
  [flightListSelector],
  (flightList) => {
    if (flightList === null) {
      return null;
    }
    return flightList.filter(flight => flight.type === 'ARRIVAL');
  }
);

export const departuresFlightListSelector = createSelector(
  [flightListSelector],
  (flightList) => {
    if (flightList === null) {
      return null;
    }
    return flightList.filter(flight => flight.type === 'DEPARTURE');
  }
);
