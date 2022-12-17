import react from "react";
import styled from "styled-components";
import PostBox from "./PostBox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { __getPost } from "../../redux/modules/postSlice";
import { useEffect } from "react";
function PostList() {
  const dispatch = useDispatch();

  dispatch(__getPost);
  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);
  return (
    <StyledPostList>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
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
