import myAxios from "./myAxios";

export const $getPost = async (postId) => {
  try {
    const data = await myAxios.get(`/post/${postId}`);
    return data;
  } catch (error) {
    console.log(error);
    //   useSweet(1000, "error", error.response.data.msg);
  }
};
