import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.100.10:8000",
  //baseURL: "http://127.0.0.1:8000",
});

export default instance;
