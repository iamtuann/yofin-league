import axios from "axios";
import router from "../router";

let baseUrl = import.meta.env.VITE_API_URL;
let headers = {
  "Content-Type": "application/json",
  Accept: "*/*",
};
const instance = axios.create({
  baseURL: baseUrl,
  headers: headers,
});

instance.interceptors.request.use((config) => {
  config.headers['Access-Control-Allow-Origin'] = '*';
  return config;
});


instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log(error)
  }
);

export default instance;