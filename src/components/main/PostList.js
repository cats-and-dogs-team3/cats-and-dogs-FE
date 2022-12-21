import styled from "styled-components";
import PostBox from "./PostBox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { __getPosts } from "../../redux/modules/mainSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function PostList() {
  const dispatch = useDispatch();
  const { error, isLoading, post: postList } = useSelector((state) => state.main); // 리듀서 명의
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);
  return (
    <StyledPostList>  
      {postList &&
        postList.map((posts) => (
          <PostBox
            key={posts.id}
            offer={posts}
          />
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
