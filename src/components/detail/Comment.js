import React from "react";
import MyButton from "../ui/MyButton";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __deleteComment } from "../../redux/modules/postSlice";
import StackRow from "../ui/StackRow";

const Comment = ({ comment }) => {
  const nickname = useSelector((state) => state.nickname.nickname);
  const postId = useSelector((state) => state.post.post.id);
  const dispatch = useDispatch();
  return (
    <StCard>
      <CustomStack>
        <StackRow>
          <NickName>{comment.nickname}</NickName>
        </StackRow>
        <ReplyTextArea value={comment.content} readOnly />
      </CustomStack>
      {nickname === comment.nickname ? (
        <MyButton
          fontSize="1.2rem"
          onClick={() =>
            dispatch(__deleteComment({ postId: postId, commentId: comment.id }))
          }
          border="none"
          shadow={"0 2px 4px rgba(0, 0, 0, 0.3)"}
        >
          삭제
        </MyButton>
      ) : null}
    </StCard>
  );
};

export default Comment;

const CustomStack = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: auto;
`;

export const StCard = styled.div`
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  border: 1px solid var(--color-point2);
  width: 30rem;
  padding: 0.1rem 2rem;
  gap: 1rem;
  border-radius: 2rem;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const ReplyTextArea = styled.textarea`
  color: var(--color-point3);
  width: 100%;
  border: none;
  font-size: 1.5rem;
  resize: none;
  margin-top: 1rem;
  &:focus {
    outline: none;
  }
  &::placeholder {
    /* color: var(--color-point3); */
  }
`;

export const NickName = styled.span`
  font-size: 1.8rem;
  margin-top: 0.3rem;
`;
