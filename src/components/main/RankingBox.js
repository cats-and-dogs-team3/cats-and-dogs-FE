import react, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getBestPost } from "../../redux/modules/bestSlice";
import uuid from "react-uuid";
import Like from "../main/Like";
function RankingBox(prop) {
  const dispatch = useDispatch();

  const { error, isLoading, best } = useSelector((state) => state.best);
  let src = "https://mytestbucketqq2.s3.ap-northeast-2.amazonaws.com/";
  console.log(best);

  useEffect(() => {
    dispatch(__getBestPost());
  }, [dispatch]);

  return (
    <StyledEmergencyWrapper>
      {best &&
        best.map((best) => (
          <StyledRankingBox Key={uuid}>
            <img src={(src + best.pictureName).toString}></img>
            <div>
              <div className="box_title">{best.title}</div>
              <div className="box_name">{best.nickname}</div>
              <div className="box_content">{best.content}</div>
              <Like likeCount={best.likeCount}></Like>
            </div>
          </StyledRankingBox>
        ))}
    </StyledEmergencyWrapper>
  );
}
export default RankingBox;

const StyledEmergencyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;
const StyledRankingBox = styled.div`
  width: 30%;
  height: 400px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 90%;
    height: 70%;

    background-size: contain;
  }
  .box_title {
    font-size: 2.4rem;
  }
`;
