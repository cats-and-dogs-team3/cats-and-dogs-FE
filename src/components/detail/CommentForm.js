import React from "react";
import Card from "../ui/Card";
import Stack from "../ui/Stack";
import MyButton from "../ui/MyButton";
import styled from "styled-components";

const CommentForm = () => {
  const user = { userName: "mcho" };
  return (
    <Div>
      <Card
        shadow={"0 2px 10px rgba(0, 0, 0, 0.15)"}
        borderColor={"var(--color-point3)"}
        pd={"1rem 2rem"}
        gap={"1rem"}
        wd="30rem"
        direction={"column"}
      >
        <Stack align={"flex-start"} direction={"column"}>
          <span className="userName">{user.userName}</span>
          <StContainer>
            <textarea rows={3} placeholder={"댓글 입력"} />
          </StContainer>
        </Stack>
        <Stack direction={"row"} justify="flex-end">
          <MyButton border="none" shadow={"0 2px 4px rgba(0, 0, 0, 0.3)"}>
            작성
          </MyButton>
        </Stack>
      </Card>
    </Div>
  );
};

export default CommentForm;
const Div = styled.div`
  margin-top: 3rem;
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
    &:focus {
      outline: none;
    }
    &::placeholder {
      /* color: var(--color-point3); */
    }
  }
`;
