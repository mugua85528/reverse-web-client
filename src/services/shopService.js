import axios from "axios";
const API_URL = "https://sideprojectreverseweb.onrender.com/api/shop/";
// const API_URL = "http://127.0.0.1:8080/api/shop/";

class ShopService {
  getShopData() {
    return axios.get(API_URL);
  }
}

export default new ShopService();
