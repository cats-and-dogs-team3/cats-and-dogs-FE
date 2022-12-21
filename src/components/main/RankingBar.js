import react from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MyButton from "../ui/MyButton";

function RankingBar() {
  const navigate = useNavigate();
  return (
    <StyledRankingBar>
      <h1> !! Today's pet !! </h1>
      <MyButton
        onClick={() => {
          navigate("/upload");
        }}
      >
        새 글 쓰기!
      </MyButton>
    </StyledRankingBar>
  );
}
export default RankingBar;

const StyledRankingBar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  h1 {
    text-align: center;
    font-size: 4.8rem;
  }
  button {
    width: fit-content;
    font-size: 2.4rem;
    height: fit-content;
    position: relative;
    right: -230px;
    bottom: -10px;
  }
  button :hover {
    background-color: var(--color-point1);
  }
`;
