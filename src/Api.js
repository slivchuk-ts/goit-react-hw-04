import axios from "axios";


// const API_KEY = 'A7_SPyf2cUQafSsqiqOKRsuJ_n7jkyCpUMMkUqjIT7g';
// const BASE_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query, page = 0, ) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      query: query,
      page: page,
      per_page: 9,
      client_id: "zZL_BEUI-CuVCBOx4CeaaPewaRRig9MUB2PbnlBKFxk",
    },
  });
  return response.data;
};