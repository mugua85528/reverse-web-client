import axios from "axios";
const API_URL = "https://sideproject-reverseweb.onrender.com/api/shop/";

class ShopService {
  getShopData() {
    return axios.get(API_URL);
  }

  settingShop(shopName, startTime, endTime) {
    return axios.post(API_URL + "setting", { shopName, startTime, endTime });
  }
}

export default new ShopService();
