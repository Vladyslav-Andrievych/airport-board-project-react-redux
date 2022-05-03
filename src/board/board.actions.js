import { fetchFlightList } from './board.gateway.js';
import { dateToString } from './dateTimeUtils/dateUtils.js';

export const FLIGHT_LIST_RECIEVED = 'BOARD/FLIGHT_LIST_RECIEVED';

export const flightListRecieved = (flightList) => ({
  type: FLIGHT_LIST_RECIEVED,
  payload: {
    flightList,
  },
});

export const getFlightList = () => {
  return function (dispatch) {
    const today = dateToString(new Date());

    fetchFlightList(today)
      .then((flightListResponse) =>
        dispatch(flightListRecieved(flightListResponse.body))
      )
      .catch((error) => alert('Error! ' + error.message));
  };
};
