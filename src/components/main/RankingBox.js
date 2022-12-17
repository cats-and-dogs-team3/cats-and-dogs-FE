import react from "react";
import styled from "styled-components";

function RankingBox(prop) {
  return (
    <StyledRankingBox>
      <image src="https://openimage.interpark.com/goods_image_big/9/1/2/7/8815609127_l.jpg"></image>
      <div className="box_title">Initial Title</div>
      <div className="box_content">Lorem Ipsum ~님의 게시글입니다.</div>
    </StyledRankingBox>
  );
}
export default RankingBox;

const StyledRankingBox = styled.div`
  width: 30%;
  height: 400px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  image {
    width: 90%;
    height: 70%;
    background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz4Jf0QXyGTu6YLz32Wkl2JqqnYz2J3lHy9Q&usqp=CAU");
    background-size: contain;
  }
  .box_title {
    font-size: 2.4rem;
  }
`;
