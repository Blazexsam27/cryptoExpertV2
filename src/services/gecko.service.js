import axios from "axios";
import { seperateTimeAndData } from "../utils/geckoDataExtractor";
import localStorageUtils from "../utils/localStorageUtils";

// ethereum, matic-network, bitcoin, ripple, solana, polkadot

// api service for crypto related data using COIN GECKO API
class GeckoService {
  baseUrl = import.meta.env.VITE_BASE_GECKO_URL;

  getCryptoData = async (
    coinId = "bitcoin",
    currency = "usd",
    days = 30,
    interval = "daily"
  ) => {
    try {
      let url = `${this.baseUrl}/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`;
      if (interval === "hourly") {
        url = `${this.baseUrl}/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`;
      }
      const response = await axios.get(url);
      const dataObj = response.data;
      dataObj.prices = seperateTimeAndData(dataObj.prices);
      dataObj.market_caps = seperateTimeAndData(dataObj.market_caps);
      dataObj.total_volumes = seperateTimeAndData(dataObj.total_volumes);
      return dataObj;
    } catch (error) {
      throw new Error(error);
    }
  };

  getTrendingCoins = async () => {
    try {
      const response = await axios.get(`${this.baseUrl}/search/trending`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  getBitcoinPrice = async () => {
    try {
      const response = await axios.get(
        `${this.baseUrl}/simple/price?ids=bitcoin&vs_currencies=usd`
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  getCurrentDayVolume = async (coinId = "bitcoin") => {
    try {
      const result = localStorageUtils.getDataWithExpiry(coinId);
      if (result) return parseInt(result);
      const response = await axios.get(
        `${this.baseUrl}/coins/${coinId}/market_chart?vs_currency=usd&days=1&interval=daily`
      );
      const exp = 24 * 60 * 60 * 1000;
      localStorageUtils.setDataWithExpiry(
        coinId,
        response.data.total_volumes[1][1].toFixed(2),
        exp
      );
      return response.data.total_volumes[1][1].toFixed(2);
    } catch (error) {
      throw new Error(error);
    }
  };

  getGivenCryptoListData = async (cryptoIdList) => {
    try {
      const response = await axios.get(
        `${this.baseUrl}/coins/markets?vs_currency=usd&ids=${cryptoIdList[0]}%2C%20${cryptoIdList[1]}%2C%20${cryptoIdList[2]}%2C%20${cryptoIdList[3]}%2C%20${cryptoIdList[4]}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  // trending crypto have price in terms of btc which needs to be converted to usd.
  convertBtcPriceToUsd = async (value) => {
    try {
      const btcPrice = await this.getBitcoinPrice();
      return btcPrice * value;
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default new GeckoService();
