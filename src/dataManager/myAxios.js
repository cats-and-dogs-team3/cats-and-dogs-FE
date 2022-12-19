import axios from "axios";
import { serverUrl } from "./apiConfig";

const myAxios = axios.create({ baseURL: serverUrl });
myAxios.interceptors.request.use((config) => {
  console.log(config);
  if (config === undefined) return;
  const token = localStorage.getItem("jwt");
  config.headers["Authorization"] = token;
  return config;
});
// myAxios.interceptors.response.use((response) =>
//   console.log("AXIOS RESPONSE TERCEPTOR RESPONSE : ", response)
// );
export default myAxios;
