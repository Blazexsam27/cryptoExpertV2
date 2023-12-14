// operations related to date/time

const unixTimeStampToDate = (timestamp = 1701097664) => {
  const milliseconds = timestamp * 1000;
  const date = new Date(milliseconds);

  // Get the year, month, and day
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-indexed, so add 1
  const day = date.getDate();

  // Construct the formatted date string (MM/DD/YYYY format)
  const formattedDate = `${month < 10 ? "0" : ""}${month}-${
    day < 10 ? "0" : ""
  }${day}-${year}`;
  return formattedDate;
};

const calculate30FutureDates = () => {
  let futureDates = [];
  let future = new Date();

  for (let i = 0; i < 30; i++) {
    future.setDate(future.getDate() + i);
    const formattedDate = formatDate(future);
    futureDates.push(formattedDate);
    future = new Date(future);
  }
};

const formatDate = (date) => {
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  return date.toLocaleDateString("en-GB", options);
};

export { unixTimeStampToDate, calculate30FutureDates, formatDate };
