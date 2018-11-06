export const formatDate = inputDate => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const dateArr = inputDate.split('-');
  let day = dateArr[dateArr.length - 1];
  if (day < 10) day = day.slice(1);
  const month = months[dateArr[1] - 1];
  const year = dateArr[0];
  const formatted = `${month} ${day}, ${year}`;
  return formatted;
};

formatDate('2018-11-06');
