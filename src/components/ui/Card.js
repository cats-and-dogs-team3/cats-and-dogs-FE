import React from "react";
import styled, { css } from "styled-components";
const Card = ({
  children,
  wd,
  hg,
  pd,
  borderColor,
  direction,
  flex,
  gap,
  wrap,
  shadow,justify,align
}) => {
  return (
    <StCard
      wd={wd}
      hg={hg}
      justify={justify}
      align={align}
      flex={flex}
      borderColor={borderColor}
      direction={direction}
      pd={pd}
      gap={gap}
      wrap={wrap}
      shadow={shadow}
    >
      {children}
    </StCard>
  );
};

export default Card;

export const StCard = styled.div`
  box-shadow: ${({ shadow }) => shadow || "0px 2px 10px rgba(0, 0, 0, 0.26)"};
  flex-wrap: ${({ wrap }) => wrap || "none"};
  display: flex;
  border: 1px solid
    ${({ borderColor }) => borderColor || css`var(--color-point3)`};
  width: ${({ wd }) => wd || "none"};
  height: ${({ hg }) => hg || "none"};
  padding: ${({ pd }) => pd || "none"};
  gap: ${({ gap }) => gap || "none"};

  /* flex: ${({ flex }) => flex || "0"}; */
  border-radius: 2rem;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  flex-direction: ${({ direction }) => direction || "row"}; ;
`;
