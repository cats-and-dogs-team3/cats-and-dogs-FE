import react from "react";
import styled from "styled-components";
import PostBox from "./PostBox";
function PostList() {
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
