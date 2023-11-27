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

export { unixTimeStampToDate };
