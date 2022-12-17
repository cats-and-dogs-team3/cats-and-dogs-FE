import react, { useState } from "react";
import styled from "styled-components";

function Like() {
  const [like, setLike] = useState(0);
  return (
    <StyledLike>
      <div
        className="icon"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ♥
      </div>
      <div className="likeCount">{like}</div>
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
