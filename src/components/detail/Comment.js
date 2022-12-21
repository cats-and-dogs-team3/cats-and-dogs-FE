import React from "react";
import Card from "../ui/Card";
import Stack from "../ui/Stack";
import MyButton from "../ui/MyButton";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __deleteComment } from "../../redux/modules/postSlice";

const Comment = ({ comment }) => {
  const userNickname = useSelector((state) => state.post.userNickname);
  const postId = useSelector((state) => state.post.post.id);
  const dispatch = useDispatch();
  return (
    <Card
      shadow={"0 2px 10px rgba(0, 0, 0, 0.15)"}
      borderColor={"var(--color-point2)"}
      pd={"0.1rem 2rem "}
      gap={"1rem"}
      wd="30rem"
      direction={"column"}
    >
      <Stack align={"flex-start"} direction={"column"}>
        <NickName>{comment.nickname}</NickName>
        <ReplyTextArea value={comment.content} readOnly />
      </Stack>
      <Stack direction={"row"} justify="flex-end">
        {userNickname === comment.nickname ? (
          <MyButton
            onClick={() =>
              dispatch(
                __deleteComment({ postId: postId, commentId: comment.id })
              )
            }
            border="none"
            shadow={"0 2px 4px rgba(0, 0, 0, 0.3)"}
          >
            삭제
          </MyButton>
        ) : null}
      </Stack>
    </Card>
  );
};

export default Comment;

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
