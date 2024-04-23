import axios from "axios";

const api = axios.create({
  // baseURL: "https://scary-ox-capris.cyclic.app/api"
  // baseURL: "http://localhost:3000/api"
  // baseURL: "https://bijnor.constructify.in/api"
  baseURL: "https://constructify.in/api"
});

export default api;