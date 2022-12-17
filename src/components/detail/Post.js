import React from "react";
import styled from "styled-components";
import { threeCats } from "../../asset";
import { Img } from "../ui/Img";
import Sbutton from "../ui/Sbutton";
import Stack from "../ui/Stack";

const Post = () => {
  return (
    <Fragment>
      <Stack
        borderRight={"0.5px solid var(--color-point3)"}
        direction={"column"}
      >
        <Img style={{ margin: "3rem 0" }} src={threeCats} />
        <Stack
          gap="2rem"
          wd="53rem"
          mg="auto"
          align={"flex-start"}
          direction={"column"}
        >
          <h3>작성자 : 조무결</h3>
          <ContentContainer>
            <textarea>
              냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리
            </textarea>
          </ContentContainer>
          <Stack pd="0 2rem 2rem 0" justify={"flex-end"}>
            <Sbutton>수정</Sbutton>
            <Sbutton>삭제</Sbutton>
          </Stack>
        </Stack>
      </Stack>
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
  padding: 0.7rem 0.1rem 0.7rem 0.7rem;
  width: 100%;
  border: 0.25rem solid white;
  border-radius: 10px;
  textarea {
    color: var(--color-black);
    width: 100%;
    border: none;
    font-size: 1.5rem;
    font-weight: 600;
    resize: none;
    min-height: 12vh;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: var(--color-point1);
    }
  }
`;
