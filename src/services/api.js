import axios from "axios";

const api = axios.create({
  baseURL: "https://back-end-stack.herokuapp.com"
});

export default api;
