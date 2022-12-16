import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <MainTitle
        onClick={() => {
          navigate("/");
        }}
      >
        개냥의 전당
      </MainTitle>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: var(--color-point1);
  padding: 3rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

const MainTitle = styled.div`
  color: var(--color-point4);
  font-size: 2.4rem;
  font-weight: 900;
  cursor: pointer;
`;
