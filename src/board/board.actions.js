import { fetchFlightList } from './board.gateway.js';

export const FLIGHT_LIST_RECIEVED = 'BOARD/FLIGHT_LIST_RECIEVED';

export const flightListRecieved = (flightList) => ({
  type: FLIGHT_LIST_RECIEVED,
  payload: {
    flightList,
  },
});

export const getFlightList = () => {
  return function (dispatch) {
    fetchFlightList()
      .then((flightListResponse) => dispatch(flightListRecieved(flightListResponse)))
      .catch((error) => alert('Error! ' + error.message));
  };
};
