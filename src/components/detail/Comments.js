import React from "react";
import styled from "styled-components";
import Stack from "../ui/Stack";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";
import { $getToken } from "../../dataManager/myQueries";
const Comments = ({ postId }) => {
  const { commentList, isLoading, error } = useSelector(
    (state) => state.post.commentChunk
  );
  // if(isLoading) return
  // if(error) return
  return (
    //comments section
    <Stack
      gap={"2rem"}
      justify={"flex-start"}
      pd={"2rem 0"}
      direction={"column"}
    >
      {/* comments container*/}
      <StContainer scrollable={commentList.length>0} gap="1rem" justify="flex-start" direction={"column"}>
        {commentList.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </StContainer>
      {$getToken() ? <CommentForm postId={postId} /> : null}
    </Stack>
  );
};

export default Comments;
const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  max-height: 45rem;
  padding: 2rem;
  overflow-y: ${({scrollable})=> scrollable ? 'scroll' : 'none' };
  flex: 1;
`;
