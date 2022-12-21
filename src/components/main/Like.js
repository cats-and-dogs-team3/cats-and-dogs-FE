import react, { useState } from "react";
import styled from "styled-components";

function Like(prop) {
  return (
    <StyledLike>
      <div className="icon">♥</div>
      <div className="likeCount">{prop.likeCount}</div>
    </StyledLike>
  );
}
export default Like;
const StyledLike = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
`;
