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
  wd,
  hg
}) => {
  return (
    <StStack
      align={align}
      justify={justify}
      direction={direction}
      mg={mg}
      pd={pd}
      wd={wd}
      hg={hg}
      gap={gap}
      flexGrow={flexGrow}
      borderRight={borderRight}
    >
      {children}
    </StStack>
  );
};

export default Stack;

export const StStack = styled.div`
  width: ${({wd})=> wd || '100%'};
  height: ${({hg})=> hg || 'none'};
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
