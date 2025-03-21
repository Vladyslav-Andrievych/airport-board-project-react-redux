export const filterFlightList = (flightList, filterText, filterName) => {
  return filterName === 'departures'
    ? filterDepartures(flightList, filterText)
    : filterArrivals(flightList, filterText);
};

const filterDepartures = (flightList, filterText) => {
  const copyFilterText = filterText.toLowerCase();

  const filteredFlightList = flightList.filter((flight) => {
    if (typeof flight.departureCity === 'string' && flight.departureCity.toLowerCase() === copyFilterText) {
      return true;
    }

    if (typeof flight.airlineName === 'string' && flight.airlineName.toLowerCase() === copyFilterText) {
      return true;
    }

    if (typeof flight.codeShare === 'string' && flight.codeShare.toLowerCase() === copyFilterText) {
      return true;
    }

    return false;
  });

  return filteredFlightList;
};

const filterArrivals = (flightList, filterText) => {
  const copyFilterText = filterText.toLowerCase();

  const filteredFlightList = flightList.filter((flight) => {
    if (typeof flight.arrivalCity === 'string' && flight.arrivalCity.toLowerCase() === copyFilterText) {
      return true;
    }

    if (typeof flight.airlineName === 'string' && flight.airlineName.toLowerCase() === copyFilterText) {
      return true;
    }

    if (typeof flight.codeShare === 'string' && flight.codeShare.toLowerCase() === copyFilterText) {
      return true;
    }

    return false;
  });

  return filteredFlightList;
};
