export const filterFlightList = (flightList, filterText, filterName) => {
  return filterName === 'departures'
    ? filterDepartures(flightList, filterText)
    : filterArrivals(flightList, filterText);
};

const filterDepartures = (flightList, filterText) => {
  const copyFilterText = filterText.toLowerCase();

  const filteredFlightList = flightList.filter((flight) => {
    if (flight['airportToID.city_en'].toLowerCase() === copyFilterText) {
      return true;
    }

    if (flight.airline.en.name.toLowerCase() === copyFilterText) {
      return true;
    }

    if (flight.fltNo.toLowerCase() === copyFilterText) {
      return true;
    }

    return false;
  });

  return filteredFlightList;
};

const filterArrivals = (flightList, filterText) => {
  const copyFilterText = filterText.toLowerCase();

  const filteredFlightList = flightList.filter((flight) => {
    if (flight['airportFromID.city_en'].toLowerCase() === copyFilterText) {
      return true;
    }

    if (flight.airline.en.name.toLowerCase() === copyFilterText) {
      return true;
    }

    if (flight.fltNo.toLowerCase() === copyFilterText) {
      return true;
    }

    return false;
  });

  return filteredFlightList;
};
