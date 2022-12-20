import axios from "axios";
import { serverUrl } from "./apiConfig";

const myAxios = axios.create({ baseURL: serverUrl });
myAxios.interceptors.request.use((config) => {
  console.log(config,'request config');
  // if (config === undefined) return;
  const token = localStorage.getItem("jwt");
  console.log('token',token)
  config.headers['Access-Control-Allow-Origin'] = '*'
  config.headers["Authorization"] = token;
  return config;
});
// myAxios.interceptors.response.use((response) =>
//   console.log("AXIOS RESPONSE TERCEPTOR RESPONSE : ", response.headers)
// );
export default myAxios;
