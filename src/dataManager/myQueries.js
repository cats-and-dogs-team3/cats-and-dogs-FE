import myAxios from "./myAxios";

export const $getPost = async (postId) => {
  try {
    const data = await myAxios.get(`/post/${postId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const $signUp = async (form) => {
  const { data } = await myAxios.post(`/user/signup`, form);
  return data;
};
export const $login = async (form) => {
  const { data } = await myAxios.post(`/user/login`, form);
  return data;
};
export const $likePost = async (postId) => {
  try {
    const data = await myAxios.post(`/like/post`, postId);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const $likeComment = async (commentId) => {
  try {
    const data = await myAxios.post(`/like/comment`, commentId);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const $createComment = async (form) => {
  try {
    const data = await myAxios.post(`/post/${form.postId}`, form);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const $logout = ()=>{
  localStorage.removeItem('jwt')
}
export const $getToken = ()=>{
  return localStorage.getItem('jwt')
}