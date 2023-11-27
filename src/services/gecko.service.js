import axios from "axios";

// api service for crypto related data using COIN GECKO API
class GeckoService {
  baseUrl = import.meta.env.VITE_BASE_GECKO_URL;

  getCryptoData = async (coinId = "bitcoin", currency = "usd", days = 30) => {
    try {
      const response = await axios.get(
        `${this.baseUrl}/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}&interval=daily`
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };

  getTrendingCoins = async () => {
    try {
      const response = await axios.get(`${this.baseUrl}/search/trending`);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default new GeckoService();
