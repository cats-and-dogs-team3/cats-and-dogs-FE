import react from "react";
import styled from "styled-components";
import RankingBox from "./RankingBox";
function Ranking() {
  return (
    <StyledRanking>
      <RankingBox></RankingBox>
      <RankingBox></RankingBox>
    </StyledRanking>
  );
}
export default Ranking;

const StyledRanking = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 15px;
  display: flex;
  gap: 100px;
  justify-content: center;
`;
