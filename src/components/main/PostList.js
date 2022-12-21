import styled from "styled-components";
import PostBox from "./PostBox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { __getPost } from "../../redux/modules/mainSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function PostList() {
  const dispatch = useDispatch();
  const { error, isLoading, post } = useSelector((state) => state.main); // 리듀서 명의
  console.log({ post });
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);
  return (
    <StyledPostList>  
      {post &&
        post.map((posts) => (
          <PostBox
            onClick={() => navigate(`/post/${posts.id}`)}
            key={posts.id}
            offer={posts}
          ></PostBox>
        ))}
    </StyledPostList>
  );
}
export default PostList;

const StyledPostList = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 30px;
  gap: 35px;
`;
