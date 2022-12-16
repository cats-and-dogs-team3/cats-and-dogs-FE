import React from "react";
import styled from "styled-components";

const Stack = ({ children, align, justify, direction, mg, pd,gap }) => {
  return (
    <StContainer
      align={align}
      justify={justify}
      direction={direction}
      mg={mg}
      pd={pd}
      gap={gap}
    >
      {children}
    </StContainer>
  );
};

export default Stack;

const StContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  margin: ${({ mg }) => mg || "0"};
  padding: ${({ pd }) => pd || "0"};
  gap: ${({ gap }) => gap || "0"};
`;
