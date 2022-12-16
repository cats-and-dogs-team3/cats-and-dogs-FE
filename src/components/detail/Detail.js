import React from "react";
import styled from "styled-components";
import Card, { StCard } from "../ui/Card";
import Stack from "../ui/Stack";
import Comments from "./Comments";
import Post from "./Post";
const Detail = () => {
  return (
    
    <Stack mg="7rem 0" direction="column">
      <Card wd="110rem">
        <StGrid>
          <Post />
          <Comments />
        </StGrid>
      </Card>
    </Stack>
  );
};

export default Detail;

const StGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.7fr 1fr;
`;
