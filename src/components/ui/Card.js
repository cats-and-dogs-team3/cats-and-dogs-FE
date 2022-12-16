import React from "react";
import styled, { css } from "styled-components";
const Card = ({ children, wd, hg, borderColor, direction }) => {
  return (
    <StCard wd={wd} hg={hg} borderColor={borderColor} direction={direction}>
      {children}
    </StCard>
  );
};

export default Card;

const StCard = styled.div`
  flex-wrap: wrap;
  display: flex;
  border: 1px solid
    ${({ borderColor }) => borderColor || 'none'};
  width: ${({ wd }) => wd || "32rem"};
  height: ${({ hg }) => hg || "5rem"};
  border-radius: 3rem;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ direction }) => direction || "5rem"}; ;
`;
