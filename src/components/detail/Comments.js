import React from "react";
import styled from "styled-components";
import Stack from "../ui/Stack";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
const Comments = () => {
  const commentArr = [
    { userName: "test", comment: "comment" },
    { userName: "test", comment: "comment" },
    { userName: "test", comment: "comment" },
    { userName: "test", comment: "comment" },
    { userName: "test", comment: "comment" },
    { userName: "test", comment: "comment" },
    { userName: "test", comment: "comment" },
    { userName: "test", comment: "comment" },
  ];
  return (
    //comments section
    <Stack gap={'2rem'} justify={"flex-start"} pd={"2rem 0"} direction={"column"}>
      {/* comments container*/}
      <StContainer gap="1rem" justify="flex-start" direction={"column"}>
        {commentArr.map((comment) => (
          <Comment comment={comment} />
        ))}
      </StContainer>
      {/* commentForm */}
      <CommentForm />
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
  overflow-y: scroll;
`;

