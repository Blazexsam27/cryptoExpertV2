import axios from "axios";
import localStorageUtils from "../utils/localStorageUtils";

// api for news related data
class News {
  baseUrl = import.meta.env.VITE_BASE_API_URL;

  getNewsFromCache = async () => {
    try {
      const result = localStorageUtils.getDataWithExpiry("newsData");
      if (result) return result;
      return this.getNewsDataFromAPI();
    } catch (error) {
      throw new Error(error);
    }
  };

  getNewsDataFromAPI = async () => {
    try {
      const response = await axios.get(
        `${this.baseUrl}/data/v2/news/?lang=EN&api_key=${this.apiKey}`
      );
      const exp = 24 * 60 * 60 * 1000;
      localStorageUtils.setDataWithExpiry("newsData", response.data.Data, exp);
      return localStorageUtils.getDataWithExpiry("newsData");
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default new News();
