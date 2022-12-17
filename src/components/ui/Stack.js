import React from "react";
import styled from "styled-components";

const Stack = ({
  children,
  align,
  justify,
  direction,
  mg,
  pd,
  borderRight,
  gap,
  flexGrow,
  wd
}) => {
  return (
    <StContainer
      align={align}
      justify={justify}
      direction={direction}
      mg={mg}
      pd={pd}
      wd={wd}
      gap={gap}
      flexGrow={flexGrow}
      borderRight={borderRight}
    >
      {children}
    </StContainer>
  );
};

export default Stack;

const StContainer = styled.div`
  width: 100%;
  display: flex;
  width: ${({ wd }) => wd || "row"};
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  margin: ${({ mg }) => mg || "0"};
  padding: ${({ pd }) => pd || "0"};
  gap: ${({ gap }) => gap || "0"};
  flex-grow: ${({flexGrow})=> flexGrow || 'none'};
  border-right: ${({ borderRight }) => borderRight || "none"};
`;
