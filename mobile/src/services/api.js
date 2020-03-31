import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.20.171:3333"
});

export default api;