import React from "react";
import styled from "styled-components";
import { threeCats } from "../../asset";
import { Img } from "../ui/Img";
import MyButton from "../ui/MyButton";
import Stack, { StStack } from "../ui/Stack";

const Post = () => {
  return (
    <Fragment>
      <MyStack>
        <Img style={{ margin: "3rem 0" }} src={threeCats} />
        <Stack
          gap="2rem"
          wd="53rem"
          mg="auto"
          align={"flex-start"}
          direction={"column"}
        >
          <Stack justify={"space-between"} pd={"0.5rem"} gap={"3rem"}>
            <Stack gap={"3rem"} wd={"none"}>
              <h3>작성자 : 조무결</h3>
              <span>❤️</span>
            </Stack>
            <span>2022-02-02</span>
          </Stack>
          <ContentContainer>
            <textarea>
              냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리
            </textarea>
          </ContentContainer>
          <Stack pd="0 2rem 2rem 0" justify={"flex-end"}>
            <MyButton>게시물 수정</MyButton>
            <MyButton>게시물 삭제</MyButton>
          </Stack>
        </Stack>
      </MyStack>
    </Fragment>
  );
};

export default Post;
const Fragment = styled.div`
  h3 {
    font-weight: 900;
    font-size: 2rem;
  }
`;
const ContentContainer = styled.div`
  /* padding: 0.7rem 0.1rem 0.7rem 0.7rem; */
  width: 100%;
  /* border: 0.25rem solid white; */
  border-radius: 10px;
  textarea {
    color: var(--color-black);
    width: 100%;
    border: none;
    font-size: 1.5rem;
    font-weight: 600;
    resize: none;
    min-height: 17rem;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: var(--color-point1);
    }
  }
`;
const MyStack = styled(StStack)`
        border-right : 0.5px solid var(--color-point3);
        flex-direction: column;
  @media (max-width: 540px) {
    border-right: none;
  }
`;
