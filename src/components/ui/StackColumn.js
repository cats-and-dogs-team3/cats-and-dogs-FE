import React from "react";
import styled from "styled-components";

const StackColumn = ({ children }) => {
  return <StStack>{children}</StStack>;
};

export default StackColumn;
const StStack = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
`;
