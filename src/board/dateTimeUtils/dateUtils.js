const formatter = new Intl.DateTimeFormat('ua', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

export const dateToString = (date) => {
  const dateString = formatter.format(date);

  return dateString.split('.').join('-');
};
