// Accepts [number]
const getStandardDeviation = (data) => {
  const mean = getMeanValue(data);
  let totalDiffs = 0;
  for (let item of data) {
    if (item !== null || item !== undefined || item !== NaN) {
      totalDiffs += Math.pow(item - mean, 2);
    }
  }
  return Math.sqrt(totalDiffs / data.length).toFixed(4);
};

// Accepts [number]
const getMeanValue = (data) => {
  let total = 0;
  for (let item of data) {
    if (item !== null || item !== undefined || item !== NaN) {
      total += item;
    }
  }
  return (total / data.length).toFixed(4);
};

export { getStandardDeviation, getMeanValue };
