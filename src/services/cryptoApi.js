const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-9d6d6yArTACYX91VXxHLCRDv";

const getCoinList = (page) => {
  return `${BASE_URL}/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&order=market_cap_desc&per_page=20&page=${page}&locale=en&x-cg-demo-api-key=${API_KEY}`;
};

export { getCoinList };
