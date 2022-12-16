import React from "react";
import styled from "styled-components";

const Wrap = ({ children, pd, mg }) => {
  return (
    <StContainer pd={pd} mg={mg}>
      {children}
    </StContainer>
  );
};

export default Wrap;

const StContainer = styled.div`
  width: 100%;
  padding: ${({ pd }) => pd || "0.5rem"};
  margin: ${({ mg }) => mg};
`;
