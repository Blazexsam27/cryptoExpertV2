import { unixTimeStampToDate } from "./dateTimeConvertor";

// gecko api return most of data in given format [UNIX timestamp, actual data],

const seperateTimeAndData = (data) => {
  const timeList = data.map(([time, _]) => unixTimeStampToDate(time));
  const dataList = data.map(([_, data]) => data);
  return [timeList, dataList];
};

const scatterPlotDataMapper = (price, volume) => {
  return price.map((item, index) => {
    return [item, volume[index]];
  });
};

export { seperateTimeAndData, scatterPlotDataMapper };
