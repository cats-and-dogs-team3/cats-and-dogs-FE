import React from "react";
import styled from "styled-components";
import Card, { StCard } from "../ui/Card";
import Stack from "../ui/Stack";
import Comments from "./Comments";
import Post from "./Post";
const Detail = () => {
  return (
    <Stack mg="7rem 0" direction="column">
      <MyCard wd="110rem">
        <StGrid>
          <Post />
          <Comments />
        </StGrid>
      </MyCard>
    </Stack>
  );
};

export default Detail;

const StGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.7fr 1fr;
  @media (max-width: 540px) {
    width: 100vw;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: none;
  }
`;
const MyCard = styled(StCard)`
  @media (max-width: 540px) {
    width: 100vw;
    border: none;
    padding: 3rem;
  }

`;
