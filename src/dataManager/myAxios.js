import axios from "axios";
import { serverUrl } from "./apiConfig";

const myAxios = axios.create({ baseURL: serverUrl });

myAxios.interceptors.request.use((config) => {
  if (config === undefined) return;
  const token = localStorage.getItem("jwt");
  config.headers["Authorization"] = token;
  config.headers["Access-Control-Allow-Origin"] = "*";
  return config;
});
myAxios.interceptors.response.use((response) => {
  console.log("AXIOS RESPONSE TERCEPTOR RESPONSE : ", response);
  return response.data;
},(error)=>{
  console.log("AXIOS error interceptors : ",error)
  return error
});
export default myAxios;
