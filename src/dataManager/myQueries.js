import myAxios from "./myAxios";

export const $signUp = async (form) => {
  return await myAxios.post(`/user/signup`, form);
};
export const $login = async (form) => {
  return await myAxios.post(`/user/login`, form);
};

export const $deletePost = async (form) => {
  const data = await myAxios.post(`/post/${form.postId}`, form);
  return data;
};
export const $removeToken = () => {
  localStorage.removeItem("jwt");
};
export const $getToken = () => {
  return localStorage.getItem("jwt");
};
