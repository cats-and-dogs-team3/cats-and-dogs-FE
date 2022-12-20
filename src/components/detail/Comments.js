import React from "react";
import styled from "styled-components";
import Stack from "../ui/Stack";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";
const Comments = () => {
  const comments = useSelector((state) => state.post.comments);
  return (
    //comments section
    <Stack
      gap={"2rem"}
      justify={"flex-start"}
      pd={"2rem 0"}
      direction={"column"}
    >
      {/* comments container*/}
      <StContainer gap="1rem" justify="flex-start" direction={"column"}>
        {comments.commentList.map((comment) => (
          <Comment comment={comment} />
        ))}
      </StContainer>
      <CommentForm postId={comments.postId} />
    </Stack>
  );
};

export default Comments;
const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  max-height: 50rem;
  padding: 2rem;
  overflow-y: scroll;
  flex: 1;
`;
