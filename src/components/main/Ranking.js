import react from "react";
import styled from "styled-components";
import RankingBox from "./RankingBox";
function Ranking() {
  return (
    <StyledRanking>
      <RankingBox/>
    </StyledRanking>
  );
}
export default Ranking;

const StyledRanking = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 1.5rem;
  display: flex;
  gap: 100px;
  justify-content: center;
  flex-direction: column;
`;
