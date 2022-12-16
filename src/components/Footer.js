import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding: 0.2rem;
  background-color: white;
`;

const Footer = () => {
  return (
    <Container>
      <div>© team cats-and-dogs</div>
    </Container>
  );
};

export default Footer;
