import React, { useState } from "react";
import Card from "../ui/Card";
import Stack from "../ui/Stack";
import MyButton from "../ui/MyButton";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __addComment, __typeComment } from "../../redux/modules/postSlice";
import { NickName } from "./Comment";

const CommentForm = ({ postId }) => {
  const nickname = useSelector((state) => state.nickname.nickname);

  const commentState = useSelector((state) => state.post.comment);
  console.log("commentform", commentState);
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    dispatch(__typeComment(e.target.value));
  };
  const onSubmitHandler = () => {
    dispatch(
      __addComment({ postId: postId, comment: { content: commentState } })
    );
  };
  return (
    <Div>
      <Card
        shadow={"0 2px 10px rgba(0, 0, 0, 0.15)"}
        borderColor={"var(--color-point3)"}
        pd={"1rem 2rem"}
        gap={"1rem"}
        wd="31rem"
        direction={"column"}
      >
        <Stack align={"flex-start"} direction={"column"}>
          <NickName className="userName">{nickname}</NickName>
          <StContainer>
            <textarea
              rows={3}
              placeholder={"댓글 입력"}
              value={commentState}
              onChange={onChangeHandler}
            />
          </StContainer>
        </Stack>
        <Stack direction={"row"} justify="flex-end">
          <MyButton
            onClick={onSubmitHandler}
            border="none"
            shadow={"0 2px 4px rgba(0, 0, 0, 0.3)"}
          >
            작성
          </MyButton>
        </Stack>
      </Card>
    </Div>
  );
};

export default CommentForm;
const Div = styled.div`
  margin-top: 1rem;
  .userName {
    font-size: 2.2rem;
    font-weight: 700;
  }
`;

const StContainer = styled.div`
  width: 100%;
  textarea {
    color: var(--color-point3);
    width: 100%;
    border: none;
    font-size: 1.5rem;
    resize: none;
    margin-top: 0.3rem;
    &:focus {
      outline: none;
    }
    &::placeholder {
      /* color: var(--color-point3); */
    }
  }
`;
