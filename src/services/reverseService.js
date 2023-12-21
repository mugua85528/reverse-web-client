import axios from "axios";
const API_URL = "https://sideprojectreverseweb.onrender.com/api/";

class ReverseService {
  getReversed() {
    return axios.get(API_URL);
  }
  searchReverse(phoneNumber) {
    return axios.get(API_URL + "/search/" + phoneNumber);
  }

  reverse(
    year,
    month,
    date,
    day,
    time,
    ms,
    service,
    name,
    phone,
    gender,
    email,
    textarea,
    terms
  ) {
    console.log(
      year,
      month,
      date,
      day,
      time,
      ms,
      service,
      name,
      phone,
      gender,
      email,
      textarea,
      terms
    );
    return axios.post(API_URL + "/reverse", {
      year,
      month,
      date,
      day,
      time,
      ms,
      service,
      name,
      phone,
      gender,
      email,
      textarea,
      terms,
    });
  }
}

export default new ReverseService();
