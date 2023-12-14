import geckoService from "./gecko.service";
import localStorageUtils from "../utils/localStorageUtils";
import axios from "axios";

class LSTMService {
  // utility function to preprocess price data
  preprocessPriceData = (data) => {
    let result = [];
    for (let item of data) result.push([item]);
    return result;
  };

  getBitcoin30DaysPredictions = async (data) => {
    let bitcoinPricesData;
    try {
      // get bitcoin data and store it in localstorage if current data is expired
      if (!localStorageUtils.getDataWithExpiry("bitcoin_price_data")) {
        bitcoinPricesData = await geckoService.getCryptoData(
          "bitcoin",
          "usd",
          30,
          "hourly"
        );
        const exp = 24 * 60 * 60 * 1000;
        localStorageUtils.setDataWithExpiry(
          "bitcoin_price_data",
          bitcoinPricesData.prices[1],
          exp
        );
      } else {
        bitcoinPricesData =
          localStorageUtils.getDataWithExpiry("bitcoin_price_data");
      }
      // once the price data is retrieved, preprocess it
      const preprocessedPricesData =
        this.preprocessPriceData(bitcoinPricesData);
      const result = await axios.post(
        `${import.meta.env.VITE_PYTHON_ENGINE_URL}/predict_crypto_price`,
        {
          input_data: preprocessedPricesData.slice(
            preprocessedPricesData.length - 101,
            preprocessedPricesData.length
          ),
        },
        {
          "Content-Type": "application/json",
        }
      );
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default new LSTMService();
