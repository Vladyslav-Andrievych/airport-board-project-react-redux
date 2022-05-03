const baseUrl = 'https://api.iev.aero/api/flights';

export const fetchFlightList = (dateString = '10-02-2020') => {
  return fetch(`${baseUrl}/${dateString}`).then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error('Failed to fetch flight list');
  });
};
