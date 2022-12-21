import react from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function RankingBar() {
  const navigate = useNavigate();
  return (
    <StyledRankingBar>
      <h1> !! Today's pet !! </h1>
      <button
        onClick={() => {
          navigate("/upload");
        }}
      >
        New Post!
      </button>
    </StyledRankingBar>
  );
}
export default RankingBar;

const StyledRankingBar = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    text-align: center;
    font-size: 4.8rem;
  }
  button {
    width: fit-content;
    font-size: 2.4rem;
    height: fit-content;
    position: relative;
    right: -432px;
    bottom: -30px;
    border: none;
    background-color: var(--color-point3);
  }
  button :hover {
    background-color: var(--color-point1);
  }
`;
