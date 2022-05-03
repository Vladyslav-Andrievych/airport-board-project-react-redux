import { FLIGHT_LIST_RECIEVED } from './board.actions.js';

const initialState = {
  flightList: null,
};

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHT_LIST_RECIEVED:
      return {
        ...state,
        flightList: action.payload.flightList,
      };
    default:
      return state;
  }
};
