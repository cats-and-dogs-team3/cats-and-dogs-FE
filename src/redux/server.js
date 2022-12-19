import axios from "axios";

export const instance = axios.create({
  // baseURL: "http://43.200.163.0:8080/",
  baseURL: "http://localhost:3001/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

//? headers? ACAO?

//인스턴스 reqyest header
// 백엔드 보낼떄 토큰값을 보낼수 있음 인터셉터 라는 것은 나중에 일단은 뭔가를 중간에 가로채서
// 넣어주는것 ?

//CORS 서로 다른 출처의 리소스는 사용할수 없음 완하시키는 정책이 CORS 정책
//CORS정책을 사용해야 리소스를 받을수 있음
// 예비요청/ 본요청을 나눔
// 프론트 쪽에서 예삐요청 -> 본요청
// 헤더에 담아서 요청?
instance.interceptors.request.use((config) => {
  if (config.headers === undefined) return;

  const token = localStorage.getItem("id");
  config.headers["Authorization"] = `${token}`;
  return config;
});

export default instance;
